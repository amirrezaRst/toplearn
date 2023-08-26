import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom"
import HomeHeader from '../homePage/HomeHeader';


const TopNavbar = () => {

    const [location, setLocation] = useState("/")


    const homeChange = () => {
        setLocation("/")
    }
    const aboutUsChange = () => {
        setLocation("/aboutUs")
    }
    const contactUsChange = () => {
        setLocation("/contactUs")
    }

    return (
        <div class="landing-layer">
            <div className="container">
                <nav>
                    <div className="row">
                        <div className="col-sm-6 col-xs-12">
                            <ul>
                                <li>
                                    <NavLink to="/" exact activeStyle={{ color: "#20991d" }} onClick={homeChange} > صفحه اصلی </NavLink>
                                    <NavLink to="/" exact activeStyle={{ color: "#20991d" }} onClick={homeChange} > همکاری در فروش </NavLink>
                                    <NavLink to="/aboutUs" activeStyle={{ color: "#20991d" }} onClick={aboutUsChange} > درباره ما </NavLink>
                                    <NavLink to="/ContactUs" activeStyle={{ color: "#20991d" }} onClick={contactUsChange} > تماس با ما </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-xs-12">
                            <div className="clientarea">
                                <div className="loggein ">
                                    <i className="zmdi zmdi-account"></i><a href=""> ایمان مدائنی ، خوش آمدی </a>
                                </div>
                                <div className="signin hidden">
                                    <i className="zmdi zmdi-account"></i>
                                    <a href=""> ورود </a> /
                                    <a href=""> عضویت </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                {location == "/" ? <HomeHeader /> : null}
            </div>
        </div>
    );
}

export default TopNavbar;