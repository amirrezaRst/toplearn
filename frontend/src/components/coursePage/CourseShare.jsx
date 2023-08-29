import React from 'react';


const CourseShare = () => {
    return (
        <div class="tags-layer share-layer">
            <div>
                <span>به اشتراک گذاری</span>
            </div>
            <div style={{ display: "flex", float: "left" }}>
                <div className="share-button">
                    <i class="fa-brands fa-twitter"></i>
                </div>
                <div className="share-button">
                    <i class="fa-brands fa-facebook-f"></i>
                </div>
                <div className="share-button">
                    <i class="fa-brands fa-whatsapp"></i>
                </div>
            </div>
        </div>
    );
}

export default CourseShare;