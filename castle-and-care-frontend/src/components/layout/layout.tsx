import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/common/header';
import Footer from '../../components/common/footer';

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Layout;


