import React, { useEffect } from 'react';
import { Redirect } from 'react-router';



const LogIn = () => {

    return (
        <React.Fragment>

            <div class="container">
                <nav aria-label="breadcrumb">
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">تاپ لرن</a></li>
                        <li class="breadcrumb-item active" aria-current="page">ورود به سایت</li>
                    </ul>
                </nav>
            </div>

            <main class="client-page">
                <div class="container-content">

                    <header><h2> ورود به سایت </h2></header>

                    <div class="form-layer">

                        <form action="" method="">

                            <div class="input-group">
                                <span class="input-group-addon" id="email-address"><i class="zmdi zmdi-email"></i></span>
                                <input type="text" class="form-control" placeholder="ایمیل" aria-describedby="email-address" />
                            </div>

                            <div class="input-group">
                                <span class="input-group-addon" id="password"><i class="zmdi zmdi-lock"></i></span>
                                <input type="text" class="form-control" placeholder="رمز عبور " aria-describedby="password" />
                            </div>

                            <div class="remember-me">
                                <label><input type="checkbox" name="" />  مرا بخاطر بسپار </label>
                            </div>

                            <div class="link">
                                <a href=""> <i class="zmdi zmdi-lock"></i> رمز عبور خود را فراموش کرده ام !</a>
                                <a href=""> <i class="zmdi zmdi-account"></i> عضویت در سایت </a>
                            </div>

                            <button class="btn btn-success"> ورود به سایت </button>

                        </form>
                    </div>

                </div>
            </main>

        </React.Fragment>
    );
}

export default LogIn;