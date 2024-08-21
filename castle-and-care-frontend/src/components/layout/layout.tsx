import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/common/header';
import Footer from '../../components/common/footer';
import '../../styles/layout.css';

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


