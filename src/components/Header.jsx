import React from 'react';
import CustomButton from './CustomButton';

const Header = ({
    title,
    subtitle,
    buttonProps,
    className = "",
    titleClassName = "",
    subtitleClassName = "",
    alignment = "between", // can be "between", "center", or "start"
    direction = "row" // can be "row" or "column"
}) => {
    const alignmentClasses = {
        between: "justify-between",
        center: "justify-center",
        start: "justify-start"
    };

    const directionClasses = {
        row: "flex-row",
        column: "flex-col"
    };

    return (
        <div className={`
            w-full flex items-center
            flex-col ${alignmentClasses[alignment]}
            md:${directionClasses[direction]}
            ${className}
        `}>
            <div className="flex flex-col gap-2">
                <h2 className={`text-4xl md:text-5xl font-bold ${titleClassName}`}>
                    {title}
                </h2>
                {subtitle && (
                    <p className={`text-base md:text-lg ${subtitleClassName}`}>
                        {subtitle}
                    </p>
                )}
            </div>
            
            {buttonProps && (
                <div className="mt-4 md:mt-0">
                    <CustomButton {...buttonProps} />
                </div>
            )}
        </div>
    );
};

export default Header; 