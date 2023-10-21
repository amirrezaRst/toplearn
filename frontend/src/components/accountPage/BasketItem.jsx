import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import config from "../../services/config.json";
import Swal from "sweetalert2";


const BasketItem = ({ id, title, price, discount, teacher, user, setUser }) => {

    const percentage = () => {
        const num = price - ((price / 100) * discount)
        return num
    }


    const handleDelete = async () => {
        await Swal.fire({
            icon: 'warning',
            title: 'آیا مطمئنی میخوای از سبد خرید حذف کنی؟!',
            showCancelButton: true,
            confirmButtonColor: '#636C74',
            cancelButtonColor: '#d33',
            confirmButtonText: 'حذف',
            cancelButtonText: "انصراف"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.delete(`${config.domain}/api/user/removeFromCart/${user._id}/${id}`, { headers: { "x-auth-token": localStorage.getItem("token") } }).then(async ({ data }) => {
                    Swal.fire({
                        icon: "success",
                        title: 'از سبد خرید حذف شد',
                        confirmButtonColor: "#6fc341"
                    })
                    setUser(data.user);
                }).catch(err => {
                    toast.error(`مشکلی پیش امده لطفا دوباره امتحان کنید`, {
                        position: "bottom-right",
                        theme: "light",
                        closeOnClick: true,
                        rtl: true
                    });
                    console.log(err);
                })
            }
        })
    }


    return (
        <div className="course-item">
            <div className="course-info" style={{ flexGrow: "1" }}>
                <Link to={`/course/${id}`}> <h2 className="course-title" style={{ fontSize: "1.15em" }}>{title}</h2></Link>
                <h2 style={{ color: "#686e71" }}>مدرس : {teacher}</h2>
            </div>
            <div className="course-info">
                <div className="course-item-discount">
                    {discount != 0 ?
                        <div>
                            <h2 style={{ color: "#f66565", fontSize: "0.95em" }}> <del>{price} تومان</del> </h2>
                            <h2 style={{ color: "#9a9da9", fontSize: "0.95em" }}>{discount}% تخفیف</h2>
                        </div>
                        : null
                    }

                    <h2 style={{ color: "#6fc341" }}>{percentage()} تومان</h2>
                </div>
                <div className="xmark-icon" onClick={handleDelete}><i className="fa fa-xmark"></i></div>
            </div>
        </div>
    );
}

export default BasketItem;