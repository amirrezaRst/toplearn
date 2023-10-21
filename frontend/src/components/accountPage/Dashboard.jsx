import React, { Fragment, useEffect, useState } from 'react';
import Breadcrumb from '../common/Breadcrumb';
import ProfileSidebar from './AccountSidebar';
import { Route, Routes } from 'react-router';
import Loading from '../Loading';


const Dashboard = ({ user }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user == null || user == undefined) return setLoading(true);
        setLoading(false);
    }, [user])

    if (loading) return (
        <Loading />
    )

    return (

        <Fragment>
            <div class="col-md-9 col-sm-8 col-xs-12">
                <section class="user-account-content">
                    <header><h1> اکانت اعضای ویژه </h1></header>
                    <div class="inner">
                        {!user.specialUser ?
                            <div class="account-information">

                                <div className="alert-yellow">
                                    <h3>
                                        درحال حاضر شما عضو ویژه سایت نمی باشید ! درصورت تمایل برای استفاده از امکانات اعضای ویژه باید اشتراک خریداری نمایید
                                    </h3>
                                </div>

                                <button className="btn btn-success">همین الان عضو ویژه شو</button>

                            </div>
                            : null
                        }
                    </div >
                </section >
            </div >

            <div class="col-md-9 col-sm-8 col-xs-12">
                <section class="user-account-content">
                    <header><h1> اطلاعات حساب کاربری </h1></header>
                    <div class="inner">
                        <div class="account-information">
                            <ul>
                                <li> <i class="zmdi zmdi-account"></i> نام و نام خانوادگی :  <span style={{ fontFamily: "sans-serif", textTransform: "capitalize", fontWeight: "600" }}> {user.fullName}</span> </li>
                                <li> <i class="zmdi zmdi-email"></i> ایمیل : <span style={{ fontFamily: "sans-serif" }}> {user.email}</span> </li>
                                <li> <i class="zmdi zmdi-smartphone-android"></i> شماره تماس : {user.phone} </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </Fragment>

    );
}

export default Dashboard;






