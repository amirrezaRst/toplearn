import React, { useEffect, useState } from 'react';
import Breadcrumb from '../common/Breadcrumb';
import CoursePageComment from './commentSection/CoursePageComment';
import CourseInformation from "./CourseInformation";
import CourseSinglePart from './CourseSinglePart';
import CourseTags from "./CourseTags";
import CourseShare from "./CourseShare"
import TeacherResume from './TeacherResume';
import ShortUrl from './ShortUrl';
import axios from 'axios';
import config from "../../services/config.json";
import { useLocation } from 'react-router';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const CoursePage = ({ user, setUser }) => {

    const [courseData, setCourseData] = useState();
    const [license, setLicense] = useState();
    const location = useLocation().pathname.split("/")[2];


    const courseApi = async () => {
        await axios.get(`${config.domain}/api/course/singleCourse/${location}`).then(res => {
            setCourseData(res.data.course);
        }).catch(err => {
            console.log(err);
        });
    };


    const addToFavorite = async () => {
        await axios.get(`${config.domain}/api/user/addToFavorite/${user._id}/${courseData._id}`, { headers: { "x-auth-token": localStorage.getItem("token") } }).then(res => {
            setUser(res.data.user);
        }).catch(err => {
            if (err.response.data.status === 401) {
                toast.error(`برای افزودن به علاقه مندی ها باید وارد حساب کاربری شوید`, {
                    position: "bottom-right",
                    theme: "light",
                    closeOnClick: true,
                    rtl: true
                });
            }
            console.log(err);
        })
    }

    const deleteToFavorite = async () => {
        await axios.get(`${config.domain}/api/user/deleteToFavorite/${user._id}/${courseData._id}`, { headers: { "x-auth-token": localStorage.getItem("token") } }).then(res => {
            setUser(res.data.user);
        }).catch(err => {
            if (err.response.data.status === 401) {
                toast.error(`برای حذف از علاقه مندی ها باید وارد حساب کاربری شوید`, {
                    position: "bottom-right",
                    theme: "light",
                    closeOnClick: true,
                    rtl: true
                });
            }
            console.log(err);
        })

    }

    const statusPurchase = () => {
        const findCourse = user.registeredCourses.findIndex(item => {
            return item == courseData._id
        })
        if (findCourse > -1) return setLicense(true)
        setLicense(false);
    }

    useEffect(() => {
        courseApi();
    }, [])
    useEffect(() => {
        if (user) {
            statusPurchase()
        }
    }, [courseApi, user])

    const result = () => {
        console.log(window.location.pathname);
    }

    return (

        <React.Fragment>

            <Breadcrumb location={courseData ? ["/courses", courseData.title] : null} />

            <div class="container">
                <section class="term-content">
                    <div class="row">
                        <button className="btn btn-primary" onClick={result}>Result</button>

                        <div class="col-md-8 col-sm-12 col-xs-12 pull-left">
                            <section class="term-description" style={{ borderRadius: "10px" }}>
                                {courseData ?
                                    <ShortUrl title={courseData.title} id={courseData.shortUrl} />
                                    : null
                                }

                                {courseData ?
                                    <img src={`${config.domain}/${courseData.cover}`} style={{ borderRadius: "10px" }} />
                                    : null
                                }
                                <h2 style={{ fontSize: "2rem" }}> ربات تلگرام برای چه کاری مفید است ؟ </h2>
                                <p>
                                    توضیحات دوره
                                </p>

                                <h2 style={{ fontSize: "2rem" }}> سرفصل های این دوره : </h2>

                                <ul>

                                    {courseData ?
                                        courseData.courses.map(item =>
                                            <CourseSinglePart title={item.title} description={item.description} free={item.free} second={item.time} url={item.video} license={license} />
                                        )
                                        : null
                                    }

                                </ul>

                            </section>

                            <CoursePageComment user={user} courseId={courseData ? courseData._id : null} course={courseData} setCourse={setCourseData} />

                        </div>

                        <aside class="col-md-4 col-sm-12 col-xs-12 pull-right">

                            {courseData ?
                                <TeacherResume id={courseData.teacher._id} fullName={courseData.teacher.fullName} image={courseData.teacher.pic} />
                                : null
                            }

                            {courseData ?
                                <CourseInformation courseLevel={courseData.courseLevel} courseStatus={courseData.courseStatus} courses={courseData.courses}
                                    price={courseData.price} discount={courseData.discount} update={courseData.lastUpdate} license={license} />
                                : null
                            }
                            {
                                courseData && user && user.favorite.findIndex(item => {
                                    return item._id == courseData._id
                                }) > -1 ?
                                    <button className="btn" id='favorite-course2' style={{ fontSize: "16px" }} onClick={deleteToFavorite}>
                                        حذف از علاقه مندی ها <i className="far fa-heart"></i>
                                    </button> :
                                    <button className="btn" id='favorite-course' onClick={addToFavorite}>
                                        افزودن به علاقه مندی ها <i className="fa fa-heart"></i>
                                    </button>
                            }


                            {courseData ?
                                <CourseTags tags={courseData.tags} />
                                : null
                            }

                            <CourseShare />


                        </aside>
                    </div>
                </section>
            </div>

        </React.Fragment>

    );
}

export default CoursePage;