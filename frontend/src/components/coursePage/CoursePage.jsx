import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import CoursePageComment from './CoursePageComment';
import CourseInformation from "./CourseInformation";
import CourseSinglePart from './CourseSinglePart';
import CourseTags from "./CourseTags";
import CourseShare from "./CourseShare"
import TeacherResume from './TeacherResume';

const CoursePage = () => {
    return (

        <React.Fragment>

            <Breadcrumb />

            <div class="container">
                <section class="term-content">
                    <div class="row">

                        <div class="col-md-8 col-sm-12 col-xs-12 pull-left">
                            <section class="term-description" style={{ borderRadius: "10px" }}>
                                <header>

                                    <h1 style={{ fontSize: "2rem" }}> دوره آموزشی ساخت ربات تلگرام </h1>
                                    <div className="url-copy">

                                        <div className="" style={{ color: "#686371" }}>
                                            <span style={{ marginLeft: "14px", fontSize: "1.5rem" }}>لینک کوتاه</span>
                                            <span style={{ fontFamily: "sans-serif" }}>https://toplearn.com/c/59376</span>
                                        </div>
                                        <div id='url-copy-btn' style={{ borderRight: "1px solid #d6d9db" }}>
                                            <i class="fal fa-copy"></i>
                                        </div>

                                    </div>

                                </header>
                                <img src="/images/pic/big-thumb.jpg" style={{ borderRadius: "10px" }} />

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

                            <TeacherResume />

                            <CourseInformation />

                            <button className="btn" id='favorite-course'>افزودن به علاقه مندی ها <i className="fa fa-heart"></i></button>

                            <CourseTags />

                            <CourseShare />


                        </aside>
                    </div>
                </section>
            </div>

        </React.Fragment>

    );
}

export default CoursePage;