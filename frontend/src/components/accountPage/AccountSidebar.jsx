import { Link } from "react-router-dom";

const AccountSidebar = () => {
    return (
        <div class="col-md-3 col-sm-4 col-xs-12" style={{ marginBottom: "20px" }}>
            <aside>

                <section>
                    <div class="avatar-layer">
                        <div className="logout-button" title="خروج از حساب کاربری">
                            <i className="far fa-power-off"></i>
                        </div>
                        <div class="img-layer">
                            <a href="" class="change-image"><i class="zmdi zmdi-edit"></i></a>
                            <img src="images/pic/avatar.jpg" />
                        </div>
                        <div class="detail">
                            <span style={{ textTransform: "capitalize" }}> amirreza rostami </span>
                        </div>

                    </div>
                    {/* <header><h3> میز کار </h3></header> */}
                    <div class="inner" style={{ background: "#fff", borderRadius: "0 0 6px 6px" }}>
                        <ul>
                            <li><Link className="account-nav" to="/account/dashboard">داشبورد</Link> </li>
                            <li><Link className="account-nav" to="/account/basket">سبد خرید</Link> </li>
                            <li><Link className="account-nav" to="/account/edit-profile">ویرایش حساب کابری</Link> </li>
                            <li><Link className="account-nav" to="/account/edit-setting">ویرایش تنظیمات حساب کابری</Link> </li>
                            <li><Link className="account-nav" to="/account/edit-phone">ویرایش شماره موبایل</Link> </li>
                            <li><Link className="account-nav" to="/account/edit-password">تغییر رمز عبور</Link> </li>
                            <li><Link className="account-nav" to="/account/order">فاکتور ها</Link> </li>
                            <li><Link className="account-nav" to="/account/favorite-course">دوره های مورد علاقه من</Link> </li>
                            <li><Link className="account-nav" to="/account/consult">درخواست های مشاوره</Link> </li>
                            <li><p className=""> <i className="far fa-trash-can"></i> خروج از حساب کاربری </p></li>
                        </ul>
                    </div>
                </section>

            </aside>
        </div>
    );
}

export default AccountSidebar;