import React, { useEffect, useState } from 'react';
import moment from "moment-jalali";


const CourseInformation = ({ courseLevel, courseStatus, courses, update, price, discount, license }) => {
    const [time, setTime] = useState();
    const [lastUpdate, setLastUpdate] = useState();

    const result = () => {
        console.log(lastUpdate);
    }

    useEffect(() => {
        const second = courses.reduce((total, sec) => {
            return total + sec.time
        }, 0)

        //! Set course time
        var date = new Date(null);
        date.setSeconds(second);
        var time = date.toISOString().substr(11, 8);
        setTime(time)

        //! Set last update
        var newTime = update.split("T")[0].split("-");
        newTime = `${newTime[0]}/${newTime[1]}/${newTime[2]}`;
        newTime = moment(newTime, 'YYYY-M-D').endOf('jMonth').format('jYYYY/jM/jD');
        setLastUpdate(newTime);
    }, [])

    return (
        <article class="term-info" style={{ borderRadius: "10px" }}>
            <h2 style={{ fontSize: "2rem" }} onClick={result}> اطلاعات این دوره </h2>
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
                <li><span style={{ fontSize: "1.8rem" }}>مدت دوره :</span> <span style={{ fontSize: "1.6rem" }}> {time} </span></li>
                <li><span style={{ fontSize: "1.8rem" }}>تعداد ویدیوها :</span> <span style={{ fontSize: "1.6rem" }}> {courses.length} </span></li>
                <li>
                    <span style={{ fontSize: "1.8rem" }}>آخرین بروزرسانی :</span> <span style={{ fontSize: "1.6rem" }}>
                        {/* {moment(update,"jYYYY/jM/jD")} */}
                        {lastUpdate}
                    </span>
                </li>
                <li><span style={{ fontSize: "2rem", marginTop: '20px' }}>قیمت دوره :</span> <span style={{ fontSize: "1.9rem", color: "#2aaf27" }}>{price == 0 ? "رایگان" : `${price} تومان`}</span></li>
            </ul>
            {
                !license && price != 0 ?
                    <button className='btn' id='register-course'>ثبت نام دوره</button> :
                    license && price != 0 ?
                        <p style={{ color: "#65C563", fontSize: "17px", marginTop: "20px" }}>
                            <i className="far fa-check-double"></i> <span>این دوره قبلا خریداری شده</span>
                        </p> :
                        null
            }
        </article>
    );
}

export default CourseInformation;