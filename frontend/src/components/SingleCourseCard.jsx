import React from 'react';
import { Link } from 'react-router-dom';

import Image from "../images/pic/4.jpg"


const SingleCourseCard = ({ location }) => {

    return (
        <Link to="/singleCourse/">
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                <article style={location == "/" ? { borderRadius: "6px" } : { borderRadius: "5px" }}>
                    <a href="" class="img-layer"><img src={Image} style={location == "/" ? { borderRadius: "6px 6px 0 0" } : { borderRadius: "5px 5px 0 0" }} /></a>
                    <h2><a href="" style={location == "/" ? { fontSize: "1.7rem" } : { fontSize: "1.4rem" }}> آموزش متریال دیاین در زامارین </a></h2>
                    <span style={location == "/" ? { fontSize: "2rem" } : { fontSize: "1.7rem" }}> رایگان </span>
                    <i style={location == "/" ? { fontSize: "1.8rem" } : { fontSize: "1.5rem" }}> 1:52:32</i>
                    {/* <i className="fa fa-car"></i> */}
                </article>
            </div>
        </Link>
    );
}

export default SingleCourseCard;