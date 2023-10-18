const EditPassword = () => {
    return (
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
                            <div class="col-md-12 col-sm-12 col-xs-12" style={{ margin: "0 auto" }}>

                                <div className="edit-profile-form">
                                    <label htmlFor="current-password"><i class="fa-solid fa-lock-keyhole"></i> رمز عبور فعلی </label>
                                    <input type="password" id="current-password" />
                                </div>

                            </div>
                            <div class="col-md-6 col-sm-12 col-xs-12" style={{ margin: "0 auto" }}>

                                <div className="edit-profile-form">
                                    <label htmlFor="new-password"><i class="fa-solid fa-lock-keyhole"></i> رمز عبور جدید </label>
                                    <input type="password" id="new-password" />
                                </div>

                            </div>
                            <div class="col-md-6 col-sm-12 col-xs-12" style={{ margin: "0 auto" }}>

                                <div className="edit-profile-form">
                                    <label htmlFor="confirm-password"><i class="fa-solid fa-lock-keyhole"></i> تکرار رمز عبور جدید </label>
                                    <input type="password" id="confirm-password" />
                                </div>

                            </div>
                 

                        </div>
                        <button className="btn btn-success" style={{ marginTop: "30px" }}>ثبت رمز عبور جدید</button>

                    </form>

                </div>

            </section>
        </div>
    );
}

export default EditPassword;