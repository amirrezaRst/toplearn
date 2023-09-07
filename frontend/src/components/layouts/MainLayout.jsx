import React from 'react';
import { useEffect } from 'react';
import Footer from '../common/Footer';
import MainNavbar from '../common/MainNavbar';
import TopNavbar from '../common/TopNavbar';


const MainLayout = ({ children, userData, userLogin }) => {

    return (
        <React.Fragment>

            <TopNavbar userData={userData} userLogin={userLogin} />
            <MainNavbar />

            {children}

            <Footer />

        </React.Fragment>
    );
}

export default MainLayout;