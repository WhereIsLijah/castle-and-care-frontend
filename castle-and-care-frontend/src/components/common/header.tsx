import React from "react";
import LogoImage from '../../images/cac-logo.png';  // Correctly imported image
import Button from "./button";
import '../../styles/header.css'
import useCustomNavigate from "../../hooks/customNavigate";
import about from "../../pages/about";

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
                    <li><a href={"/about"}></a>About Us</li>
                    <li>Events</li>
                    <li>Get Involved</li>
                    <li>Testimonials</li>
                    <Button onClick={goToDonate}>Donate</Button>
                </ul>
            </nav>
        </>
    );
}
