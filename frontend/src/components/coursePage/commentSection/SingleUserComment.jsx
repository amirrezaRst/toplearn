import React, { Fragment, useEffect, useState } from 'react';
import moment from 'moment';

import config from "../../../services/config.json";
import Reply from './Reply';


const SingleUserComment = ({ course, setCourse, user, id, name, date, text, setComment, reply }) => {

    const [time, setTime] = useState();

    useEffect(() => {
        var newTime = date.split("T")[0].split("-");
        // newTime = `${newTime[0]}/${newTime[1]}/${newTime[2]}`;
        newTime = moment(newTime, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD');
        setTime(newTime);
    }, [])

    const handleReply = () => {
        setComment(id);
    }

    return (
        <Fragment>
            <div class="comment-row">
                <img src={`${config.domain}/${user ? user.profile : null}`} />
                <div class="left-col">
                    <div style={{ display: "flex" }}>
                        <h3 style={{ fontSize: "16px", borderLeft: "2px solid #ebebeb", paddingLeft: '4px' }}> {name} </h3>
                        <span style={{ padding: "0 4px", fontSize: "14px", color: "#7f7f87" }}>ارسال شده در {time}</span>
                        <span className="comment-badge badge-success" onClick={handleReply}>ثبت پاسخ</span>
                        {
                            course && user && course.teacher._id === user._id ?
                                <span className="comment-badge badge-danger">حذف</span>
                                : null
                        }
                    </div>
                    <p style={{ fontSize: '14px' }}>{text}</p>
                </div>
            </div>
            {reply && reply.length > 0 ?
                reply.map(item =>
                    <Reply course={course} user={user} handleReply={handleReply} name={item.fullName} text={item.text} date={item.time} />) :
                null
            }

        </Fragment>
    );
}

export default SingleUserComment;