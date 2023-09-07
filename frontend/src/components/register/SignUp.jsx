import axios from 'axios';
import React, { useState, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import Swal from "sweetalert2";

import config from "../../services/config.json";


const SingUp = () => {

    const navigation = useNavigate()

    const [fullName, setFullName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [rules, setRules] = useState(false);

    const [nameStatus, setNameStatus] = useState(true);
    const [phoneStatus, setPhoneStatus] = useState(true);
    const [emailStatus, setEmailStatus] = useState(true);
    const [passwordStatus, setPasswordStatus] = useState(true);
    const [rulesStatus, setRulesStatus] = useState(true);
    const [validation, setValidation] = useState();

    //! Field Ref
    const fullNameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();


    const changeRules = () => {
        if (rules == false) return setRules(true);
        setRules(false);
    }

    const register = async (req, res) => {
        if (fullName == undefined || fullName == "") {
            setValidation("لطفا نام کاربری خود را وارد کنید.");
            setNameStatus(false);
            return fullNameRef.current.focus();
        }
        else if (phone == undefined || phone == "") {
            setNameStatus(true);
            setValidation("لطفا شماره همراه خود را وارد کنید.");
            setPhoneStatus(false);
            return phoneRef.current.focus();
        }
        else if (email == undefined || email == "") {
            setPhoneStatus(true);
            setValidation("لطفا ایمیل خود را وارد کنید.");
            setEmailStatus(false);
            return emailRef.current.focus();
        }
        else if (password == undefined || password == "") {
            setEmailStatus(true);
            setValidation("لطفا رمز عبور خود را وارد کنید.");
            setPasswordStatus(false);
            return passwordRef.current.focus();
        }
        else if (rules == false) {
            setPasswordStatus(true);
            setValidation("تیک پذیرش قوانین الزامیست.");
            return setRulesStatus(false);
        }
        else {
            setRulesStatus(true);
        };

        if (fullName.length > 100 || fullName.length < 3) {
            fullNameRef.current.focus();
            setValidation("نام کاربری باید بین 3 تا 100 کلمه باشد.");
            return setNameStatus(false);
        };
        if (phone.length > 11 || phone.length < 11) {
            setValidation("تعداد ارقام شماره باید 11 رقم باشد.");
            setEmailStatus(false);
            return phoneRef.current.focus();
        };

        const body = {
            fullName,
            phone,
            email,
            password
        }

        await axios.post(`${config.domain}/api/user/register`, body).then(res => {
            toast.success(`عضویت با موفقیت انجام شد`, {
                position: "bottom-right",
                theme: "light",
                closeOnClick: true
            })
            navigation("/logIn", {
                state: {
                    email,
                    password
                }
            })
        }).catch(err => {
            if (err.response.data.status && err.response.data.text == "Registered email") {
                setValidation("قبلا این ایمیل ثبت شده است.");
                setEmailStatus(false);
                return emailRef.current.focus();
            }
            toast.error(`اشکالی در ثبت نام پیش امده ، لطفا بعدا دوباره امتحان کنید`, {
                position: "bottom-right",
                theme: "light",
                closeOnClick: true
            })
            console.log(err);
        })
    };

    const result = () => {

        // Swal.fire({
        //     icon: 'success',
        //     html: '<p style="font-size:2.3rem">عضویت با موفقیت انجام شد.</p>',
        //     confirmButtonColor: "#59AB6E",
        //     confirmButtonText: "Ok"
        // });
    }

    return (
        <React.Fragment>

            <main class="client-page">
                <div class="container-content">

                    <header style={{ textAlign: "center", marginTop: "10px" }}>
                        <Link to="/"><img src="/images/logo3.png" className='register-logo' alt="" /></Link>
                        <h2 style={{ fontSize: "1.9rem" }} onClick={result}> عضویت در سایت </h2>
                    </header>

                    <div class="form-layer">

                        <form onSubmit={e => e.preventDefault()}>

                            <div class="input-group">
                                <span class="input-group-addon" id="username" style={nameStatus == false ? { borderColor: "red" } : null} ><i class="zmdi zmdi-account"></i></span>
                                <input type="text" class="form-control signup-input" placeholder="نام کاربری" value={fullName} aria-describedby="username"
                                    onChange={e => setFullName(e.target.value)} ref={fullNameRef} style={nameStatus == false ? { borderColor: "red" } : null} />
                            </div>
                            <span className='register-form-message' style={nameStatus == false ? { display: "block" } : { display: "none" }}>{validation}</span>

                            <div class="input-group">
                                <span class="input-group-addon" id="email-address" style={phoneStatus == false ? { borderColor: "red" } : null}><i class="fas fa-phone"></i></span>
                                <input type="text" class="form-control" placeholder="شماره همراه" value={phone} aria-describedby="email-address"
                                    onChange={e => setPhone(e.target.value)} ref={phoneRef} style={phoneStatus == false ? { borderColor: "red" } : null} />
                            </div>
                            <span className='register-form-message' style={phoneStatus == false ? { display: "block" } : { display: "none" }}>{validation}</span>

                            <div class="input-group">
                                <span class="input-group-addon" id="email-address" style={emailStatus == false ? { borderColor: "red" } : null}><i class="fas fa-envelope"></i></span>
                                <input type="text" class="form-control" placeholder="ایمیل" value={email} aria-describedby="email-address"
                                    onChange={e => setEmail(e.target.value)} ref={emailRef} style={emailStatus == false ? { borderColor: "red", fontFamily: "sans-serif" } : { fontFamily: "sans-serif" }} />
                            </div>
                            <span className='register-form-message' style={emailStatus == false ? { display: "block" } : { display: "none" }}>{validation}</span>

                            <div class="input-group">
                                <span class="input-group-addon" id="password" style={passwordStatus == false ? { borderColor: "red" } : null}><i class="zmdi zmdi-lock"></i></span>
                                <input type="password" class="form-control" placeholder="رمز عبور" value={password} aria-describedby="password"
                                    onChange={e => setPassword(e.target.value)} ref={passwordRef} style={passwordStatus == false ? { borderColor: "red" } : null} />
                            </div>
                            <span className='register-form-message' style={passwordStatus == false ? { display: "block" } : { display: "none" }}>{validation}</span>

                            <div class="accept-rules"  >
                                <label><input type="checkbox" name="" onClick={changeRules} />  قوانین و مقررات سایت را میپذیرم </label>
                            </div>
                            <span className='register-form-message' style={rulesStatus == false ? { display: "block" } : { display: "none" }}>{validation}</span>

                            <div class="link">
                                <Link href=""> <i class="zmdi zmdi-assignment"></i> قوانین و مقررات سایت !</Link>
                                <Link to="/LogIn"> <i class="zmdi zmdi-account"></i> ورود به سایت </Link>
                            </div>

                            <button class="btn btn-success btn-block" onClick={register} style={{ fontSize: "1.65rem", margin: "15px 0", padding: "10px 0", background: "#00bffe" }}> عضویت در سایت </button>

                        </form>
                    </div>

                </div>
            </main >

        </React.Fragment >
    );
}

export default SingUp;