import React from 'react';
import { Link } from "react-router-dom";

import config from "../../services/config.json";


const TeacherResume = ({ id, image, fullName }) => {
    return (
        <article class="teacher-info" style={{ borderRadius: "10px" }}>
            <img src={`${config.domain}/${image}`} style={{ border: "1px solid #b7b7b7" }} />
            <h2 style={{ fontSize: "1.9rem" }}> مدرس : {fullName} </h2>
            <p style={{ color: "green", textAlign: "center", fontSize: "1.7rem" }}>
                <Link to={`/teachers/${id}`}>رزومه</Link>
            </p>
        </article>
    );
}

export default TeacherResume;