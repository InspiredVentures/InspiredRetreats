import React from 'react';

const Logo = ({ color = 'currentColor', width = 40, height = 40 }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <title>Sacred Lotus Logo</title>
            {/* Central Diamond / Seed */}
            <path d="M50 20L60 50L50 80L40 50L50 20Z" stroke={color} strokeWidth="1.5" />

            {/* Upper Petals */}
            <path d="M50 10C50 10 75 30 75 50C75 70 50 90 50 90" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M50 10C50 10 25 30 25 50C25 70 50 90 50 90" stroke={color} strokeWidth="1.5" strokeLinecap="round" />

            {/* Side Arcs / Aura */}
            <path d="M85 50C85 30 65 15 50 15" stroke={color} strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
            <path d="M15 50C15 30 35 15 50 15" stroke={color} strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />

            {/* Base Line */}
            <path d="M30 85L70 85" stroke={color} strokeWidth="1" opacity="0.8" />
        </svg>
    );
};

export default Logo;
