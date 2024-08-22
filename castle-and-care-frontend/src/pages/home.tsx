import React from "react";
// import Button from "../components/common/button";
import useCustomNavigate from "../hooks/customNavigate";
import HeroImage from "../images/hero.jpg";
import '../styles/pages/home.css';
import TestimonialCarousel from "../components/common/testimonialCarousel";
import HomepageCarousel from "../components/common/homepageCarousel";
import EndMenstrualMyth from "../../src/images/hero.jpg"
import GivingInfo from "../images/giving_info.jpg";
import CommunityService from "../images/ngo3.jpeg";
import PrimaryButton from "../components/common/primaryButton";
import SponsorsCard from "../components/common/sponsorsCarousel";


const Home: React.FC = () => {
    const { goToEvents } = useCustomNavigate();

    return(
        <>
            <section className="homepage-hero-carousel">
                <HomepageCarousel/>
            </section>
            <section className="homepage-about">
                <h1>Castle and Care</h1>
                <p><b>WOMEN EMPOWERMENT INITIATIVE</b> is committed to uplifting women by providing them with the tools,
                    resources, and support needed to achieve economic independence and personal growth. Through
                    vocational training, financial literacy programs, and leadership development, the organization
                    empowers women to break the cycle of poverty and build a brighter future for themselves and their
                    families. By fostering an environment of support and opportunity, the initiative helps women realize
                    their potential and become active contributors to their communities.</p>
                <p><b>WIDOW ASSISTANCE PROGRAM</b> is a compassionate initiative aimed at supporting widows who often
                    face significant social and economic challenges. The program provides these women with financial
                    aid, counseling, and skill-building opportunities to help them regain stability and dignity in their
                    lives. By addressing their immediate needs and offering long-term solutions, the Widow Assistance
                    Program ensures that these women are not left behind but are instead empowered to rebuild their
                    lives and provide for their families. </p>
                <p><b>MEDICAL OUTREACH INITIATIVE</b> is an essential program designed to bring healthcare services to
                    underserved communities. Through regular medical camps, health education workshops, and free
                    screenings, the organization addresses critical healthcare needs and promotes well-being among
                    vulnerable populations. The outreach initiative not only provides immediate care but also works to
                    educate communities on preventive health practices, ensuring that they have the knowledge and
                    resources to lead healthier lives.</p>
            </section>
            <section className="project-container">
                <div className="bullet-point">
                    <div className="header-bullet"></div>
                    <h1>Our Projects</h1>
                </div>
                <div className="homepage-projects">
                    <img src={EndMenstrualMyth} alt={"Female Kids"}/>
                    <div className="background-rectangle"></div>
                    <div>
                        <h2>Women Empowerment</h2>
                        <p>Uplifting women by providing them with the tools,
                            resources, and support needed to achieve economic independence and personal growth. Through
                            vocational training, financial literacy programs, and leadership development, the
                            organization
                            empowers women to break the cycle of poverty and build a brighter future for themselves and
                            their
                            families.</p>
                        <div className="project-read-more-button">
                            <PrimaryButton onClick={goToEvents}>Read more</PrimaryButton>
                        </div>
                    </div>
                </div>
                <div className="homepage-projects flip-content">
                    <img src={CommunityService} alt={"Community Service"} />
                    <div className="background-rectangle"></div>
                    <div>
                        <h2>Community Service</h2>
                        <p>Through regular medical camps, health education workshops, and free
                            screenings, the organization addresses critical healthcare needs and promotes well-being
                            among vulnerable populations. The outreach initiative not only provides immediate care but also
                            works to educate communities on preventive health practices, ensuring that they have the knowledge
                            resources to lead healthier lives.</p>
                        <div className="project-read-more-button">
                            <PrimaryButton onClick={goToEvents}>Read more</PrimaryButton>
                        </div>
                    </div>
                </div>
                <div className="homepage-projects">
                    <img src={GivingInfo} alt={"Dr giving advice"}/>
                    <div className="background-rectangle"></div>
                    <div>
                        <h2>Medical Outreach</h2>
                        <p>Through regular medical camps, health education workshops, and free
                            screenings, the organization addresses critical healthcare needs and promotes well-being
                            among vulnerable populations. The outreach initiative not only provides immediate care but also
                            works to educate communities on preventive health practices, ensuring that they have the knowledge
                            and resources to lead healthier lives.</p>
                        <div className="project-read-more-button">
                            <PrimaryButton onClick={goToEvents}>Read more</PrimaryButton>
                        </div>
                    </div>
                </div>

            </section>
            <section className="our-partners">
                <div className="bullet-point">
                    <div className="header-bullet"></div>
                    <h1>Our Partners</h1>
                </div>
                <div>
                    <SponsorsCard/>
                </div>
            </section>
            <section className="testimonials-section">
                <div>
                    <div className="bullet-point">
                        <div className="header-bullet"></div>
                        <h1>What The People Think About Us</h1>
                    </div>
                </div>
                <div>
                    <TestimonialCarousel/>
                </div>
            </section>
        </>
    );
}

export default Home;