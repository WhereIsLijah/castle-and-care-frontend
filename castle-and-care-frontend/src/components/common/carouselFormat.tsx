import React from 'react';
import '../../styles/carouselFormat.css';
import TestimonialImage1 from "../../images/testimonial1.png";
import TestimonialCard from "./testimonialCard";

interface CarouselImageProp {
    text: string;
}


const CarouselFormat: React.FC<CarouselImageProp> = ({ text }) => {
    return(
        <div className="carousel-image-container">
            <h2>{text}</h2>
        </div>
    );
};

export default CarouselFormat;

