import React, { useRef, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import ReCAPTCHA from "react-google-recaptcha";

import config from "../../../services/config.json";


const CommentForm = ({ user, courseId, setCourse }) => {

    const [text, setText] = useState();
    const [validation, setValidation] = useState();
    const [captcha, setCaptcha] = useState();

    const textRef = useRef();
    const recaptchaRef = useRef(null)

    const newComment = async (e) => {
        e.preventDefault();
        if (text == undefined || text == "") {
            setValidation("متن نظر خود را وارد کنید.")
            return textRef.current.focus();
        }
        setValidation()
        const body = {
            fullName: user.fullName,
            text,
            token: recaptchaRef.current.getValue()
        };

        await axios.post(`${config.domain}/api/comment/addComment/${courseId}`, body, { headers: { "x-auth-token": localStorage.getItem("token") } }).then(res => {
            console.log(res);
        }).catch(err => {
            if (err.response.data.text == "google recaptcha has not been validated") {
                return setCaptcha("اعتبار سنجی گوگل الزامی است")
            }
            else if (err.response.data.text == "You do not have permission to access the information") {
                return toast.error(`برای گذاشتن نظر باید وارد حساب کاربری خود شوید.`, {
                    position: "bottom-right",
                    theme: "light",
                    closeOnClick: true,
                    rtl: true
                });
            };
            console.log(err);
        })
    };

    const result = () => {
        console.log(recaptchaRef.current.getValue());
    }

    return (
        <form>
            <div class="row">
                <form class="col-md-12 col-sm-12 col-xs-12" style={{ marginTop: "15px" }} onSubmit={e => e.preventDefault()}>
                    <div class="form-group">
                        <textarea class="form-control" ref={textRef} id='comment-field' placeholder="متن نظر خود را وارد کنید..." value={text} onChange={e => setText(e.target.value)}></textarea>
                        <span style={{ color: "#ff4f4f" }}>{validation}</span>
                    </div>
                    <div className="form-group" >
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={"6Lc_FSEoAAAAAC3mioN9wpnZORqY_CK_4J8B3g2d"}
                            size="normal"
                        />
                        <span style={{ color: "#ff4f4f" }}>{captcha}</span>
                    </div>
                    <div class="col-xs-12">
                        <button type="button" onClick={newComment} class="btn btn-success"> ثبت دیدگاه </button>
                    </div>
                </form>
            </div>
        </form>
    );
}

export default CommentForm;