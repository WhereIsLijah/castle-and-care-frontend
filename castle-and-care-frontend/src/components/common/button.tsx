import React from "react";
import '../../styles/button.css';

interface ButtonProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ onClick, children, type= 'button' }) => {
    return(
        <button className="btn" onClick={onClick} type={type}>
            { children }
        </button>
    );
}

export default Button;