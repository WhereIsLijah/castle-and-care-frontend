import React from 'react';
import '../../styles/carouselFormat.css';

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
