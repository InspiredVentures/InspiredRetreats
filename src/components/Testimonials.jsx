import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        text: "I found a silence here that I didn't know I was missing. It wasn't just a holiday; it was a return to myself.",
        author: "Eleanor R.",
        location: "Stayed at Amangiri"
    },
    {
        text: "The architecture doesn't just sit in nature; it worships it. Every view, every shadow, every stone is poetry.",
        author: "Marcus T.",
        location: "Stayed at Amanzoe"
    },
    {
        text: "Service that whispers, never shouts. I have never felt more cared for, yet more completely free.",
        author: "Sarah J.",
        location: "Stayed at Amanpuri"
    }
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 6000); // Slow 6s rotation
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-32 bg-aman-stone/10 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <span className="text-xs uppercase tracking-[0.2em] text-aman-charcoal/40 mb-12 block">
                    Guest Impressions
                </span>

                <div className="relative min-h-[300px] md:min-h-[200px] flex items-center justify-center">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.8 }}
                            className="absolute w-full px-4"
                        >
                            <h3 className="text-2xl md:text-4xl font-serif italic text-aman-charcoal leading-relaxed mb-8">
                                "{testimonials[current].text}"
                            </h3>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-aman-charcoal">
                                    {testimonials[current].author}
                                </p>
                                <p className="text-[10px] uppercase tracking-widest text-aman-charcoal/50 mt-1">
                                    {testimonials[current].location}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-4 mt-12">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`h-[1px] transition-all duration-500 ${current === index ? 'w-12 bg-aman-charcoal' : 'w-6 bg-aman-charcoal/20'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
