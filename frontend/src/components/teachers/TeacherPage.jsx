import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from "axios";
import swr from "swr";

import config from "../../services/config.json";
import Breadcrumb from '../common/Breadcrumb';
import SingleCourseCard from '../SingleCourseCard';


const TeacherPage = ({ courses }) => {
    const params = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [teacher, setTeacher] = useState();
    const [teacherCourses, setTeacherCourses] = useState();




    const fetchTeacher = async (par) => {
        await axios.get(`${config.domain}/api/teacher/singleTeacher/${par}`).then(({ data }) => {
            setIsLoading(true);
            setTeacher(data.teacher);

            filterCourses(data.teacher._id)

            setIsLoading(false)
        }).catch(err => {
            console.log(err);
        })
    }
    const filterCourses = (teacherId) => {
        if (courses && courses.length > 0) {
            const filter = courses.filter(course => {
                return course.teacher._id == teacherId;
            })
            setTeacherCourses(filter);
            console.log("run this line2");
        }
    }

    useEffect(() => {
        fetchTeacher(params.teacherId);
    }, [params]);




    if (isLoading) return (
        <div className='w-full h-[100vh] flex items-center justify-center'>
            <h1 className="text-5xl text-medium text-indigo-500">Loading... {isLoading == true ? "true" : "false"}</h1>
        </div>
    )


    return (
        <main className='container'>
            <div className="teacher-page">
                {/* <i className="fab fa-instagram"></i>
                                <i className="fab fa-facebook"></i>
                                <i className="fab fa-google"></i>
                                <i className="fab fa-github"></i>
                                <i className="fab fa-telegram"></i> */}
                {
                    <div>
                        <Breadcrumb location={["/courses", teacher.fullName]} />

                        <div className="teacher-info-card">
                            <img src={`${config.domain}/${teacher.profile}`} className='img-fluid' alt={teacher.fullName} />
                            <div>
                                <h2>{teacher.fullName}</h2>
                                <p>{teacher.bio}</p>
                            </div>
                        </div>
                        <div className="teacher-social-card">
                            {teacher.socialMedia && teacher.socialMedia.length > 0 ?
                                teacher.socialMedia.map(item =>
                                    <div className="social-item">
                                        <i className={`fab fa - ${item.name == "email" ? "google" : item.name}`}></i>
                                        <span>{item.name}</span>
                                    </div>
                                )
                                : null
                            }
                        </div>

                        <div className="teacher-social-course terms-items">
                            <h3>دوره های استاد {teacher.fullName}</h3>

                            <div className="row">
                                {
                                    teacherCourses.map(item =>
                                        <SingleCourseCard location={"/"} id={item._id} title={item.title} teacher={item.teacher.fullName}
                                            price={item.price} courses={item.courses} cover={item.cover} special={item.specialMember} />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                }

            </div>
        </main >
    );
}

export default TeacherPage;