import React from "react";
import "../../styles/testimonialCard.css"

interface CardProps {
    imgSrc: string;
    testimonial: string;
    userName: string;
    title: string
}

const TestimonialCard: React.FC<CardProps> = ({ imgSrc, testimonial,  userName, title}) => {
    return (
            <div className="testimonial-card">
                <div className="user-info">
                    <img src={imgSrc} alt={`${userName}'s avatar`} className="user-avatar"/>
                </div>
                <p className="testimonial-text">"{testimonial}"</p>
                <h2 className="user-name">{userName}</h2>
                {/*<h3 className="user-title">{title}</h3>*/}
            </div>
    );
}

export default TestimonialCard;
