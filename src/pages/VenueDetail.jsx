import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, CheckCircle, Star, Tag, Clock } from 'lucide-react';
import { venuesData } from '../data/venues';
import { useBooking } from '../context/BookingContext';

const VenueDetail = () => {
    const { id } = useParams();
    const { openModal } = useBooking();
    const venue = venuesData.find(v => v.id === id);

    if (!venue) {
        return (
            <div className="min-h-screen flex items-center justify-center text-aman-charcoal">
                <div className="text-center">
                    <h2 className="text-2xl font-serif mb-4">Venue Not Found</h2>
                    <Link to="/destinations" className="text-sm underline hover:text-aman-gold">Back to Venues</Link>
                </div>
            </div>
        );
    }
    // ... (rest of file)


    return (
        <div className="bg-aman-pearl min-h-screen pb-24">
            {/* Hero Section */}
            <div className="relative h-[70vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/30 z-10" />
                <img
                    src={venue.images[0]}
                    alt={venue.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-6">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xs uppercase tracking-[0.2em] mb-4 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full"
                    >
                        {venue.tier}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-4xl md:text-7xl font-serif mb-6"
                    >
                        {venue.name}
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-center space-x-2 text-sm uppercase tracking-widest"
                    >
                        <MapPin size={16} />
                        <span>{venue.location}</span>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-20 relative z-30">
                <div className="bg-white p-8 md:p-16 shadow-sm border border-aman-charcoal/5">

                    <Link to="/destinations" className="inline-flex items-center text-xs uppercase tracking-widest text-aman-charcoal/40 hover:text-aman-gold mb-12 transition-colors">
                        <ArrowLeft size={14} className="mr-2" /> Back to Venues
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Left: Narrative */}
                        <div className="lg:col-span-2 space-y-8">
                            <h2 className="text-3xl font-serif text-aman-charcoal">The Venue</h2>
                            <p className="text-xl font-serif text-aman-charcoal/80 italic">
                                "{venue.tagline}"
                            </p>
                            <p className="text-aman-charcoal/70 leading-relaxed font-sans text-lg">
                                {venue.description}
                            </p>

                            <div className="pt-8">
                                <h3 className="text-xl font-serif text-aman-charcoal mb-6">Key Amenities</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {venue.amenities.map((item, index) => (
                                        <li key={index} className="flex items-start text-aman-charcoal/70 text-sm md:text-base list-none">
                                            <CheckCircle size={18} className="mr-4 text-aman-gold shrink-0 mt-1" />
                                            {item}
                                        </li>
                                    ))}
                                </div>
                            </div>

                            {/* Gallery Section */}
                            <div className="pt-12 border-t border-aman-charcoal/10">
                                <h3 className="text-xl font-serif text-aman-charcoal mb-6">Gallery</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="h-64 md:h-80 overflow-hidden rounded-lg">
                                        <img src={venue.images[1] || venue.images[0]} alt="Gallery 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                                    </div>
                                    <div className="h-64 md:h-80 overflow-hidden rounded-lg">
                                        <img src={venue.images[2] || venue.images[0]} alt="Gallery 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-aman-pearl/30 p-8 border border-aman-charcoal/5 sticky top-32">
                                <h3 className="text-xl font-serif text-aman-charcoal mb-8 text-center">Perfect For</h3>

                                <div className="flex flex-wrap gap-2 mb-8 justify-center">
                                    {venue.bestFor.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 bg-white border border-aman-charcoal/10 text-xs uppercase tracking-wider text-aman-charcoal/70">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="space-y-6 mb-8 border-t border-b border-aman-charcoal/10 py-8">
                                    <div className="text-center">
                                        <div className="flex items-center justify-center text-aman-charcoal/40 mb-2">
                                            <Tag size={14} className="mr-2" />
                                            <span className="text-[10px] uppercase tracking-[0.2em]">Indicative</span>
                                        </div>
                                        <span className="text-xl font-serif text-aman-charcoal italic">{venue.priceRange}</span>
                                    </div>

                                    <div className="text-center">
                                        <div className="flex items-center justify-center text-aman-charcoal/40 mb-2">
                                            <Clock size={14} className="mr-2" />
                                            <span className="text-[10px] uppercase tracking-[0.2em]">Availability</span>
                                        </div>
                                        <span className="text-lg font-serif text-aman-charcoal/80 italic">{venue.availability}</span>
                                    </div>

                                    <div className="text-center">
                                        <div className="flex items-center justify-center text-aman-charcoal/40 mb-2">
                                            <Star size={14} className="mr-2" />
                                            <span className="text-[10px] uppercase tracking-[0.2em]">Capacity</span>
                                        </div>
                                        <span className="text-lg font-serif text-aman-charcoal/80 italic">{venue.capacity}</span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => openModal({ venueName: venue.name })}
                                    className="block w-full bg-aman-charcoal text-white py-4 text-xs uppercase tracking-widest hover:bg-aman-gold transition-colors duration-300 text-center"
                                >
                                    Inquire Availability
                                </button>
                                <p className="text-[10px] text-center text-aman-charcoal/40 mt-4">
                                    Partner rates available for members.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VenueDetail;
