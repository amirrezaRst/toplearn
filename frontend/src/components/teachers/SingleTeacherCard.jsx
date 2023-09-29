import React from 'react';
import { Link } from "react-router-dom";


const SingleTeacherCard = () => {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <Link className="card">
                <img src="/images/teacher.jpg" className='img-fluid' alt="" />
                <div className="card-body">
                    <i className="fa fa-user"></i> <span>ایمان مدائنی</span>
                </div>
            </Link>
        </div>
    );
}

export default SingleTeacherCard;