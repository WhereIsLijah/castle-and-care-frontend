import React from "react";
import LogoImage from '../../images/cac-logo.png';  // Correctly imported image
import Button from "./button";
import '../../styles/header.css'
import useCustomNavigate from "../../hooks/customNavigate";
import {Link} from "react-router-dom";


export default function Header() {
    const { goToDonate } = useCustomNavigate();

    return (
        <>
            <nav className="header">
                <div className="logo">
                    <a href="/">
                        <img src={LogoImage} alt="Castle and Care logo"/>
                    </a>
                </div>
                <ul className="navigation">
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/get-involved">Get Involved</Link></li>
                    <li><Link to="/testimonials">Testimonials</Link></li>
                    <Button onClick={goToDonate}>Donate</Button>
                </ul>
            </nav>
        </>
    );
}
