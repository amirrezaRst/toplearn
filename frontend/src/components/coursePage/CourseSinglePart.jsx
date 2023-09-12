import React, { Fragment, useEffect, useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';

import config from "../../services/config.json";
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';


const CourseSinglePart = ({ title, description, free, second, url, license }) => {

    const [time, setTime] = useState();
    const [show, setShow] = useState(false);
    const navigation = useNavigate();

    useEffect(() => {
        var date = new Date(null);
        date.setSeconds(second);
        var time = date.toISOString().substr(11, 8);
        setTime(time)
    }, [])

    const showInfo = () => {
        if (show) {
            return setShow(false);
        }
        setShow(true);
    };

    return (
        <Fragment>
            <div className='episode-content'>

                <li className='single-episode' >

                    <h3 style={{ fontSize: "1.7rem" }}> {title} </h3>
                    {/* {!free ?
                        <i className='fa fa-lock-keyhole' style={{ borderRight: "2px solid #ebebeb", padding: "3px 8px 3px 0 ", marginRight: "7px" }}></i>
                        : null
                    } */}
                    {!license && !free ?
                        <i className='fa fa-lock-keyhole' style={{ borderRight: "2px solid #ebebeb", padding: "3px 8px 3px 0 ", marginRight: "7px" }}></i> :
                        null
                    }

                    <span className='episode-download-btn' onClick={showInfo}>
                        <span className="fa fa-arrow-down-to-line episode-icon" style={!license && !free ?
                            { color: "#778899", border: "1px solid #778899" } : { color: "#6fc341", border: "1px solid #6fc341" }
                        }></span>
                    </span>
                    <span>{time}</span>

                </li>

                <div className="episode-information" style={!show ? { display: "none" } : null}>

                    {!license && !free ?
                        <p id='video-alert' >
                            <i style={{ fontSize: "20px", marginLeft: "7px" }} className="far fa-circle-exclamation"></i>
                            برای دانلود و دیدن این بخش باید در دوره ثبت نام کنید.
                        </p> :
                        <div>
                            <video src={`${config.domain}/${url}`} className="episode-video" controls preload='metadata'></video>
                            <p>{description}</p>

                            <div style={{ display: "flex", justifyContent: "end" }}>
                                <Link to={`${config.domain}/api/course/download/${url}`} className="btn download-btn"> دانلود ویدیو این بخش </Link>
                            </div>
                        </div>
                    }
                </div>

            </div>
        </Fragment >
    );
}

export default CourseSinglePart;