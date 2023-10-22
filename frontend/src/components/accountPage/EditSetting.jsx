import { useEffect, useState } from 'react';
import ReactSwitch from 'react-switch';
import axios from 'axios';

import Loading from '../Loading';
import config from "../../services/config.json";
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';


const EditSetting = ({ user, setUser }) => {
    const [loading, setLoading] = useState(true);
    const [changed, setChanged] = useState(true)
    const [userData, setUserData] = useState({
        receiveEmail: null,
        receiveMessage: null,
    });

    useEffect(() => {
        if (user == null || user == undefined) return setLoading(true);
        if (changed) {
            const value = {
                receiveEmail: user.receiveEmail,
                receiveMessage: user.receiveMessage,
            }
            setUserData(value);
            setChanged(false);
        }
        setLoading(false);
    }, [user])

    const handleChange = val => {
        let update = {}
        if (val == "receiveEmail") {
            update = {
                receiveEmail: !userData.receiveEmail,
            }
        }
        else if (val == "receiveMessage") {
            update = {
                receiveMessage: !userData.receiveMessage
            }
        }
        setUserData({ ...userData, ...update })
    }


    const handleSubmit = async () => {
        await axios.put(`${config.domain}/api/user/editSetting/${user._id}`, userData, { headers: { "x-auth-token": localStorage.getItem("token") } }).then(({ data }) => {
            const update = { ...user, ...userData }
            setUser(update)
            Swal.fire({
                icon: "success",
                title: "اطلاعات شما با موفقیت تغییر و ثبت شد.",
                confirmButtonColor: "#7EC857"
            })
        }).catch(err => {
            toast.error(`مشکلی پیش آمده لطفا دوباره امتحان کنید`, {
                position: "bottom-right",
                theme: "light",
                closeOnClick: true,
                rtl: true
            });
            console.log(err);
        })
    }

    if (loading) return (
        <Loading />
    )

    return (
        <div class="col-md-9 col-sm-8 col-xs-12">
            <section class="user-account-content">
                <header><h1> ویرایش تنظیمات حساب کاربری </h1></header>
                <div class="inner form-layer" style={{ padding: "30px" }}>

                    {/* <div class=" " >

                        <label class="switch">
                            <input type="checkbox" />
                            <span class="slider round"></span>
                        </label>


                    </div> */}

                    <div className="row">

                        <div className="col-md-6 col-sm-12 col-xs-12 edit-setting-item">
                            <span>دریافت خبرنامه از طریق ایمیل</span>

                            <ReactSwitch
                                checked={userData.receiveEmail}
                                onChange={() => handleChange("receiveEmail")}
                                onColor="#7EC857"
                                offColor='#728DAE'
                                // width={65}
                                checkedIcon={<h3 style={{ height: "100%", display: 'flex', alignItems: "center", justifyContent: "center", color: "#fff" }}>بله</h3>}
                                uncheckedIcon={<h3 style={{ height: "100%", display: 'flex', alignItems: "center", justifyContent: "center", color: "#fff" }}>خیر</h3>}
                            />
                        </div>
                        <div className="col-md-6 col-sm-12 col-xs-12 edit-setting-item">
                            <span>دریافت اخبار و اطلاعیه های جشنواره ها بصورت پیامکی</span>
                            <ReactSwitch
                                checked={userData.receiveMessage}
                                onChange={() => handleChange("receiveMessage")}
                                onColor="#7EC857"
                                offColor='#728DAE'
                                // width={65}
                                checkedIcon={<h3 style={{ height: "100%", display: 'flex', alignItems: "center", justifyContent: "center", color: "#fff" }}>بله</h3>}
                                uncheckedIcon={<h3 style={{ height: "100%", display: 'flex', alignItems: "center", justifyContent: "center", color: "#fff" }}>خیر</h3>}
                            />
                        </div>

                    </div>
                    <button className="btn btn-success" style={{ marginTop: "30px" }} onClick={handleSubmit}>ویرایش تنظیمات حساب</button>

                </div>

            </section >
        </div >
    );
}

export default EditSetting;