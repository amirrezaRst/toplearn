import React, { useEffect, useState } from 'react';
import axios from "axios";
import { toast } from "react-toastify";


import TeachersHeader from "./TeachersHeader";
import SingleTeacherCard from './SingleTeacherCard';
import config from "../../services/config.json";

const Teachers = () => {
    const [teachers, setTeachers] = useState();

    const fetchTeachers = async () => {
        await axios.get(`${config.domain}/api/teacher/teacherList`).then(({ data }) => {
            console.log(data);
            setTeachers(data.teachers)
        }).catch(err => {
            toast.error(`مشکلی سمت سرور رخ داده ، لطفا بعدا امتحان کنید`, {
                position: "bottom-right",
                theme: "light",
                closeOnClick: true,
                rtl: true
            })
            console.log(err);
        })
    };

    useEffect(() => {
        fetchTeachers();
    }, [])

    return (
        <main className='teachers-page-content container'>

            <TeachersHeader />

            <div className="row" style={{ padding: "30px 0" }}>

                {teachers && teachers.length > 0 ?
                    teachers.map(user => <SingleTeacherCard id={user._id} fullName={user.fullName} profile={user.profile} />)
                    : null
                }

            </div>

        </main>
    );
}

export default Teachers;