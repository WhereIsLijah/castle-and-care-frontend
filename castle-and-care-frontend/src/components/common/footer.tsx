import React from 'react';
import '../../styles/common/footer.css';
import LogoImage from '../../images/cac-logo.png';
import FacebookIcon from '../../images/fb.svg';
import TwitterIcon from '../../images/social-icons/twitter.svg';
import InstagramIcon from '../../images/social-icons/ig.svg';
import useCustomNavigate from "../../hooks/customNavigate";
import PrimaryButton from "./primaryButton";


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
                        <a href="https://www.facebook.com/profile.php?id=100072161891595">
                            <img src={FacebookIcon} alt="Facebook logo"/>
                        </a>
                        <a href="">
                            <img src={TwitterIcon} alt="Twitter logo"/>
                        </a>
                        <a href="https://www.instagram.com/castleandcare/">
                            <img src={InstagramIcon} alt="Instagram logo"/>
                        </a>
                    </div>
                </div>
                <div className="footer-button"><PrimaryButton onClick={goToDonate}>Donate</PrimaryButton></div>

            </div>
            {/*<div className="footer-bottom">*/}
            {/*    © {currentYear} Castle and Care*/}
            {/*</div>*/}
        </footer>
    );
};

export default Footer;
