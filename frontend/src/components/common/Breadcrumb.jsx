import React from 'react';


const Breadcrumb = () => {
    return (
        <div class="container">
            <nav aria-label="breadcrumb">
                <ul class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#"> تاپ لرن </a></li>
                    <li class="breadcrumb-item active"><a href="#"> دوره ها </a></li>
                    <li class="breadcrumb-item active" aria-current="page"> دوره آموزشی ساخت ربات تلگرام </li>
                </ul>
            </nav>
        </div>
    );
}

export default Breadcrumb;