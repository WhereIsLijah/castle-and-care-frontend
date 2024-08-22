import React from "react";
import "../../styles/common/sponsorItem.css"

interface SponsorsItemProps {
    title: string
    imgSrc: string;
    alt: string;
}

const SponsorsItem: React.FC<SponsorsItemProps> = ({ title, imgSrc, alt}) => {
    return (
        <div className="sponsor-logo-container">
            <img src={imgSrc} alt={alt} className="sponsor-logo-design"/>
            {/*<p className="testimonial-text">"{title}"</p>*/}
        </div>
    );
}

export default SponsorsItem;
