const Logo = ({ color = "currentColor", className = "", isScrolled = false }) => {
    return (
        <div className={`flex flex-col items-center ${className} text-${color}`}>
            <svg
                width="360"
                height="50"
                viewBox="0 0 360 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="overflow-visible"
            >
                {/* Main Text: INSPIRED RETREATS */}
                <text
                    x="50%"
                    y="34"
                    textAnchor="middle"
                    letterSpacing="0.1em"
                    fontWeight="600"
                >
                    <tspan fill={color} fontFamily="'Montserrat', sans-serif" fontSize="24">INSPIRED</tspan>
                    <tspan dx="8" fill="#C5A065" fontFamily="'Cormorant Garamond', serif" fontSize="30" fontWeight="700">RETREATS</tspan>
                </text>
            </svg>
        </div>
    );
};

export default Logo;
