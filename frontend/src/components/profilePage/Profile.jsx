import React from 'react';


const Profile = () => {
    return (
        <React.Fragment>

            <div class="container">
                <nav aria-label="breadcrumb">
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">تاپ لرن</a></li>
                        <li class="breadcrumb-item active" aria-current="page"> پنل کاربری </li>
                    </ul>
                </nav>
            </div>

            <main>
                <div class="container">
                    <div class="user-account">
                        <div class="row">
                            <div class="col-md-3 col-sm-4 col-xs-12">
                                <aside>

                                    <div class="avatar-layer">
                                        <div class="img-layer">
                                            <a href="" class="change-image"><i class="zmdi zmdi-edit"></i></a>
                                            <img src="images/pic/avatar.jpg"/>
                                        </div>
                                        <div class="detail">
                                            <span> ایمان مدائنی </span>
                                            <span> عضویت : 01/01/1395 </span>
                                        </div>
                                    </div>

                                    <section>
                                        <header><h3> میز کار </h3></header>
                                        <div class="inner">
                                            <ul>
                                                <li><a href=""> مشاهده حساب کابری </a></li>
                                                <li><a href=""> ویرایش حساب کابری </a></li>
                                                <li><a href=""> تغییر رمز عبور </a></li>
                                                <li><a href=""> تنظیمات حساب کاربری </a></li>
                                                <li><a href=""> خروج از حساب کاربری </a></li>
                                            </ul>
                                        </div>
                                    </section>
                                </aside>
                            </div>
                            <div class="col-md-9 col-sm-8 col-xs-12">
                                <section class="user-account-content">
                                    <header><h1> داشبورد </h1></header>
                                    <div class="inner">
                                        <div class="account-information">
                                            <h3> اطلاعات کاربری </h3>
                                            <ul>
                                                <li> <i class="zmdi zmdi-account"></i> نام و نام خانوادگی : ایمان مدائنی </li>
                                                <li> <i class="zmdi zmdi-assignment-account"></i> نام کاربری :  imadmadaeni </li>
                                                <li> <i class="zmdi zmdi-email"></i> ایمیل : imadmadaeni@gmail.com </li>
                                                <li> <i class="zmdi zmdi-calendar-check"></i> تاریخ عضویت : 01/01/1395 </li>
                                                <li> <i class="zmdi zmdi-smartphone-android"></i> شماره تماس : 0912000000 </li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </React.Fragment>
    );
}

export default Profile;