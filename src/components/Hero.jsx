import { motion } from 'framer-motion';
import heroImg from '../assets/images/hero_main.png';

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image (Placeholder) */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${heroImg})`,
                }}
            >
                <div className="absolute inset-0 bg-black/20" /> {/* Subtle overlay */}
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-4xl md:text-7xl lg:text-9xl font-serif font-medium tracking-tight mb-8"
                >
                    Design Your <br /> Legacy
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-xs md:text-sm uppercase tracking-[0.4em] mb-6"
                >
                    Bespoke Retreats for Your Community
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                >
                    <button className="border border-white text-white bg-transparent hover:bg-white hover:text-black px-10 py-4 text-xs uppercase tracking-widest transition-all duration-500">
                        Create Your Experience
                    </button>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-white/50" />
            </motion.div>
        </section>
    );
};

export default Hero;
