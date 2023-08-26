import React from 'react';
import { Route, Switch } from "react-router";

import MainLayout from '../components/layouts/MainLayout';
import Home from '../components/homePage/Home';
import SingUp from '../components/register/SignUp';
import LogIn from '../components/register/LogIn';
import Archive from '../components/archivePage/Archive';
import Profile from '../components/profilePage/Profile';
import EditProfile from '../components/profilePage/EditProfile';
import CoursePage from '../components/coursePage/CoursePage';


const Toplearn = () => {
    return (

        <MainLayout>

            <Switch>

                <Route path="/" exact ><Home /></Route>
                <Route path="/signUp" ><SingUp /></Route>
                <Route path="/logIn" ><LogIn /></Route>
                <Route path="/archive" ><Archive /></Route>
                <Route path="/singleCourse/" ><CoursePage /></Route>
                <Route path="/profile" ><Profile /></Route>
                <Route path="/editProfile" ><EditProfile /></Route>

            </Switch>

        </MainLayout>

    );
}

export default Toplearn;