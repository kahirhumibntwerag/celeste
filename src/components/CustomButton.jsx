import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VARIANTS = {
    primary: "bg-[#7d7d7d] text-white overflow-hidden",
    secondary: "bg-white text-[#7d7d7d] border border-[#7d7d7d]",
    outline: "bg-transparent border-2 border-[#7d7d7d] text-[#7d7d7d]",
    danger: "bg-red-500 text-white",
};

const SIZES = {
    sm: "px-2 py-1 text-sm",
    md: "px-2 py-2 text-lg",
    lg: "px-4 py-3 text-xl",
};

const CustomButton = ({ 
    text, 
    to, 
    className = "",
    onClick,
    animated = true,
    variant = "primary",
    size = "md",
    icon,
    disabled = false,
    isLoading = false
}) => {
    const [hovered, setHovered] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        if (disabled || isLoading) return;
        if (to) {
            navigate(to);
        }
        if (onClick) {
            onClick();
        }
    };

    const baseClasses = "rounded-3xl font-medium transition-all duration-300 flex items-center justify-center gap-2";
    const variantClass = VARIANTS[variant];
    const sizeClass = SIZES[size];
    const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:shadow-lg";
    
    return (
        <button
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={handleClick}
            disabled={disabled || isLoading}
            className={`${baseClasses} ${variantClass} ${sizeClass} ${disabledClass} ${className}`}
        >
            {isLoading ? (
                <span className="animate-spin">⭕</span>
            ) : (
                <>
                    {icon && <span className="w-5 h-5">{icon}</span>}
                    <span className={animated ? `${hovered ? "bounce-out" : "bounce-in"}` : ""}>
                        {text}
                    </span>
                </>
            )}
        </button>
    );
};

export default CustomButton; 