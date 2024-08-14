import React from 'react';
import '../../styles/footer.css';
import LogoImage from '../../images/cac-logo.png';
import FacebookIcon from '../../images/fb.svg';
import TwitterIcon from '../../images/twitter.svg';
import InstagramIcon from '../../images/ig.svg';
import Button from "./button";
import useCustomNavigate from "../../hooks/customNavigate";


const Footer = () => {
    const currentYear: number = new Date().getFullYear();

    const { goToDonate } = useCustomNavigate();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <a href="/">
                        <img src={LogoImage} alt="Castle and Care logo"/>
                    </a>
                </div>
                <div className="footer-links">
                    <a href="/faq">FAQ</a>
                    <a href="/contact">Contact</a>
                    <a href="/blog">Blog</a>
                    <a href="/terms">Terms</a>
                    <a href="/privacy">Privacy</a>
                    <div className="footer-social">
                        <a href="">
                            <img src={FacebookIcon} alt="Facebook logo"/>
                        </a>
                        <a href="">
                            <img src={TwitterIcon} alt="Twitter logo"/>
                        </a>
                        <a href="">
                            <img src={InstagramIcon} alt="Instagram logo"/>
                        </a>
                    </div>
                </div>
                <div><Button onClick={goToDonate}>Donate</Button></div>

            </div>
            {/*<div className="footer-bottom">*/}
            {/*    © {currentYear} Castle and Care*/}
            {/*</div>*/}
        </footer>
    );
};

export default Footer;
