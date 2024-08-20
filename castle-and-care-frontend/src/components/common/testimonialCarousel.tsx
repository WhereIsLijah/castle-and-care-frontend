import React, {useRef, useEffect} from "react";
import testimonialsData from "../../data/testimonialsData";
import TestimonialCard from "./testimonialCard";
import "../../styles/testimonialCarousel.css"

const TestimonialCarousel: React.FC = () => {

    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current) {
                const maxScrollLeft = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
                if (scrollRef.current.scrollLeft >= maxScrollLeft) {
                    scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
                } else {
                    scrollRef.current.scrollBy({ left: 700, behavior: "smooth" }); // Adjust scroll distance as needed
                }
            }
        }, 10000);

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, []);

    // const scrollLeft = () => {
    //     if (scrollRef.current) {
    //         scrollRef.current.scrollBy({ left: -700, behavior: 'smooth' }); // Adjust scroll distance as needed
    //     }
    // };
    //
    // const scrollRight = () => {
    //     if (scrollRef.current) {
    //         scrollRef.current.scrollBy({ left: 700, behavior: 'smooth' }); // Adjust scroll distance as needed
    //     }
    // };

    return(
        <>
            {/*<button className="scroll-button left" onClick={scrollLeft}>‹</button>*/}
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
            {/*<button className="scroll-button right" onClick={scrollRight}>›</button>*/}
        </>
    );
}

export default TestimonialCarousel;