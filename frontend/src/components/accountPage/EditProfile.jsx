import React, { useEffect, useState } from 'react';
import ReactSwitch from 'react-switch';
import axios from 'axios';

import Loading from '../Loading';
import config from "../../services/config.json";
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';


const EditProfile = ({ user, setUser }) => {
    const [loading, setLoading] = useState(true);
    const [changed, setChanged] = useState(true);
    const [userData, setUserData] = useState({
        fullName: null,
        email: null,
        bio: null,
        gender: null,
        isVisible: null
    });

    useEffect(() => {
        if (user == null || user == undefined) return setLoading(true);
        if (changed) {
            const value = {
                fullName: user.fullName,
                email: user.email,
                bio: user.bio,
                gender: user.gender,
                isVisible: user.isVisible
            }
            setUserData(value);
            setChanged(false);
        }
        setLoading(false);
    }, [user])


    if (loading) return (
        <Loading />
    )

    const changeValues = (value, name) => {
        let updateValue = {};
        if (name == "fullName") {
            updateValue = {
                fullName: value
            }
        }
        else if (name == "email") {
            updateValue = {
                email: value
            }
        }
        else if (name == "bio") {
            updateValue = {
                bio: value
            }
        }
        // setUserData(userData => ({ ...userData, ...updateValue }))
        setUserData({ ...userData, ...updateValue })
    }

    const handleVisible = () => {
        console.log("object");
        const updateValue = {
            isVisible: !userData.isVisible
        }
        setUserData({ ...userData, ...updateValue });
    }

    const handleGender = (gender) => {
        const updateValue = { gender }
        console.log(updateValue);
        setUserData({ ...userData, ...updateValue });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.put(`${config.domain}/api/user/editInfo/${user._id}`, userData, { headers: { "x-auth-token": localStorage.getItem("token") } }).then(({ data }) => {
            console.log(data);
            setUser(data.user);
            Swal.fire({
                icon: "success",
                title: "اطلاعات شما با موفقیت تغیر و ثبت شد.",
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
        });
    }

    const result = () => {
        console.log(userData);
    }
    return (
        <React.Fragment>
            <div class="col-md-9 col-sm-8 col-xs-12">
                <section class="user-account-content">
                    <header onClick={result}><h1> ویرایش حساب کاربری </h1></header>
                    <div class="inner form-layer" style={{ padding: "30px" }}>
                        <form action="" method="" onSubmit={e => handleSubmit(e)}>

                            <div className="row">
                                <div class="col-md-6 col-sm-12 col-xs-12" style={{ margin: "0 auto" }}>
                                    <div className="edit-profile-form">
                                        <label htmlFor="fullName"><i className="fa fa-user"></i> نام نام خانوادگی </label>
                                        <input type="text" id="fullName" value={userData.fullName} onChange={e => changeValues(e.target.value, "fullName")} />
                                    </div>

                                </div>
                                <div class="col-md-6 col-sm-12 col-xs-12" style={{ margin: "0 auto" }}>

                                    <div className="edit-profile-form">
                                        <label htmlFor="email"><i className="fa fa-envelope"></i> ایمیل </label>
                                        <input type="email" id="email" value={userData.email} onChange={e => changeValues(e.target.value, "email")} />
                                    </div>

                                </div>
                                <div class="col-md-12 col-sm-12 col-xs-12 " style={{ margin: "0 auto" }}>

                                    <div className="edit-profile-form">
                                        <label htmlFor="email" style={{ width: '100%' }}><i className="fa fa-clipboard"></i> بیوگرافی </label>
                                        <textarea name="" id="" cols="30" rows="6" value={userData.bio} onChange={e => changeValues(e.target.value, "bio")}></textarea>
                                    </div>

                                </div>
                                <div class="col-md-12 col-sm-12 col-xs-12 " style={{ margin: "0 auto" }}>

                                    <div className="gender-radio">
                                        <span onClick={() => handleGender("unknow")}>
                                            جنسیت نامشخص <input type="radio" checked={userData.gender == "unknow" ? true : false} />
                                        </span>
                                        <span onClick={() => handleGender("male")}>
                                            آقا <input type="radio" checked={userData.gender == "male" ? true : false} />
                                        </span>
                                        <span onClick={() => handleGender("female")}>
                                            خانم <input type="radio" checked={userData.gender == "female" ? true : false} />
                                        </span>
                                    </div>

                                    <span style={{ marginLeft: "20px", }}>
                                        پروفایل قابل مشاهده برای دیگران باشد؟
                                    </span>
                                    <ReactSwitch
                                        onColor="#7EC857"
                                        offColor='#728DAE'
                                        // width={65}
                                        checked={userData.isVisible}
                                        onChange={handleVisible}
                                        checkedIcon={<h3 style={{ height: "100%", display: 'flex', alignItems: "center", justifyContent: "center", color: "#fff" }}>بله</h3>}
                                        uncheckedIcon={<h3 style={{ height: "100%", display: 'flex', alignItems: "center", justifyContent: "center", color: "#fff" }}>خیر</h3>}
                                    />
                                </div>

                            </div>
                            <button className="btn btn-success" style={{ marginTop: "30px" }}>ویرایش حساب کاربری</button>

                        </form>

                    </div>

                </section>
            </div>

        </React.Fragment>
    );
}

export default EditProfile;