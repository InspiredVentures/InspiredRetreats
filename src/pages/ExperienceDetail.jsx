import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Users, CheckCircle } from 'lucide-react';
import { retreatsData } from '../data/retreats';
import { useBooking } from '../context/BookingContext';

const ExperienceDetail = () => {
    const { id } = useParams();
    const { openModal } = useBooking();
    const retreat = retreatsData.find(r => r.id === id);

    if (!retreat) {
        return (
            <div className="min-h-screen flex items-center justify-center text-aman-charcoal">
                <div className="text-center">
                    <h2 className="text-2xl font-serif mb-4">Experience Not Found</h2>
                    <Link to="/retreats" className="text-sm underline hover:text-aman-gold">Back to Retreats</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-aman-pearl min-h-screen pb-24">
            {/* Hero Section */}
            <div className="relative h-[70vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-10" />
                <img
                    src={retreat.image}
                    alt={retreat.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-6">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xs uppercase tracking-[0.2em] mb-4"
                    >
                        {retreat.subtitle}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-4xl md:text-7xl font-serif mb-6"
                    >
                        {retreat.title}
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-center space-x-2 text-sm uppercase tracking-widest"
                    >
                        <MapPin size={16} />
                        <span>{retreat.location}</span>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-20 relative z-30">
                <div className="bg-white p-8 md:p-16 shadow-sm border border-aman-charcoal/5">

                    <Link to="/retreats" className="inline-flex items-center text-xs uppercase tracking-widest text-aman-charcoal/40 hover:text-aman-gold mb-12 transition-colors">
                        <ArrowLeft size={14} className="mr-2" /> Back
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Left: Narrative */}
                        <div className="lg:col-span-2 space-y-8">
                            <h2 className="text-3xl font-serif text-aman-charcoal">The Concept</h2>
                            <p className="text-aman-charcoal/70 leading-relaxed font-sans text-lg">
                                {retreat.longDescription}
                            </p>

                            <div className="pt-8">
                                <h3 className="text-xl font-serif text-aman-charcoal mb-6">Experience Highlights</h3>
                                <ul className="space-y-4">
                                    {retreat.highlights.map((highlight, index) => (
                                        <li key={index} className="flex items-start text-aman-charcoal/70 text-sm md:text-base">
                                            <CheckCircle size={18} className="mr-4 text-aman-gold shrink-0 mt-1" />
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                                <div className="bg-aman-pearl/20 p-8 border border-aman-charcoal/5">
                                    <h4 className="font-serif text-lg text-aman-charcoal mb-3">The Magic</h4>
                                    <p className="text-sm text-aman-charcoal/70 italic leading-relaxed">
                                        "{retreat.specialTouch}"
                                    </p>
                                </div>
                                <div className="bg-aman-pearl/20 p-8 border border-aman-charcoal/5">
                                    <h4 className="font-serif text-lg text-aman-charcoal mb-3">Community Impact</h4>
                                    <p className="text-sm text-aman-charcoal/70 leading-relaxed mb-2">
                                        Supporting <strong>{retreat.charity.name}</strong>
                                    </p>
                                    <p className="text-xs text-aman-charcoal/50 leading-relaxed">
                                        {retreat.charity.description}
                                    </p>
                                </div>
                            </div>

                            <div className="pt-8">
                                <h3 className="text-xl font-serif text-aman-charcoal mb-6">Sample Itinerary</h3>
                                <div className="space-y-6 border-l border-aman-charcoal/10 pl-8 relative">
                                    {retreat.itinerary.map((item, index) => (
                                        <div key={index} className="relative">
                                            <span className="absolute -left-[39px] top-1 w-3 h-3 rounded-full bg-aman-stone"></span>
                                            <h4 className="font-serif text-lg text-aman-charcoal mb-1">{item.day}: {item.title}</h4>
                                            <p className="text-sm text-aman-charcoal/60">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right: Sidebar / At a Glance */}
                        <div className="lg:col-span-1">
                            <div className="bg-aman-pearl/30 p-8 border border-aman-charcoal/5 sticky top-32">
                                <h3 className="text-xl font-serif text-aman-charcoal mb-8 text-center">At a Glance</h3>

                                <div className="space-y-6 mb-12">
                                    <div className="flex items-center justify-between border-b border-aman-charcoal/10 pb-4">
                                        <div className="flex items-center text-aman-charcoal/60">
                                            <Calendar size={18} className="mr-3" />
                                            <span className="text-sm">Duration</span>
                                        </div>
                                        <span className="text-sm font-medium text-aman-charcoal">5 Days / 4 Nights</span>
                                    </div>
                                    <div className="flex items-center justify-between border-b border-aman-charcoal/10 pb-4">
                                        <div className="flex items-center text-aman-charcoal/60">
                                            <Users size={18} className="mr-3" />
                                            <span className="text-sm">Group Size</span>
                                        </div>
                                        <span className="text-sm font-medium text-aman-charcoal">8 - 12 Guests</span>
                                    </div>
                                    <div className="flex items-center justify-between border-b border-aman-charcoal/10 pb-4">
                                        <div className="flex items-center text-aman-charcoal/60">
                                            <MapPin size={18} className="mr-3" />
                                            <span className="text-sm">Region</span>
                                        </div>
                                        <span className="text-sm font-medium text-aman-charcoal">{retreat.location.split(',')[1]}</span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => openModal({ venueName: retreat.title })}
                                    className="block w-full bg-aman-charcoal text-white py-4 text-xs uppercase tracking-widest hover:bg-aman-gold transition-colors duration-300 text-center"
                                >
                                    Inquire Now
                                </button>
                                <p className="text-[10px] text-center text-aman-charcoal/40 mt-4">
                                    Fully customizable for private groups.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceDetail;
