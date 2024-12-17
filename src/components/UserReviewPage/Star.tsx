import React, { useState } from 'react';

interface StarProps {
    fill: string;
    hovered: boolean;  // Add hovered prop to indicate hover state
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onClick: () => void;
}

const Star: React.FC<StarProps> = ({ fill, hovered, onMouseEnter, onMouseLeave, onClick }) => (
    <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        style={{ 
            cursor: "pointer", 
            display: "inline-block", 
            margin: "5px",
            transition: "transform 0.2s ease-in-out",
            transform: hovered ? 'scale(1.1)' : 'none'  // Use hovered to control scale
        }}
    >
        <svg viewBox="0 0 51 48" style={{ 
            width: "20px", 
            height: "20px", 
            transition: "fill 0.2s ease-in-out, transform 0.2s ease-in-out" 
        }}>
            <path d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" style={{ 
                fill: fill, 
                transition: "fill 0.2s ease-in-out" 
            }}></path>
        </svg>
    </div>
);

const RatingSystem: React.FC<{onStarClick: (index: number) => void}> = ({onStarClick}) => {
    const [hoverIndex, setHoverIndex] = useState<number | null>(-1);
    const [clickedIndex, setClickedIndex] = useState<number>(5);

    const handleMouseEnter = (index: number) => {
        setHoverIndex(index);
    };

    const handleMouseLeave = () => {
        setHoverIndex(-1);
    };

    const handleClick = (index: number) => {
        setClickedIndex(index);
        onStarClick(index);
    };

    const fillColor = (index: number): string => {
        if (clickedIndex !== -1 && index <= clickedIndex) {
            return "rgb(255, 182, 33)"; // Active color
        } else if (hoverIndex && hoverIndex !== -1 && index <= hoverIndex) {
            return "rgb(255, 200, 100)"; // Hover color
        }
        return "rgb(203, 211, 227)"; // Default color
    };

    return (
        <div>
            {Array.from({ length: 5 }, (_, index) => (
                <Star
                    key={index}
                    fill={fillColor(index)}
                    hovered={hoverIndex === index} // Pass hovered state as a prop
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(index)}
                />
            ))}
        </div>
    );
};

export default RatingSystem;
