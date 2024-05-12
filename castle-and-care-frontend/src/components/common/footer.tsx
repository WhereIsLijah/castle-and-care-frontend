import React from 'react';
import '../../styles/footer.css';
import LogoImage from '../../images/cac-logo.png';
import FacebookIcon from '../../images/fb-icon.png';
import TwitterIcon from '../../images/twitter-logo.svg';
import InstagramIcon from '../../images/ig.webp';
import Button from "./button";
import useCustomNavigate from "../../hooks/customNavigate";


const Footer = () => {
    const currentYear: number = new Date().getFullYear();

    const { goToDonate } = useCustomNavigate();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div>
                    <p>Your Contributions Can Transform Lives</p>
                    <Button onClick={goToDonate}>Donate</Button>
                </div>
                <div className="footer-links">
                    <a href="/about">About</a>
                    <a href="/faq">FAQ</a>
                    <a href="/contact">Contact</a>
                    <a href="/blog">Blog</a>
                </div>
                {/*<div className="footer-social">*/}
                {/*    /!*<a href="https://twitter.com"><TwitterIcon /></a>*!/*/}
                {/*    <a href="https://facebook.com"><FacebookIcon /></a>*/}
                {/*    <a href="https://instagram.com"><InstagramIcon /></a>*/}
                {/*</div>*/}
            </div>
            <div className="footer-bottom">
                © {currentYear} Castle and Care | <a href="/terms">Terms</a> | <a href="/privacy">Privacy</a>
            </div>
        </footer>
    );
};

export default Footer;
