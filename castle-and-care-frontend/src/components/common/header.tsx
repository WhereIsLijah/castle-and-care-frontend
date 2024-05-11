import React from "react";
import LogoImage from '../../images/cac-logo.png';  // Correctly imported image
import Button from "./button";
import './header.css';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/donate');
    };

    return (
        <>
            <nav className="header">
                <div className="logo">
                    <img src={LogoImage} alt="Castle and Care logo" />
                </div>
                <ul className="navigation">
                    <li>About Us</li>
                    <li>Events</li>
                    <li>Get Involved</li>
                    <li>Testimonials</li>
                </ul>
                <Button onClick={handleClick}>Donate</Button>
            </nav>
        </>
    );
}
