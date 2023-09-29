import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const HomeHeader = () => {
    const [searchData, setSearchData] = useState();
    const navigation = useNavigate();

    const handleSearch = (e) => {
        const search = searchData.trim();
        e.preventDefault();
        if (search != undefined || search != null || search != "") {
            navigation(`/courses?search=${search}`);

        }
    }

    return (
        <React.Fragment>
            <header>
                <Link to="/" class="logo"><img src='/images/logo3.png' href="toplearn" /></Link>
                {/* <h1> با اساتید مجرب و کارآزموده در خودآموز تاپ لرن </h1>
                <h2> آموزش ببینید ، تجربه کسب کنید و بازار کار شوید </h2>
                <h3> با کمترین هزینه خودت یاد بگیر </h3> */}
                <p style={{ fontSize: "2.65rem" }}>خودآموزی ، کسب تجربه ، ورود به بازار کار با تاپ لرن <br /> با کمترینــــ هزینه خودت حرفه ایــــ یاد بگیـر <br /> و همیشه بروز بمون
                </p>
            </header>
            <div class="search-form">
                <form onSubmit={e => handleSearch(e)}>
                    <input type="text" value={searchData} onChange={e => setSearchData(e.target.value)} name="" placeholder="جست و جو آموزش ؟" />
                    <button><i class="zmdi zmdi-search"></i></button>
                </form>
            </div>
        </React.Fragment>
    );
}

export default HomeHeader;