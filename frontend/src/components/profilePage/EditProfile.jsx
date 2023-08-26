import React from 'react';


const EditProfile = () => {
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
                                            <img src="images/pic/avatar.jpg" />
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
                                    <header><h1> ویرایش حساب کاربری </h1></header>
                                    <div class="inner form-layer">
                                        <form action="" method="">

                                            <div class="row">
                                                <div class="col-md-7 col-sm-8 col-xs-12">
                                                    <div class="input-group">
                                                        <span class="input-group-addon" id="username"><i class="zmdi zmdi-account"></i></span>
                                                        <input type="text" class="form-control" placeholder="نام و نام خانوادگی" aria-describedby="username" />
                                                    </div>
                                                </div>
                                                <div class="col-md-7 col-sm-8 col-xs-12">
                                                    <div class="input-group">
                                                        <span class="input-group-addon" id="email-address"><i class="zmdi zmdi-email"></i></span>
                                                        <input type="text" class="form-control" placeholder="ایمیل" aria-describedby="email-address" />
                                                    </div>
                                                </div>
                                                <div class="col-md-7 col-sm-8 col-xs-12">
                                                    <div class="input-group">
                                                        <span class="input-group-addon" id="password"><i class="zmdi zmdi-lock"></i></span>
                                                        <input type="text" class="form-control" placeholder="رمز عبور " aria-describedby="password" />
                                                    </div>
                                                </div>
                                                <div class="col-md-7 col-sm-8 col-xs-12">
                                                    <div class="input-group">
                                                        <span class="input-group-addon" id="username"><i class="zmdi zmdi-account"></i></span>
                                                        <input type="text" class="form-control" placeholder="نام و نام خانوادگی" aria-describedby="username" />
                                                    </div>
                                                </div>
                                                <div class="col-md-7 col-sm-8 col-xs-12">
                                                    <div class="input-group">
                                                        <span class="input-group-addon" id="email-address"><i class="zmdi zmdi-email"></i></span>
                                                        <input type="text" class="form-control" placeholder="ایمیل" aria-describedby="email-address" />
                                                    </div>
                                                </div>
                                                <div class="col-md-7 col-sm-8 col-xs-12">
                                                    <div class="input-group">
                                                        <span class="input-group-addon" id="password"><i class="zmdi zmdi-lock"></i></span>
                                                        <input type="text" class="form-control" placeholder="رمز عبور " aria-describedby="password" />
                                                    </div>
                                                </div>
                                                <div class="col-md-7 col-sm-8 col-xs-12">
                                                    <div class="checkbox-layer">
                                                        <label><input type="checkbox" name="" />  گزینه ی چک باکس </label>
                                                    </div>
                                                </div>
                                                <div class="col-md-7 col-sm-8 col-xs-12">
                                                    <div class="radio-layer">
                                                        <label><input type="radio" name="" />  گزینه ی رادیوباتن </label>
                                                        <label><input type="radio" name="" />  گزینه ی رادیوباتن </label>
                                                    </div>
                                                </div>
                                                <div class="col-md-7 col-sm-8 col-xs-12">
                                                    <div class="link">
                                                        <a href=""> <i class="zmdi zmdi-lock"></i> رمز عبور خود را فراموش کرده ام !</a>
                                                        <a href=""> <i class="zmdi zmdi-account"></i> عضویت در سایت </a>
                                                    </div>
                                                </div>
                                                <div class="col-md-7 col-sm-8 col-xs-12">
                                                    <button class="btn btn-success"> ویرایش اطلاعات </button>
                                                </div>
                                            </div>

                                        </form>
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

export default EditProfile;