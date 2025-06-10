import React from 'react';

// File: /Users/yohannesm/Desktop/ALX/FE/alx-project-0x00-setup/alx-project-0x00/components/Button.tsx


interface ButtonProps {
    title: string;
    styles?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, styles, onClick }) => {
    return (
        <button
            className={`px-4 py-2 font-semibold text-white ${styles}`}
            onClick={onClick}
        >
            {title}
        </button>
    );
};

export default Button;