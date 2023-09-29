import React from 'react';
import { Link } from "react-router-dom";

import config from "../../services/config.json";


const SingleTeacherCard = ({ id, fullName, profile }) => {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <Link to={`/teachers/${id}`} className="card">
                <img src={`${config.domain}/${profile}`} className='img-fluid' alt={fullName} />
                <div className="card-body">
                    <i className="fa fa-user"></i> <span>{fullName}</span>
                </div>
            </Link>
        </div>
    );
}

export default SingleTeacherCard;