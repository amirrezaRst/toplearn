import React from 'react';
import { Link } from 'react-router-dom';


const Breadcrumb = (props) => {

    return (
        <div class="container">
            <nav aria-label="breadcrumb">
                <ul class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/"> تاپ لرن </Link></li>
                    {
                        props.location ? props.location.map((item, index) =>
                            <li class="breadcrumb-item" aria-current="page">
                                <Link to={props.location.length - 1 == index ? null : item} style={props.location.length - 1 == index ? { cursor: "default", color: "#777" } : null}>{item == "/courses" ? "دوره ها" : item}  </Link>
                            </li>
                        ) : null
                    }
                </ul>
            </nav>
        </div>
    );
}

export default Breadcrumb;