import React, { Fragment } from 'react';
import Breadcrumb from '../common/Breadcrumb';
import ProfileSidebar from './AccountSidebar';
import { Route, Routes } from 'react-router';


const Dashboard = () => {
    return (

        <Fragment>
            <div class="col-md-9 col-sm-8 col-xs-12">
                <section class="user-account-content">
                    <header><h1> اکانت اعضای ویژه </h1></header>
                    <div class="inner">
                        <div class="account-information">

                            <div className="alert-yellow">
                                <h3>
                                    درحال حاضر شما عضو ویژه سایت نمی باشید ! درصورت تمایل برای استفاده از امکانات اعضای ویژه باید اشتراک خریداری نمایید
                                </h3>
                            </div>

                            <button className="btn btn-success">همین الان عضو ویژه شو</button>

                        </div >
                    </div >
                </section >
            </div >

            <div class="col-md-9 col-sm-8 col-xs-12">
                <section class="user-account-content">
                    <header><h1> اطلاعات حساب کاربری </h1></header>
                    <div class="inner">
                        <div class="account-information">
                            <ul>
                                <li> <i class="zmdi zmdi-account"></i> نام کاربری :  <span style={{ fontFamily: "sans-serif",textTransform:"capitalize" }}> iman madaeny</span> </li>
                                <li> <i class="zmdi zmdi-email"></i> ایمیل : <span style={{ fontFamily: "sans-serif" }}> imadmadaeni@gmail.com</span> </li>
                                <li> <i class="zmdi zmdi-smartphone-android"></i> شماره تماس : 0912000000 </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </Fragment>

    );
}

export default Dashboard;






