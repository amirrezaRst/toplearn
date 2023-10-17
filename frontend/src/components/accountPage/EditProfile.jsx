import React from 'react';


const EditProfile = () => {
    return (
        <React.Fragment>
            <div class="col-md-9 col-sm-8 col-xs-12">
                <section class="user-account-content">
                    <header><h1> ویرایش حساب کاربری </h1></header>
                    <div class="inner form-layer" style={{ padding: "30px" }}>
                        <form action="" method="">
                            {/* <div class="col-md-7 col-sm-8 col-xs-12">
                                <div class="input-group">
                                    <span class="input-group-addon" id="username"><i class="zmdi zmdi-account"></i></span>
                                    <input type="text" class="form-control" placeholder="نام و نام خانوادگی" aria-describedby="username" />
                                </div>
                            </div> */}

                            <div className="row">
                                <div class="col-md-6 col-sm-12 col-xs-12" style={{ margin: "0 auto" }}>

                                    <div className="edit-profile-form">
                                        <label htmlFor="fullName"><i className="fa fa-user"></i> نام و نام خانوادگی (به فارسی)</label>
                                        <input type="text" id="fullName" />
                                    </div>

                                </div>
                                <div class="col-md-6 col-sm-12 col-xs-12" style={{ margin: "0 auto" }}>

                                    <div className="edit-profile-form">
                                        <label htmlFor="userName"><i className="fa fa-user"></i> نام کاربری </label>
                                        <input type="text" id="userName" />
                                    </div>

                                </div>
                                <div class="col-md-6 col-sm-12 col-xs-12" style={{ margin: "0 auto" }}>

                                    <div className="edit-profile-form">
                                        <label htmlFor="email"><i className="fa fa-envelope"></i> ایمیل </label>
                                        <input type="email" id="email" />
                                    </div>

                                </div>
                                <div class="col-md-12 col-sm-12 col-xs-12 " style={{ margin: "0 auto" }}>

                                    <div className="edit-profile-form">
                                        <label htmlFor="email" style={{ width: '100%' }}><i className="fa fa-clipboard"></i> بیوگرافی </label>
                                        <textarea name="" id="" cols="30" rows="6"></textarea>
                                    </div>

                                </div>
                                <div class="col-md-12 col-sm-12 col-xs-12 " style={{ margin: "0 auto" }}>

                                    <label class="switch">
                                        <input type="checkbox" />
                                            <span class="slider round"></span>
                                    </label>


                                </div>

                            </div>
                            <button className="btn btn-success">ویرایش حساب کاربری</button>

                        </form>

                    </div>

                </section>
            </div>

        </React.Fragment>
    );
}

export default EditProfile;