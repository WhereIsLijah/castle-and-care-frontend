import React from "react";
import './button.css';

interface ButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
    return(
        <button className="btn" onClick={onClick}>
            { children }
        </button>
    );
}

export default Button;