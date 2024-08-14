import React from "react";
import Button from "../components/common/button";
import useCustomNavigate from "../hooks/customNavigate";
import HeroImage from "../images/hero.jpg";
import testimonialsData from "../data/testimonialsData";
import '../styles/home.css';
import TestimonialImage1 from "../images/testimonial1.png";
import TestimonialCard from "../components/common/testimonialCard";
import TestimonialCarousel from "../components/common/testimonialCarousel";



const Home: React.FC = () => {
    const { goToDonate } = useCustomNavigate();

    return(
        <>
            <section className="hero">
                <div className="home">
                    <h1>SOMETHING ABOUT CASTLE AND CARE</h1>
                    <p>A clear and concise statement right in the center or overlaying
                        the hero image that encapsulates the essence of the organization.
                    </p>
                    <Button onClick={goToDonate}>Donate</Button>
                </div>
                <div>
                    <img src={HeroImage} alt="Image from event"/>
                </div>
            </section>

            <section className="featured-program">
                <div>
                    <h1>Featured Programs</h1>
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
                    <h2>
                        What the People Think About Us
                    </h2>
                </div>
                <div>
                    <TestimonialCarousel />
                </div>
            </section>
        </>
    );
}

export default Home;