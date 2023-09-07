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

const CoursePage = () => {

    const [courseData, setCourseData] = useState();
    const location = useLocation().pathname.split("/")[2]


    const courseApi = async () => {
        await axios.get(`${config.domain}/api/course/singleCourse/${location}`).then(res => {
            console.log(res.data.course);
            setCourseData(res.data.course);
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        courseApi();
    }, [])

    const result = () => {
        console.log(courseData);
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

                                <h2 style={{ fontSize: "2rem" }}> ربات تلگرام برای چه کاری مفید است ؟ </h2>
                                <p>
                                    توضیحات دوره
                                </p>

                                <h2 style={{ fontSize: "2rem" }}> سرفصل های این دوره : </h2>

                                <ul>

                                    <CourseSinglePart />

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
                                <CourseInformation courseLevel={courseData.courseLevel} courseStatus={courseData.courseStatus} courseTime={courseData.courseTime}
                                    courses={courseData.courses} price={courseData.price} discount={courseData.discount} student={courseData.student} />
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