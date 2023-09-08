import React from 'react';
import { Tooltip } from 'react-tooltip';
import config from "../../services/config.json";

const ShortUrl = ({ title, id }) => {

    const copyClipboard = () => {
        navigator.clipboard.writeText(`http://localhost:3001/course/${id}`);
    }
    return (
        <header>

            <h1 style={{ fontSize: "2rem" }}> {title} </h1>
            <div className="url-copy">

                <div className="" style={{ color: "#686371" }}>
                    <span style={{ marginLeft: "14px", fontSize: "1.5rem" }}>لینک کوتاه</span>
                    <span style={{ fontFamily: "sans-serif" }}>http://localhost:3001/course/{id}</span>
                </div>
                <div onClick={copyClipboard} id='url-copy-btn' style={{ borderRight: "1px solid #d6d9db" }}>
                    <Tooltip anchorSelect='#url-copy-btn'>
                        <p style={{ margin: "2px" }}>کپی لینک</p>
                    </Tooltip>
                    <i class="fal fa-copy"></i>
                </div>

            </div>

        </header>
    );
}

export default ShortUrl;