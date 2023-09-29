import React from 'react';
import { Link } from 'react-router-dom';


const Breadcrumb = (props) => {

    return (
        <div class="container">
            <nav aria-label="breadcrumb">
                <ul class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/"> تاپ لرن </Link></li>
                    {props.location.map((item, index) =>
                        <li class="breadcrumb-item" aria-current="page">
                            <Link to={props.location.length - 1 == index ? null : item} style={props.location.length - 1 == index ? { cursor: "default", color: "#777" } : null}>{item == "/courses" ? "تمام دوره" : item}  </Link>
                        </li>
                    )}
                    {/* <li class="breadcrumb-item active"><Link to="" style={{color:"#777"}}> دوره ها </Link></li>
                    <li class="breadcrumb-item active" aria-current="page"> دوره آموزشی ساخت ربات تلگرام </li> */}
                </ul>
            </nav>
        </div>
    );
}

export default Breadcrumb;