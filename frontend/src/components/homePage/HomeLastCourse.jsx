import React from 'react';
import { Link } from "react-router-dom"

import SingleCourseCard from '../SingleCourseCard';

const HomeLastCourse = () => {
    return (
        <section class="terms-items">
            <header>
                <h2> آخرین دوره های تاپ لرن </h2>
                <Link to="/archive"> مشاهده همه دوره ها </Link>
            </header>
            <div class="row">

                <SingleCourseCard location={window.location.pathname} />

            </div>
        </section>
    );
}

export default HomeLastCourse;