import React, { useEffect, useState } from 'react';
import { Route, Routes, Switch } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import config from "../services/config.json";

import MainLayout from '../components/layouts/MainLayout';
import AccountLayout from '../components/layouts/AccountLayout';

import Home from '../components/homePage/Home';
import SingUp from '../components/register/SignUp';
import LogIn from '../components/register/LogIn';
import Archive from '../components/archivePage/Archive';
import EditProfile from '../components/accountPage/EditProfile';
import CoursePage from '../components/coursePage/CoursePage';
import ContextApi from '../services/ContextApi';

import Teachers from '../components/teachers/Teachers';
import TeacherPage from '../components/teachers/TeacherPage';
import AboutUs from '../components/usPage/AboutUs';
import ContactUs from '../components/usPage/ContactUs';
import Dashboard from '../components/accountPage/Dashboard';
import EditSetting from '../components/accountPage/EditSetting';
import NotFound from '../components/NotFound';
import EditPassword from '../components/accountPage/EditPassword';
import Orders from '../components/accountPage/Orders';
import FavoriteCourse from '../components/accountPage/FavoriteCourse';
import Consult from '../components/accountPage/Consult';
import Basket from '../components/accountPage/Basket';


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
    }, []);

    return (

        <ContextApi.Provider value={{ userData, setUserData, userLogin, setUserLogin, courses, setCourses }}>
            <MainLayout userData={userData} userLogin={userLogin}>

                <Routes>
                    <Route path="/" exact element={<Home courses={courses} />} />
                    <Route path="/signUp" element={<SingUp />} />
                    <Route path="/logIn" element={<LogIn />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/courses" element={<Archive courses={courses ? courses : null} />} />
                    <Route path="/course/*" element={<CoursePage user={userData} setUser={setUserData} />} />
                    <Route path="/teachers" element={<Teachers />} />
                    <Route path="/teachers/:teacherId" element={<TeacherPage courses={courses && courses.length > 0 ? courses : undefined} />} />

                    <Route path="/account/dashboard" element={<AccountLayout><Dashboard /></AccountLayout>} />
                    <Route path="/account/edit-profile" element={<AccountLayout><EditProfile /></AccountLayout>} />
                    <Route path="/account/edit-setting" element={<AccountLayout><EditSetting /></AccountLayout>} />
                    <Route path="/account/edit-password" element={<AccountLayout><EditPassword /></AccountLayout>} />
                    <Route path="/account/order" element={<AccountLayout><Orders /></AccountLayout>} />
                    <Route path="/account/favorite-course" element={<AccountLayout><FavoriteCourse /></AccountLayout>} />
                    <Route path="/account/consult" element={<AccountLayout><Consult /></AccountLayout>} />
                    <Route path="/account/basket" element={<Basket user={userData ? userData : null} setUser={setUserData} />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>

                <ToastContainer />
            </MainLayout>

        </ContextApi.Provider>

    );
}

export default Toplearn;