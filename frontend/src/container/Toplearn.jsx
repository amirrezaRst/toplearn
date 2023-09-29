import React, { useEffect, useState } from 'react';
import { Route, Routes, Switch } from "react-router";
import { ToastContainer, toast } from "react-toastify";

import MainLayout from '../components/layouts/MainLayout';
import Home from '../components/homePage/Home';
import SingUp from '../components/register/SignUp';
import LogIn from '../components/register/LogIn';
import Archive from '../components/archivePage/Archive';
import Profile from '../components/profilePage/Profile';
import EditProfile from '../components/profilePage/EditProfile';
import CoursePage from '../components/coursePage/CoursePage';
import ContextApi from '../services/ContextApi';
import axios from "axios";

import config from "../services/config.json";
import Teachers from '../components/teachers/Teachers';

const Toplearn = () => {

    const [userData, setUserData] = useState();
    const [userLogin, setUserLogin] = useState(false);
    const [courses, setCourses] = useState([]);

    const courseApi = async () => {
        await axios.get(`${config.domain}/api/course/courseList`).then(res => {
            setCourses(res.data.courses);
        }).catch(err => {
            toast.error(`مشکلی سمت سرور رخ داده ، لطفا بعدا امتحان کنید`, {
                position: "bottom-right",
                theme: "light",
                closeOnClick: true,
                rtl: true
            })
            console.log(err);
        })
    }

    const userApi = async () => {
        const id = localStorage.getItem("userId");

        await axios.get(`${config.domain}/api/user/singleuser/${id}`).then(res => {
            // console.log(res);
            setUserData(res.data.user)
            setUserLogin(true);
        }).catch(err => {
            toast.error(`مشکلی سمت سرور رخ داده ، لطفا بعدا امتحان کنید`, {
                position: "bottom-right",
                theme: "light",
                closeOnClick: true,
                rtl: true
            });
            console.log(err);
        })
    }

    useEffect(() => {
        courseApi();
        if (localStorage.getItem("userId")) return userApi();
    }, [])

    return (

        <ContextApi.Provider value={{ userData, setUserData, userLogin, setUserLogin, courses, setCourses }}>
            <MainLayout userData={userData} userLogin={userLogin}>

                <Routes>
                    <Route path="/" exact element={<Home courses={courses} />} />
                    <Route path="/signUp" element={<SingUp />} />
                    <Route path="/logIn" element={<LogIn />} />
                    <Route path="/courses" element={<Archive courses={courses ? courses : null} />} />
                    <Route path="/course/*" element={<CoursePage user={userData} setUser={setUserData} />} />
                    <Route path="/teachers" element={<Teachers />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/editProfile" element={<EditProfile />} />
                </Routes>
                <ToastContainer />


            </MainLayout>
        </ContextApi.Provider>

    );
}

export default Toplearn;