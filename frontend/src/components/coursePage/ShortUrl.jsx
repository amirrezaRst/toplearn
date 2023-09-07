import React from 'react';


const ShortUrl = ({title,id}) => {
    return (
        <header>

            <h1 style={{ fontSize: "2rem" }}> {title} </h1>
            <div className="url-copy">

                <div className="" style={{ color: "#686371" }}>
                    <span style={{ marginLeft: "14px", fontSize: "1.5rem" }}>لینک کوتاه</span>
                    <span style={{ fontFamily: "sans-serif" }}>https://toplearn.com/corse/{id}</span>
                </div>
                <div id='url-copy-btn' style={{ borderRight: "1px solid #d6d9db" }}>
                    <i class="fal fa-copy"></i>
                </div>

            </div>

        </header>
    );
}

export default ShortUrl;