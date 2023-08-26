import React from 'react';
import CoursePageComment from './CoursePageComment';
import CourseSinglePart from './CourseSinglePart';

const CoursePage = () => {
    return (

        <React.Fragment>

            <div class="container">
                <nav aria-label="breadcrumb">
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#"> تاپ لرن </a></li>
                        <li class="breadcrumb-item active"><a href="#"> دوره ها </a></li>
                        <li class="breadcrumb-item active" aria-current="page"> دوره آموزشی ساخت ربات تلگرام </li>
                    </ul>
                </nav>
            </div>

            <div class="container">
                <section class="term-content">
                    {/* <header><h1> دوره آموزشی ساخت ربات تلگرام </h1></header> */}
                    <div class="row">

                        <div class="col-md-8 col-sm-12 col-xs-12 pull-left">
                            <section class="term-description" style={{ borderRadius: "10px" }}>
                                <img src="images/pic/big-thumb.jpg" style={{ borderRadius: "10px" }} />
                                <header><h1 style={{ fontSize: "2.7rem", marginBottom: "10vh" }}> دوره آموزشی ساخت ربات تلگرام </h1></header>

                                <h2> ربات تلگرام برای چه کاری مفید است ؟ </h2>
                                <p>
                                    توضیحات دوره
                                </p>

                                <h2> سرفصل های این دوره : </h2>

                                <ul>

                                    <CourseSinglePart />

                                </ul>

                            </section>

                            <CoursePageComment />

                        </div>

                        <aside class="col-md-4 col-sm-12 col-xs-12 pull-right">

                            <article class="teacher-info" style={{ borderRadius: "10px" }}>
                                <img src="images/pic/avatar.jpg" style={{ border: "1px solid #b7b7b7" }} />
                                <h2 style={{ fontSize: "1.9rem" }}> مدرس : ایمان مدائنی </h2>
                                <p style={{ color: "green", textAlign: "center", fontSize: "1.7rem" }}>
                                    رزومه
                                </p>
                            </article>


                            <article class="term-info" style={{ borderRadius: "10px" }}>
                                <h2 style={{ fontSize: "2rem" }}> اطلاعات این دوره </h2>
                                <ul>
                                    <li><span style={{ fontSize: "1.8rem" }}>سطح دوره :</span> <span style={{ fontSize: "1.6rem" }}>پیشرفته</span></li>
                                    <li><span style={{ fontSize: "1.8rem" }}>وضعیت دوره :</span> <span style={{ fontSize: "1.6rem" }}>درحال برگزاری</span></li>
                                    <li><span style={{ fontSize: "1.8rem" }}>قیمت دوره :</span> <span style={{ fontSize: "1.6rem" }}>450,000 تومان</span></li>
                                    <li><span style={{ fontSize: "1.8rem" }}>مدت دوره :</span> <span style={{ fontSize: "1.6rem" }}>03:12:52</span></li>
                                    <li><span style={{ fontSize: "1.8rem" }}>تعداد ویدیوها :</span> <span style={{ fontSize: "1.6rem" }}>16</span></li>
                                    <li><span style={{ fontSize: "1.8rem" }}>تعداد ویدیوها :</span> <span style={{ fontSize: "1.6rem" }}> <span>52</span> نفر </span></li>
                                </ul>
                                <div class="statistics" style={{ borderRadius: "10px", border: "none" }}>

                                    <a href=""> ثبت نام دوره </a>

                                </div>
                            </article>
                            <div class="tags-layer" style={{ borderRadius: "10px" }}>
                                <a href=""> ربات تلگرام </a>
                                <a href=""> ساخت ربات </a>
                                <a href=""> برنامه نویسی ربات </a>
                                <a href=""> کدنویسی ربات </a>
                                <a href=""> ربات تلگرام </a>
                                <a href=""> ساخت ربات </a>
                                <a href=""> برنامه نویسی ربات </a>
                                <a href=""> کدنویسی ربات </a>
                            </div>



                        </aside>
                    </div>
                </section>
            </div>

        </React.Fragment>

    );
}

export default CoursePage;