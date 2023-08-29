import React from 'react';
import { Link } from "react-router-dom";

const HomeHeader = () => {
    return (
        <React.Fragment>
            <header>
                <Link to="/" class="logo"><img src='/images/logo3.png' href="toplearn" /></Link>
                {/* <h1> با اساتید مجرب و کارآزموده در خودآموز تاپ لرن </h1>
                <h2> آموزش ببینید ، تجربه کسب کنید و بازار کار شوید </h2>
                <h3> با کمترین هزینه خودت یاد بگیر </h3> */}
                <p style={{fontSize:"2.65rem"}}>خودآموزی ، کسب تجربه ، ورود به بازار کار با تاپ لرن <br /> با کمترینــــ هزینه خودت حرفه ایــــ یاد بگیـر <br /> و همیشه بروز بمون
                </p>
            </header>
            <div class="search-form">
                <form>
                    <input type="text" name="" placeholder="جست و جو آموزش ؟" />
                    <button><i class="zmdi zmdi-search"></i></button>
                </form>
            </div>
        </React.Fragment>
    );
}

export default HomeHeader;