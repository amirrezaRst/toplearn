import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from "react-router-dom"
import HomeHeader from '../homePage/HomeHeader';


const TopNavbar = ({ userData, userLogin }) => {
    const location = useLocation().pathname;

    const result = () => {
        console.log(userLogin);
        console.log(userData);
    }

    return (
        <div class="landing-layer">
            <div id="home-filter">
                <div className="container">
                    <nav>
                        <div className="row">
                            <div className="col-sm-6 col-xs-12">
                                <ul>
                                    <li>
                                        <Link to="/" style={{ display: "inline", marginLeft: "20px" }}><img src="/images/logo3.png" style={{ width: "10%" }} alt="" /></Link>
                                        <NavLink to="/" exact activeStyle={{ color: "#20991d" }} > صفحه اصلی </NavLink>
                                        <NavLink to="/courses" activeStyle={{ color: "#20991d" }} > دوره ها </NavLink>
                                        <NavLink to="/" exact activeStyle={{ color: "#20991d" }} > همکاری در فروش </NavLink>
                                        <NavLink to="/about-us" activeStyle={{ color: "#20991d" }} > درباره ما </NavLink>
                                        <NavLink to="/Contact-us" activeStyle={{ color: "#20991d" }} > تماس با ما </NavLink>
                                        <span style={{ color: "#fff", fontSize: "1.7rem", marginRight: "20px", cursor: "pointer" }}> <i class="fa-regular fa-magnifying-glass"></i></span>
                                        {/* <div><button className="btn btn-success" onClick={result}>Result</button> </div> */}
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-xs-12">
                                <div className="clientarea">

                                    {userData && userLogin == true ?
                                        <div className="loggein ">
                                            <i className="zmdi zmdi-account"></i><Link style={{ fontSize: "1.7rem" }} to="/account/dashboard"> {userData.fullName} </Link>
                                        </div> :
                                        <div className="signin" style={{ fontSize: "1.6rem" }}>
                                            <i className="far fa-user" style={{ fontSize: "1.7rem" }}></i>
                                            <Link to="/logIn"> ورود </Link> /
                                            <Link to="/signUp"> عضویت </Link>
                                        </div>
                                    }

                                </div>
                            </div>
                        </div>
                    </nav>
                    {location == "/" ? <HomeHeader /> : null}
                </div >
            </div>
        </div >
    );
}

export default TopNavbar;