import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const DestinationCard = ({ image, title, location, description }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="group relative w-full aspect-[3/4] overflow-hidden cursor-pointer"
        >
            {/* Background Image with Slow Zoom */}
            <div className="w-full h-full overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-110"
                />
            </div>

            {/* Overlay - Darkens on hover */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-700" />

            {/* Content */}
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between text-white">

                {/* Top: Location Tag */}
                <div className="transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                    <span className="text-xs uppercase tracking-[0.2em] border border-white/30 px-3 py-1 backdrop-blur-sm">
                        {location}
                    </span>
                </div>

                {/* Bottom: Title & Action */}
                <div>
                    <h3 className="text-3xl md:text-4xl font-serif font-medium mb-2 transform bg-clip-text">
                        {title}
                    </h3>

                    <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
                        <p className="text-sm font-light text-white/90 mb-6 leading-relaxed max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                            {description}
                        </p>
                    </div>

                    <div className="flex items-center gap-4 group-hover:gap-6 transition-all duration-500">
                        <span className="text-xs uppercase tracking-widest">Explore</span>
                        <ArrowRight size={16} className="text-white/80" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default DestinationCard;
