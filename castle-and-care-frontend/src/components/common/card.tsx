import React from "react";
import "../../styles/card.css"

interface CardProps {
    imgAlt: string;
    imgSrc: string;
    title: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ imgAlt, imgSrc, title }) => {
    return (
        <div className="card-container">
            <img src={imgSrc} alt={imgAlt} className="card-img" />
            <h1>{title}</h1>
        </div>
    );
}

export default Card;
