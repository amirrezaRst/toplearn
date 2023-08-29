import React from 'react';


const CourseSinglePart = () => {
    return (
        <li className='single-episode' style={{ borderRadius: "5px" }}>
            <h3 style={{ fontSize: "1.7rem" }}> معرفی این دوره </h3>
            <i className='fa fa-lock-keyhole' style={{borderRight:"2px solid #ebebeb",padding:"2px 7px 2px 0 ",marginRight:"7px"}}></i>
            <span className='episode-download-btn'>
                <span className="fa fa-arrow-down-to-line episode-icon" style={{ color: "#2aaf27", border: "1px solid #2aaf27" }}></span>
                {/* <span className="fa fa-arrow-down-to-line episode-icon" style={{ color: "#778899", border: "1px solid #778899" }}></span> */}
            </span>
            <span>00:15:12</span>
        </li>
    );
}

export default CourseSinglePart;