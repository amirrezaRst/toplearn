import React, { useContext, useEffect, useState, useRef } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import ContextApi from '../../services/ContextApi';
import config from "../../services/config.json";
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';


const LogIn = () => {

    const navigation = useNavigate();
    const params = useLocation();
    const context = useContext(ContextApi);

    //! Data States
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [validation, setValidation] = useState();

    //! Data Ref
    const emailRef = useRef();
    const passwordRef = useRef();

    //! Validation Status
    const [emailStatus, setEmailStatus] = useState(true);
    const [passwordStatus, setPasswordStatus] = useState(true);

    useEffect(() => {
        if (params.state != null) {
            setEmail(params.state.email);
            setPassword(params.state.password);
        }
    }, []);


    const loginApi = async () => {
        if (email == undefined || email == "") {
            setValidation("لطفا ایمیل خود را وارد کنید.");
            setEmailStatus(false);
            return emailRef.current.focus();
        }
        if (password == undefined || password == "") {
            setEmailStatus(true);
            setValidation("لطفا رمز عبور خود را وارد کنید.");
            setPasswordStatus(false);
            return passwordRef.current.focus();
        }
        else {
            setPasswordStatus(true);
        }

        const body = {
            email,
            password
        }

        await axios.post(`${config.domain}/api/user/login`, body).then(res => {
            console.log(res);

            localStorage.setItem("token", res.headers["x-auth-token"])
            localStorage.setItem("userId", res.data.user._id)
            context.setUserLogin(true);
            context.setUserData(res.data.user)

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
            Swal.fire({
                icon: 'success',
                html: '<span style="font-size:2rem">شما با موفقیت وارد شدید.</span>',
                confirmButtonColor: "#59AB6E",
                confirmButtonText: "Ok"
            })
            navigation("/");
        }).catch(err => {
            if (err.response.data.status == 422) {
                setValidation("ایمیل یا رمز عبور اشباه می باشد.")
                setEmailStatus(false);
                setPasswordStatus(false);
                return passwordRef.current.focus();
            }
            toast.error(`اشکالی در ثبت نام پیش امده ، لطفا بعدا دوباره امتحان کنید`, {
                position: "bottom-right",
                theme: "light",
                closeOnClick: true,
                rtl: true
            })
            console.log(err);
        })
    }

    const result = () => {
        Swal.fire({
            icon: 'success',
            html: '<span style="font-size:2rem">شما با موفقیت وارد شدید.</span>',
            confirmButtonColor: "#59AB6E",
            confirmButtonText: "Ok"
        })
    }

    return (
        <React.Fragment>

            <main class="client-page">
                <div class="container-content">

                    <header style={{ textAlign: "center", marginTop: "10px" }}>
                        <Link to="/"><img src="/images/logo3.png" className='register-logo' alt="" /></Link>
                        <h2 style={{ fontSize: "1.9rem" }} onClick={result}> ورود به سایت </h2>
                    </header>

                    <div class="form-layer">

                        <form action="" method="" onSubmit={e => e.preventDefault()}>

                            <div class="input-group">
                                <span class="input-group-addon" id="email-address" style={emailStatus == false ? { borderColor: "red" } : null}><i class="zmdi zmdi-email"></i></span>
                                <input type="text" ref={emailRef} class="form-control" placeholder="ایمیل" aria-describedby="email-address"
                                    style={emailStatus == false ? { borderColor: "red", fontFamily: "sans-serif" } : { fontFamily: "sans-serif" }} value={email} onChange={e => setEmail(e.target.value)} />
                            </div>
                            <span className='register-form-message' style={emailStatus == false ? { display: "block" } : { display: "none" }}>{validation}</span>

                            <div class="input-group">
                                <span class="input-group-addon" id="password" style={passwordStatus == false ? { borderColor: "red" } : null}><i class="zmdi zmdi-lock"></i></span>
                                <input type="password" ref={passwordRef} class="form-control" placeholder="رمز عبور " aria-describedby="password"
                                    style={passwordStatus == false ? { borderColor: "red" } : null} value={password} onChange={e => setPassword(e.target.value)} />
                            </div>
                            <span className='register-form-message' style={passwordStatus == false ? { display: "block" } : { display: "none" }}>{validation}</span>


                            <div class="link">
                                <Link href=""> <i class="zmdi zmdi-assignment"></i> قوانین و مقررات سایت !</Link>
                                <Link to="/signUp"> <i class="zmdi zmdi-account"></i> ثبت نام در سایت </Link>
                            </div>

                            <button class="btn btn-success btn-block" onClick={loginApi} style={{ fontSize: "1.65rem", margin: "15px 0", padding: "10px 0", background: "#00bffe" }}> ورود </button>

                        </form>
                    </div>

                </div>
            </main>

        </React.Fragment>
    );
}

export default LogIn;