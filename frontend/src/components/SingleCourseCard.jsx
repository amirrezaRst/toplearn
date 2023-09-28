import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import config from "../services/config.json";


const SingleCourseCard = ({ location, id, title, teacher, price, courses, cover, special }) => {

    const [time, setTime] = useState();

    useEffect(() => {
        if (courses != undefined) {
            const second = courses.reduce((total, sec) => {
                return total + sec.time
            }, 0)
            var date = new Date(null);
            date.setSeconds(second);
            var time = date.toISOString().substr(11, 8);
            setTime(time)
        }
    }, [])

    return (
        <Link to={`/course/${id}`} class="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
            <article style={location == "/" ? { borderRadius: "6px" } : { borderRadius: "5px" }}>
                <a href="" class="img-layer">
                    <img src={`${config.domain}/${cover}`} style={location == "/" ? { borderRadius: "6px 6px 0 0" } : { borderRadius: "5px 5px 0 0" }} />
                </a>
                <h2>
                    <Link to={`/course/${id}`} style={location == "/" ? { fontSize: "1.6rem" } : { fontSize: "1.4rem" }}> {title} </Link>
                </h2>
                <h2>
                    <Link to={`/course/${id}`} style={location == "/" ? { fontSize: "1.5rem", color: "#778286" } : { fontSize: "1.4rem", color: "#778286" }}>
                        <p className="fa fa-user"></p> {teacher}
                    </Link>
                </h2>
                <span style={location == "/" ? { fontSize: "1.75rem" } : { fontSize: "1.5rem" }}> {price == 0 && !special ? "رایگان" : price == 0 && special ? "اعضای ویژه" : price} </span>
                <i style={location == "/" ? { fontSize: "1.7rem", color: "#00bffe" } : { fontSize: "1.4rem", color: "#00bffe" }}>{time}</i>
                {/* <i style={location == "/" ? { fontSize: "1.7rem",color:"#00bffe" } : { fontSize: "1.4rem",color:"#00bffe" }}> {time} </i> */}
            </article>
        </Link>
    );
}

export default SingleCourseCard;