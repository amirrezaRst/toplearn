import React from 'react';


const SingUp = () => {
    return (
        <React.Fragment>

            <div class="container">
                <nav aria-label="breadcrumb">
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">تاپ لرن</a></li>
                        <li class="breadcrumb-item active" aria-current="page">عضویت در سایت</li>
                    </ul>
                </nav>
            </div>

            <main class="client-page">
                <div class="container-content">

                    <header><h2> عضویت در سایت </h2></header>

                    <div class="form-layer">

                        <form action="" method="">

                            <div class="input-group">
                                <span class="input-group-addon" id="username"><i class="zmdi zmdi-account"></i></span>
                                <input type="text" class="form-control" placeholder="نام و نام خانوادگی" aria-describedby="username" />
                            </div>

                            <div class="input-group">
                                <span class="input-group-addon" id="email-address"><i class="zmdi zmdi-email"></i></span>
                                <input type="text" class="form-control" placeholder="ایمیل" aria-describedby="email-address" />
                            </div>

                            <div class="input-group">
                                <span class="input-group-addon" id="password"><i class="zmdi zmdi-lock"></i></span>
                                <input type="text" class="form-control" placeholder="رمز عبور " aria-describedby="password" />
                            </div>

                            <div class="accept-rules">
                                <label><input type="checkbox" name="" />  قوانین و مقررات سایت را میپذیرم </label>
                            </div>

                            <div class="link">
                                <a href=""> <i class="zmdi zmdi-assignment"></i> قوانین و مقررات سایت !</a>
                                <a href=""> <i class="zmdi zmdi-account"></i> ورود به سایت </a>
                            </div>

                            <button class="btn btn-success"> عضویت در سایت </button>

                        </form>
                    </div>

                </div>
            </main>

        </React.Fragment>
    );
}

export default SingUp;