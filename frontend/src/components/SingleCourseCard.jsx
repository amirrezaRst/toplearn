import React from 'react';
import { Link } from 'react-router-dom';

// import Image from "../images/pic/9.jpg"


const SingleCourseCard = ({ location }) => {

    return (
            <Link to="/singleCourse/" class="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                <article style={location == "/" ? { borderRadius: "6px" } : { borderRadius: "5px" }}>
                    <a href="" class="img-layer"><img src="/images/pic/9.jpg" style={location == "/" ? { borderRadius: "6px 6px 0 0" } : { borderRadius: "5px 5px 0 0" }} /></a>
                    <h2><a href="" style={location == "/" ? { fontSize: "1.6rem" } : { fontSize: "1.4rem" }}> آموزش متریال دیاین در زامارین</a></h2>
                    <span style={location == "/" ? { fontSize: "1.75rem" } : { fontSize: "1.5rem" }}> رایگان </span>
                    <i style={location == "/" ? { fontSize: "1.7rem" } : { fontSize: "1.4rem" }}> 1:52:32</i>
                </article>
            </Link>
    );
}

export default SingleCourseCard;