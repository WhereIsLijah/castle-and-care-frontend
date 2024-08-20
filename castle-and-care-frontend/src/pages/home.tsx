import React from "react";
// import Button from "../components/common/button";
import useCustomNavigate from "../hooks/customNavigate";
import HeroImage from "../images/hero.jpg";
import '../styles/home.css';
import TestimonialCarousel from "../components/common/testimonialCarousel";
import HomepageCarousel from "../components/common/homepageCarousel";


const Home: React.FC = () => {
    const { goToDonate } = useCustomNavigate();

    return(
        <>
            <section className="homepage-hero-carousel">
                <HomepageCarousel />
            </section>
            <section className="featured-program">
                <div>
                    <h1>Our Projects</h1>
                </div>
                <div>
                    <h2>
                    Highlight key programs that Castle and Care is currently focusing on.
                    Showcase upcoming events with small images or icons, dates, and titles with CTAs like "Join Us"
                    </h2>
                </div>
            </section>
            <section className="testimonials">
                <div>
                    <h1 className="testimonial-title">
                        What The People Think About Us
                    </h1>
                </div>
                <div>
                    <TestimonialCarousel />
                </div>
            </section>
        </>
    );
}

export default Home;