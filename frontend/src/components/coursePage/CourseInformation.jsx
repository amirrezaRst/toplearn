import React, { useEffect, useState } from 'react';
import moment from "moment-jalali";
import axios from 'axios';
import { toast } from "react-toastify";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

import config from "../../services/config.json";


const CourseInformation = ({ courseId, user, setUser, courseLevel, courseStatus, courses, update, price, discount, license }) => {
    const [time, setTime] = useState();
    const [lastUpdate, setLastUpdate] = useState();
    const navigation = useNavigate();

    const result = () => {
        console.log(user);
    }

    const percentage = () => {
        const num = price - ((price / 100) * discount)
        return num
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
        newTime = moment(newTime, 'YYYY-M-D').format('jYYYY/jM/jD');
        setLastUpdate(newTime);
    }, [])


    const handleRegister = async () => {
        await axios.get(`${config.domain}/api/user/addToCart/${user._id}/${courseId}`, { headers: { "x-auth-token": localStorage.getItem("token") } }).then(({ data }) => {
            setUser(data.user);
            Swal.fire({
                icon: 'success',
                title: 'دوره به سبد خرید اضافه شد',
                confirmButtonColor: "#2AAF27",
            })
            navigation("/account/basket")
        }).catch(err => {
            toast.error(`این دوره قبلا به سبد خرید اضافه شده است`, {
                position: "bottom-right",
                theme: "light",
                closeOnClick: true,
                rtl: true
            });
            console.log(err);
        })
    }

    return (
        <article class="term-info" style={{ borderRadius: "10px" }}>
            {/* <div style={{width:"100%", display: "flex", justifyContent: "center" }}> */}
            <h2 style={{ fontSize: "2rem", display: "flex", justifyContent: "space-between" }}>
                <span>اطلاعات این دوره</span>
                {price != 0 && discount != 0 ?
                    <span style={{ color: "red", fontWeight: "bold" }}>{discount}%</span> : null
                }
            </h2>
            <ul>
                <li>
                    <span style={{ fontSize: "1.8rem" }} onClick={result}>سطح دوره :</span> <span style={{ fontSize: "1.6rem" }}>
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
                <li className='course-information-price' >

                    <span style={{ fontSize: "2rem", marginLeft: "15px" }}>قیمت دوره :</span>
                    <div>
                        {discount != 0 && price != 0 ?
                            <del style={{ fontSize: "1.9rem", color: "#c9302c" }}>
                                {price == 0 ? "رایگان" : `${new Intl.NumberFormat().format(price)} تومان`}
                            </del> : null
                        }
                        <span style={{ fontSize: "1.9rem", color: "#2aaf27" }}>
                            {price == 0 ? "رایگان" : `${new Intl.NumberFormat().format(discount != 0 ? percentage() : price)} تومان`}
                        </span>
                    </div>

                </li>
            </ul>
            {
                !license && price != 0 ?
                    <button className='btn' id='register-course' onClick={handleRegister}>ثبت نام دوره</button> :
                    license && price != 0 ?
                        <p style={{ color: "#65C563", fontSize: "17px", marginTop: "20px" }}>
                            <i className="far fa-check-double"></i> <span>این دوره قبلا خریداری شده</span>
                        </p> :
                        null
            }
        </article >
    );
}

export default CourseInformation;