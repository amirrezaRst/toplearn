import React, { useEffect, useState } from 'react';
import moment from 'moment';

import config from "../../../services/config.json";


const Reply = ({ course, user, name, text, date }) => {

    const [time, setTime] = useState();

    useEffect(() => {
        var newTime = date.split("T")[0].split("-");
        // newTime = `${newTime[0]}/${newTime[1]}/${newTime[2]}`;
        newTime = moment(newTime, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD');
        setTime(newTime);
    }, [])

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ color: "#e2e2e2", fontSize: '30px', position: "relative", top: "-10px", marginLeft: "10px" }}>
                <i className="fas fa-reply fa-flip-vertical"></i>
            </div>
            <div class="comment-row">
                <img src={`${config.domain}/${user ? user.profile : null}`} />
                <div class="left-col">
                    <div style={{ display: "flex" }}>
                        <h3 style={{ fontSize: "16px", borderLeft: "2px solid #ebebeb", paddingLeft: '4px' }}> {name} </h3>
                        <span style={{ padding: "0 4px", fontSize: "14px", color: "#7f7f87" }}>ارسال شده در {time}</span>
                        {
                            course && user && course.teacher._id === user._id ?
                                <span className="comment-badge badge-danger">حذف</span>
                                : null
                        }
                    </div>
                    <p style={{ fontSize: '14px' }}>{text}</p>
                </div>
            </div>

        </div>
    );
}

export default Reply;