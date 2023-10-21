import { useEffect, useRef, useState } from "react";
import Breadcrumb from "../common/Breadcrumb";

import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import BasketItem from "./BasketItem";

const Basket = ({ user, setUser }) => {
    const [loading, setLoading] = useState(true);
    const recaptchaRef = useRef(null);

    useEffect(() => {
        if (user == null) return setLoading(true);
        setLoading(false);
    }, [user])

    if (loading) return (
        <Loading />
    )

    return (
        <main className="basket-container">
            <div className="container">

                <Breadcrumb location={["سبد خرید"]} />
                <div className="row">

                    <div className="col-lg-8 col-md-7 col-12" style={{ marginBottom: "40px" }}>

                        <div className="basket-course-content">

                            {user.cart.map(course =>
                                <BasketItem id={course._id} title={course.title} price={course.price} discount={course.discount} teacher={course.teacher.fullName} user={user} setUser={setUser} />
                            )}


                        </div>


                    </div>
                    <aside className="col-lg-4 col-md-5 col-12">

                        <div className="discount-card">
                            <div class="input-group">
                                <input id="email" type="email" class="form-control" name="email" placeholder="کد تخفیف" />
                                <span class="input-group-addon">اعمال کد</span>
                            </div>
                        </div>

                        <div className="payment-method-card">
                            <h2>انتخاب نحوه پرداخت</h2>
                            <div>
                                <div className="form" style={{ display: "flex", alignItems: "start" }}>
                                    <input type="radio" name="payment-method" id="" checked /> <label htmlFor="">درگاه پرداخت آنلاین</label>
                                </div>
                                <div className="form" style={{ display: "flex", alignItems: "start" }}>
                                    <input type="radio" name="payment-method" id="" /> <label htmlFor="">کیف پول (موجودی : 0 تومان)</label>
                                </div>
                            </div>
                        </div>

                        <div className="captcha-card">
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey={"6Lc_FSEoAAAAAC3mioN9wpnZORqY_CK_4J8B3g2d"}
                                size="normal"
                            />
                        </div>

                        <div className="payment-card">
                            <div className="price-items" style={{ color: "#686e71", fontSize: "18px" }}>
                                <h2>مبلغ کل : </h2>
                                <h2>420,000 تومان</h2>
                            </div>
                            <div className="price-items" style={{ color: "#01ace5", fontSize: "18px" }}>
                                <h2>تخفیف : </h2>
                                <h2>0 تومان</h2>
                            </div>
                            <div className="divider"></div>
                            <h2>مبلغ قابل پرداخت : 420,000 تومان</h2>

                            <button className="btn">ثبت و پرداخت نهایی</button>
                        </div>

                    </aside>

                </div>
            </div>
        </main>
    );
}

export default Basket;