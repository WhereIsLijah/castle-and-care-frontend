import React from "react";
import VisionMission from "../images/VandM.png";
import "../styles/pages/about.css";
import TestimonialCard from "../components/common/testimonialCard";
import HelpImg from "../images/help.jpg";
import RaisingAwareness from "../images/raising_aware.jpg";
import ReliefPoverty from "../images/relief_poverty.jpg";
import GivingInfo from "../images/giving_info.jpg";
import TestimonialImage1 from "../images/testimonial1.png";


const About: React.FC = () => {
    return (
        <div className="about-container">
            <section className="hero">
                <div className="history">
                    <h1>History</h1> <br/>
                    <p>
                        Castle and Care was founded in 2005 with the vision of providing support and resources to
                        underserved communities. Over the years, we have grown from a small local initiative into a
                        recognized organization making a significant impact on a national scale.
                    </p> <br/>
                    <p>
                        Our journey began with a focus on direct assistance, addressing immediate needs such as food and
                        shelter. As we expanded, we incorporated educational programs, health initiatives, and advocacy
                        work. Today, we continue to evolve, driven by our commitment to empower individuals and foster
                        resilient communities.
                    </p>
                </div>
            </section>
            <section className="mission-vision">
                <div className="text-section">
                    <h1>Our Mission</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <br/>
                    <h1>Our Vision</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className="image-section">
                    <img src={VisionMission} alt="Media from event" />
                </div>
            </section>
            <section className="services">
                <h1>Our Services</h1>
                <p>
                    Our NGO is dedicated to making a positive impact in our community. We offer a range of services to
                    support those in need and promote social welfare. Our mission is to provide direct help, share
                    valuable information, raise awareness on important issues, and relieve poverty through various
                    initiatives. <br/>
                </p>

                <div className="services-list">
                    {/*<TestimonialCard imgAlt="Direct Help" imgSrc={HelpImg} title={"Direct Help"}></TestimonialCard>*/}
                    {/*<TestimonialCard imgAlt="Giving Information" imgSrc={GivingInfo} title={"Giving Information"}></TestimonialCard>*/}
                    {/*<TestimonialCard imgAlt="Raising Awareness" imgSrc={RaisingAwareness} title={"Raising Awareness"}></TestimonialCard>*/}
                    {/*<TestimonialCard imgAlt="Relieving Poverty" imgSrc={ReliefPoverty} title={"Relieving Poverty"}></TestimonialCard>*/}
                    {/*<TestimonialCard*/}
                    {/*    imgSrc={TestimonialImage1}*/}
                    {/*    testimonial="Being part of this NGO's mission has been an enriching experience that has deeply touched my heart. Their commitment to social justice and equity is evident in every initiative they undertake."*/}
                    {/*    userName="Jane Smith"*/}
                    {/*    title="Volunteer"*/}
                    {/*/>*/}
                </div>
            </section>
        </div>
    );
}

export default About;
