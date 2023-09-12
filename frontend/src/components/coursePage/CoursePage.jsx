import React, { useEffect, useState } from 'react';
import Breadcrumb from '../common/Breadcrumb';
import CoursePageComment from './CoursePageComment';
import CourseInformation from "./CourseInformation";
import CourseSinglePart from './CourseSinglePart';
import CourseTags from "./CourseTags";
import CourseShare from "./CourseShare"
import TeacherResume from './TeacherResume';
import ShortUrl from './ShortUrl';
import axios from 'axios';
import config from "../../services/config.json";
import { useLocation } from 'react-router';

const CoursePage = ({ user }) => {

    const [courseData, setCourseData] = useState();
    const [license, setLicense] = useState();
    const location = useLocation().pathname.split("/")[2];


    const courseApi = async () => {
        await axios.get(`${config.domain}/api/course/singleCourse/${location}`).then(res => {
            console.log(res.data.course);
            setCourseData(res.data.course);
        }).catch(err => {
            console.log(err);
        });
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
        console.log(license);
    }

    return (

        <React.Fragment>

            <Breadcrumb />

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
                                <h1>{!license ? "false" : "true"}</h1>
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

                            <CoursePageComment />

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

                            <button className="btn" id='favorite-course'>افزودن به علاقه مندی ها <i className="fa fa-heart"></i></button>

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