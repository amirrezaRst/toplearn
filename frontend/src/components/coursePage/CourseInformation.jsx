import React from 'react';



const CourseInformation = ({ courseLevel, courseStatus, courseTime, courses, student, price, discount }) => {
    return (
        <article class="term-info" style={{ borderRadius: "10px" }}>
            <h2 style={{ fontSize: "2rem" }}> اطلاعات این دوره </h2>
            <ul>
                <li>
                    <span style={{ fontSize: "1.8rem" }}>سطح دوره :</span> <span style={{ fontSize: "1.6rem" }}>
                        {courseLevel == "basic" ? "مقدماتی" : courseLevel == "middle" ? "متوسط" : "پیشرفته"}
                    </span>
                </li>
                <li>
                    <span style={{ fontSize: "1.8rem" }}>وضعیت دوره :</span>
                    <span style={{ fontSize: "1.6rem", color: "#00bffe" }}> {courseStatus == "started" ? "درحال برگزاری" : "به اتمام رسیده"} </span>
                </li>
                <li><span style={{ fontSize: "1.8rem" }}>مدت دوره :</span> <span style={{ fontSize: "1.6rem" }}>{courseTime}</span></li>
                <li><span style={{ fontSize: "1.8rem" }}>تعداد ویدیوها :</span> <span style={{ fontSize: "1.6rem" }}> {courses.length} </span></li>
                <li><span style={{ fontSize: "1.8rem" }}>تعداد ویدیوها :</span> <span style={{ fontSize: "1.6rem" }}> <span>{student}</span> نفر </span></li>
                <li><span style={{ fontSize: "2.1rem", marginTop: '30px' }}>قیمت دوره :</span> <span style={{ fontSize: "1.9rem", color: "#2aaf27" }}>{price==0?"رایگان":`${price} تومان`}</span></li>
            </ul>
            <button className='btn' id='register-course'>ثبت نام دوره</button>
        </article>
    );
}

export default CourseInformation;