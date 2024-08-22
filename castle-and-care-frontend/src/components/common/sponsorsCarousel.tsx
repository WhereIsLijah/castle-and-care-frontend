import React, {useRef} from 'react';
import sponsorsData from "../../data/sponsorsData";
import "../../styles/common/sponsorsCarousel.css";
import SponsorsItem from "./sponsorsItem";

const SponsorCarousel:React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const leftScroll = () => {
        if (scrollRef.current) {
            console.log('Left scroll triggered'); // Debugging log
            scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        } else {
            console.log('scrollRef is not attached to any element'); // Debugging log
        }
    };

    const rightScroll = () => {
        if (scrollRef.current) {
            console.log('Right scroll triggered'); // Debugging log
            scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        } else {
            console.log('scrollRef is not attached to any element'); // Debugging log
        }
    };

    return(
        <>
            <div className="sponsor-element-container">
                <button className="scroll-button left-button" onClick={leftScroll}>‹</button>
                <div className="sponsor-container">
                    <div className="sponsor-list" ref={scrollRef}>
                        {sponsorsData.map((sponsor, index) => (
                            <SponsorsItem
                                key={index}
                                imgSrc={sponsor.imgSrc}
                                title={sponsor.title}
                                alt={sponsor.alt}
                            />
                        ))}
                    </div>
                </div>
                <button className="scroll-button right-button" onClick={rightScroll}>›</button>
            </div>
            </>
    );
}

export default SponsorCarousel;