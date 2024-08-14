import React, {useRef} from "react";
import testimonialsData from "../../data/testimonialsData";
import TestimonialCard from "./testimonialCard";
import "../../styles/testimonialCarousel.css"

const TestimonialCarousel: React.FC = () => {

    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -700, behavior: 'smooth' }); // Adjust scroll distance as needed
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 700, behavior: 'smooth' }); // Adjust scroll distance as needed
        }
    };

    return(
        <>
            <button className="scroll-button left" onClick={scrollLeft}>‹</button>
            <div className="testimonial-carousel">
                <div className="card-list" ref={scrollRef}>
                    {testimonialsData.map((data) => (
                        <TestimonialCard
                            imgSrc={data.imgSrc}
                            testimonial={data.testimonial}
                            userName={data.userName}
                            title={data.title}
                        />
                    ))}
                </div>
            </div>
            <button className="scroll-button right" onClick={scrollRight}>›</button>
        </>
    );
}

export default TestimonialCarousel;