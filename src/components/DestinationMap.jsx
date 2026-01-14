import { motion } from 'framer-motion';

const pins = [
    { x: 20, y: 35, title: "Amangiri" },
    { x: 75, y: 55, title: "Amanpuri" },
    { x: 55, y: 40, title: "Amanzoe" },
    { x: 48, y: 45, title: "Amanjena" },
    { x: 78, y: 65, title: "Amankila" },
    { x: 52, y: 38, title: "Aman Venice" },
];

const DestinationMap = () => {
    return (
        <div className="relative w-full aspect-[16/9] bg-[#F4F4F4] rounded-sm overflow-hidden border border-aman-charcoal/10">
            {/* Minimalist World Map Background (SVG or Image) */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-center grayscale" />

            {/* Pins */}
            {pins.map((pin, i) => (
                <motion.div
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                    className="absolute group cursor-pointer"
                >
                    <div className="w-3 h-3 bg-aman-charcoal rounded-full relative z-10 group-hover:bg-aman-gold transition-colors" />
                    <div className="w-3 h-3 bg-aman-charcoal/20 rounded-full absolute inset-0 animate-ping" />

                    {/* Tooltip */}
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-3 py-1 shadow-md whitespace-nowrap z-20">
                        <span className="text-[10px] uppercase tracking-widest text-aman-charcoal">{pin.title}</span>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default DestinationMap;
