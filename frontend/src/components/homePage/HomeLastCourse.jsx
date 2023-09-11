import React from 'react';
import { Link } from "react-router-dom"

import SingleCourseCard from '../SingleCourseCard';

const HomeLastCourse = ({ courses }) => {

    const result = () => {
        console.log(courses);
    }

    return (
        <section class="terms-items">
            <header style={{ display: "flex", justifyContent: "space-between", marginBottom: "50px" }}>
                <div>
                    <div style={{ width: "75%", height: "3.5px", background: "#5ce561", borderRadius: '20px', marginBottom: "3px", float: "left" }}></div>
                    <h2 style={{ fontWeight: "500" }} onClick={result}> آخرین دوره های تاپ لرن </h2>
                    <div style={{ width: "75%", height: "3.5px", background: "#00bffe", borderRadius: '20px', marginTop: "5px" }}></div>
                </div>
                <Link to="/archive"> مشاهده همه دوره ها <i className="far fa-arrow-left" style={{ color: "#00bffe", fontSize: "1.8rem", marginRight: "5px" }}></i></Link>
            </header>
            <div class="row">

                {courses && courses.length > 0 ?
                    courses.map((item, index) => <SingleCourseCard location={window.location.pathname} id={item._id} title={item.title} teacher={item.teacher.fullName} price={item.price} courses={item.courses} cover={item.cover} />)
                    : null
                }

            </div>
        </section>
    );
}

export default HomeLastCourse;