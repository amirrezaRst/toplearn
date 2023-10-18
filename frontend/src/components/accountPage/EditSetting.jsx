import { useState } from 'react';
import ReactSwitch from 'react-switch';
import Loading from '../Loading';

const EditSetting = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = val => {
        setChecked(val)
    }

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
                                checked={checked}
                                onChange={handleChange}
                                onColor="#7EC857"
                                offColor='#728DAE'
                                height={32}
                                width={65}
                                checkedIcon={<h3 style={{ height: "100%", display: 'flex', alignItems: "center", justifyContent: "center", color: "#fff" }}>بله</h3>}
                                uncheckedIcon={<h3 style={{ height: "100%", display: 'flex', alignItems: "center", justifyContent: "center", color: "#fff" }}>خیر</h3>}
                            />
                        </div>
                        <div className="col-md-6 col-sm-12 col-xs-12 edit-setting-item">
                            <span>دریافت خبرنامه از طریق ایمیل</span>
                            <ReactSwitch
                                checked={checked}
                                onChange={handleChange}
                                onColor="#7EC857"
                                offColor='#728DAE'
                                // width={65}
                                checkedIcon={<h3 style={{ height: "100%", display: 'flex', alignItems: "center", justifyContent: "center", color: "#fff" }}>بله</h3>}
                                uncheckedIcon={<h3 style={{ height: "100%", display: 'flex', alignItems: "center", justifyContent: "center", color: "#fff" }}>خیر</h3>}
                            />
                        </div>

                    </div>
                    <button className="btn btn-success" style={{marginTop:"30px"}}>ویرایش تنظیمات حساب</button>

                </div>

            </section >
        </div >
    );
}

export default EditSetting;