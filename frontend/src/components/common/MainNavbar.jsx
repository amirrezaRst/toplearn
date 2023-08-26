import React from 'react';
import { Link } from 'react-router-dom';


const MainNavbar = () => {
    return (
        <div class="main-menu">
            <div class="container">
                <nav>
                    <span class="responsive-sign"><i class="zmdi zmdi-menu"></i></span>
                    <ul>
                        <li><a> برنامه نویسی موبایل </a>
                        </li>
                        <li><a href=""> برنامه نویسی وب </a>
                        </li>
                        <li><a href=""> برنامه نویسی تحت ویندوز </a></li>
                        <li><a href=""> طراحی سایت </a>
                        </li>
                        <li><a href=""> بانک های اطلاعاتی </a></li>
                        <li><a href=""> سئو </a></li>
                        <li><a href=""> سیستم عامل </a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default MainNavbar;