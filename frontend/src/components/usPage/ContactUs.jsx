const ContactUs = () => {
    return (
        <main className="contactus-page">
            <div className="pattern">
                <div className="container">
                    <section class="row">

                        <article class="col-md-7" style={{ padding: "0 50px" }}>
                            <h1 className="">تماس با ما</h1>

                            {/* <div className="contact-card">
                                <p style={{ display: 'flex', alignItems: "center" }}> <i className="fas fa-phone"></i> <span>راه های ارتباطی</span> </p>
                                <p> تلفن : 02188454816 - 02191303737 </p>
                                <p> ایمیل : info@TopLearn.com </p>
                                <p> آدرس : تهران،خیابان شریعتی ،خیابان ملک ، بن بست ایرانیاد ،پ ۱' </p>
                            </div>
                            <div className="contact-card">
                                <p style={{ display: 'flex', alignItems: "center" }}> <i className="fas fa-user"></i> <span>مدیر موسسه</span> </p>
                                <p> نام و نام خانوادگی : امیررضا رستمی </p>
                                <p> تلفن : 09903738378 </p>
                                <p> ایمیل : amirreza.rostami.0073@gmail.com </p>
                            </div> */}

                            <form action="">
                                {/* <h2>فرم تماس با ما</h2> */}

                                {/* <div className="input-box"> */}
                                <label htmlFor="fullName"> <i className="fa fa-user"></i> نام و نام خانوادگی </label>
                                <input type="text" id="fullName" className="form-control" />
                                {/* </div> */}

                                <label htmlFor="phone"> <i className="far fa-mobile-notch"></i> شماره تماس </label>
                                <input type="text" id="phone" className="form-control" />

                                <label htmlFor="email"> <i className="fa fa-envelope"></i> ایمیل </label>
                                <input type="text" id="email" className="form-control" />

                                <label htmlFor="title"> <i className="fa fa-audio-description"></i> عنوان </label>
                                <input type="text" id="title" className="form-control" />

                                <label htmlFor="description"> <i className="fa fa-file-lines"></i> توضیحات </label>
                                <input type="text" id="description" className="form-control" />

                                <button className="btn btn-success" style={{ marginTop: '20px', width: "30%" }} >ارسال پیام</button>

                                <h3>راه های ارتباطی</h3>
                                <p>تلفن : 02188454816 - 02191303737</p>
                                <p>ایمیل : info@TopLearn.com</p>
                                <p>آدرس : تهران،خیابان شریعتی ،خیابان ملک ، بن بست ایرانیاد ،پ ۱</p>

                                <h4>مدیر موسسه</h4>
                                <p>نام و نام خانوادگی : امیررضا رستمی</p>
                                <p>تلفن : 09903738378</p>
                                <p>ایمیل : amirreza.rostami.0073@gmail.com</p>

                            </form>



                        </article>
                        <article class="col-md-5 d-flex align-items-center">
                            <img src="/images/contact-us.png" className="img-fluid" alt="toplearn" />
                        </article>

                    </section>
                </div>
            </div>
        </main>
    );
}

export default ContactUs;