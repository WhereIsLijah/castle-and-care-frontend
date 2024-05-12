import React from "react";
import Button from "../components/common/button";
import useCustomNavigate from "../hooks/customNavigate";
import HeroImage from "../images/hero.jpeg";
import testimonialsData from "../data/testimonialsData";
import '../styles/home.css';
import MyCarousel from "../components/common/carousel";


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
                    <img src={HeroImage} alt="Hero Image"/>
                </div>
            </section>

            <section className="featured-program">
                <div>
                    <h1>Featured Programs</h1>
                </div>
                <div className="bootstrap-scope">
                    <MyCarousel/>
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
                    <h1>
                        Testimonials
                    </h1>
                </div>
                <div>
                    <ul>
                        {testimonialsData.map((data) => (
                            <li>
                                <p>{data.description}</p>
                                <p>{data.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Home;