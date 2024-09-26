import "./Button.css";
import React from "react";
interface ButtonProps{
        imageUrl?: string;
        texto: string;
        className?: string;
        onClick: () => void;
        buttonUrl?: string;
    }


    const Button: React.FC<ButtonProps> = ({ texto, className, imageUrl, onClick, buttonUrl }) => {
        const handleClick = () => {
            if (buttonUrl) {
                window.location.href = buttonUrl; 
            } else {
                onClick(); 
            }
        };
    
        return (
            <button onClick={handleClick} className={`boton-reutilizable ${className}`}>
            {imageUrl && <img src={imageUrl} alt="button icon" />}
            {texto}
        </button>
    );
};
export default Button