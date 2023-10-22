import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from 'sweetalert2';

import Loading from "../Loading";
import config from "../../services/config.json";


const EditPassword = ({ user, setUser }) => {
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState({
        currentPassword: null,
        newPassword: null,
        repeatPassword: null
    });
    const [validate, setValidate] = useState()

    const currentRef = useRef();
    const newRef = useRef();
    const repeatRef = useRef();


    useEffect(() => {
        if (user == null || user == undefined) return setLoading(true);
        setLoading(false);
    }, [user])



    const changeValues = (val, name) => {
        let update = {};
        if (name == "current") {
            update = { currentPassword: val }
        }
        else if (name == "new") {
            update = { newPassword: val }
        }
        else if (name == "repeat") {
            update = { repeatPassword: val }
        }
        setUserData({ ...userData, ...update });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { currentPassword, newPassword, repeatPassword } = userData;

        if (currentPassword == null) {
            currentRef.current.focus();
            return setValidate({ ref: "current", text: "لطفا رمز عبور فعلی خود را وارد کنید." })
        }
        else if (newPassword == null) {
            newRef.current.focus();
            return setValidate({ ref: "new", text: "لطفا رمز عبور جدید خود را وارد کنید." });
        }
        else if (repeatPassword == null) {
            repeatRef.current.focus();
            return setValidate({ ref: "repeat", text: "لطفا رمز عبور جدید خود را وارد کنید." });
        }

        setValidate();

        await axios.put(`${config.domain}/api/user/editPassword/${user._id}`, userData, { headers: { "x-auth-token": localStorage.getItem("token") } }).then(({ data }) => {

            setUserData({
                ...userData,
                ...{
                    currentPassword: null,
                    newPassword: null,
                    repeatPassword: null
                }
            })
            Swal.fire({
                icon: "success",
                title: "رمز عبور شما با موفقیت تغییر و ثبت شد.",
                confirmButtonColor: "#7EC857"
            })
        }).catch(err => {
            const { status, message } = err.response.data;

            if (status == 422 && message == '"currentPassword" is not allowed to be empty') {
                setValidate({ ref: "current", text: "لطفا مقادیر درست وارد کنید" })
            }
            else if (status == 422 && message == '"newPassword" is not allowed to be empty') {
                setValidate({ ref: "new", text: "لطفا مقادیر درست وارد کنید" })
            }
            else if (status == 422 && message == '"repeatPassword" is not allowed to be empty') {
                setValidate({ ref: "repeat", text: "لطفا مقادیر درست وارد کنید" })
            }
            if (status == 433 && message == "password is not valid") {
                setValidate({ ref: "current", text: "رمز عبور معتبر نیست" })
            }
            if (status == 433 && message == "the password is not the same") {
                setValidate({ ref: "repeat", text: "رمز عبور جدید مشابه نیست" })

            }
            toast.error(`مشکلی پیش آمده لطفا دوباره امتحان کنید`, {
                position: "bottom-right",
                theme: "light",
                closeOnClick: true,
                rtl: true
            });
            console.log(status, message);
        })

    }


    if (loading) return (
        <Loading />
    )

    return (
        <div class="col-md-9 col-sm-8 col-xs-12">
            <section class="user-account-content">
                <header><h1> ویرایش حساب کاربری </h1></header>
                <div class="inner form-layer" style={{ padding: "30px" }}>
                    <form action="" method="" onSubmit={e => handleSubmit(e)}>
                        <div className="row">
                            <div class="col-md-12 col-sm-12 col-xs-12" style={{ margin: "0 auto" }}>

                                <div className="edit-profile-form">
                                    <label htmlFor="current-password"><i class="fa-solid fa-lock-keyhole"></i> رمز عبور فعلی </label>
                                    <input type="password" ref={currentRef} className={validate && validate.ref == "current" ? "not-valid" : null}
                                        id="current-password" value={userData.currentPassword} onChange={(e) => changeValues(e.target.value, "current")} />
                                    <span style={validate && validate.ref == "current" ? { display: "block" } : { display: "none" }}>
                                        {validate ? validate.text : null}
                                    </span>
                                </div>

                            </div>
                            <div class="col-md-6 col-sm-12 col-xs-12" style={{ margin: "0 auto" }}>

                                <div className="edit-profile-form">
                                    <label htmlFor="new-password"><i class="fa-solid fa-lock-keyhole"></i> رمز عبور جدید </label>
                                    <input type="password" ref={newRef} className={validate && validate.ref == "new" ? "not-valid" : null}
                                        id="new-password" value={userData.newPassword} onChange={(e) => changeValues(e.target.value, "new")} />
                                    <span style={validate && validate.ref == "new" ? { display: "block" } : { display: "none" }}>
                                        {validate ? validate.text : null}
                                    </span>
                                </div>

                            </div>
                            <div class="col-md-6 col-sm-12 col-xs-12" style={{ margin: "0 auto" }}>

                                <div className="edit-profile-form">
                                    <label htmlFor="confirm-password"><i class="fa-solid fa-lock-keyhole"></i> تکرار رمز عبور جدید </label>
                                    <input type="password" ref={repeatRef} className={validate && validate.ref == "repeat" ? "not-valid" : null}
                                        id="confirm-password" value={userData.repeatPassword} onChange={(e) => changeValues(e.target.value, "repeat")} />
                                    <span style={validate && validate.ref == "repeat" ? { display: "block" } : { display: "none" }}>
                                        {validate ? validate.text : null}
                                    </span>
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