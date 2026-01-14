import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Users, Building2 } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

const BookingModal = () => {
    const { isOpen, closeModal, prefilledData } = useBooking();

    // Prevent propagation so clicking the modal doesn't close it
    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        onClick={closeModal}
                        className="absolute inset-0 bg-aman-charcoal/60 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        onClick={handleModalClick}
                        className="relative w-full max-w-2xl bg-white shadow-2xl overflow-hidden"
                    >
                        {/* Mobile Close Button (Top Right of Modal) */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-50 p-2 bg-white/10 backdrop-blur-sm rounded-full md:hidden text-white"
                        >
                            <X size={20} />
                        </button>

                        <div className="flex flex-col md:flex-row h-full max-h-[90vh] md:max-h-auto overflow-y-auto md:overflow-visible">

                            {/* Left Side: Visual / Summary */}
                            <div className="w-full md:w-1/3 bg-aman-charcoal text-white p-8 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-serif mb-6 text-aman-gold">Inquire</h3>
                                    <div className="space-y-6">
                                        <div>
                                            <span className="text-[10px] uppercase tracking-widest opacity-50 block mb-1">Destination</span>
                                            <p className="font-serif text-lg">{prefilledData.venueName || "General Inquiry"}</p>
                                        </div>
                                        <div>
                                            <span className="text-[10px] uppercase tracking-widest opacity-50 block mb-1">Experience</span>
                                            <p className="text-sm opacity-80">Bespoke Retreat</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-12 md:mt-0">
                                    <p className="text-[10px] opacity-40 leading-relaxed">
                                        Our concierge team will review your request and provide a tailored proposal within 24 hours.
                                    </p>
                                </div>
                            </div>

                            {/* Right Side: Form */}
                            <div className="w-full md:w-2/3 p-8 md:p-12 relative">
                                <button
                                    onClick={closeModal}
                                    className="absolute top-6 right-6 text-aman-charcoal/40 hover:text-aman-charcoal transition-colors hidden md:block"
                                >
                                    <X size={24} />
                                </button>

                                <form className="space-y-6 mt-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs uppercase tracking-widest text-aman-charcoal/60">Name</label>
                                            <input type="text" className="w-full bg-aman-pearl/30 border-b border-aman-charcoal/20 p-2 focus:border-aman-gold outline-none transition-colors" placeholder="Full Name" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs uppercase tracking-widest text-aman-charcoal/60">Email</label>
                                            <input type="email" className="w-full bg-aman-pearl/30 border-b border-aman-charcoal/20 p-2 focus:border-aman-gold outline-none transition-colors" placeholder="Email Address" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs uppercase tracking-widest text-aman-charcoal/60 flex items-center gap-2">
                                                <Calendar size={12} /> Desired Dates
                                            </label>
                                            <input type="text" className="w-full bg-aman-pearl/30 border-b border-aman-charcoal/20 p-2 focus:border-aman-gold outline-none transition-colors" placeholder="e.g. Oct 2026" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs uppercase tracking-widest text-aman-charcoal/60 flex items-center gap-2">
                                                <Users size={12} /> Group Size
                                            </label>
                                            <select className="w-full bg-aman-pearl/30 border-b border-aman-charcoal/20 p-2 focus:border-aman-gold outline-none transition-colors text-aman-charcoal/80">
                                                <option>10 - 20 Guests</option>
                                                <option>20 - 50 Guests</option>
                                                <option>50+ Guests</option>
                                                <option>Individual / Couple</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-aman-charcoal/60">Vision / Requirements</label>
                                        <textarea
                                            rows="3"
                                            className="w-full bg-aman-pearl/30 border-b border-aman-charcoal/20 p-2 focus:border-aman-gold outline-none transition-colors resize-none"
                                            placeholder="Tell us about your retreat goals..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            // Mock submit
                                            alert("Inquiry Sent! We will be in touch shortly.");
                                            closeModal();
                                        }}
                                        className="w-full bg-aman-charcoal text-white py-4 text-xs uppercase tracking-widest hover:bg-aman-gold transition-colors duration-300 mt-4"
                                    >
                                        Submit Request
                                    </button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default BookingModal;
