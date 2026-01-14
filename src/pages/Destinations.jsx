import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, MapPin, X } from 'lucide-react';
import DestinationCard from '../components/DestinationCard';
import { venuesData } from '../data/venues';


// Simple abstract map component using absolute positioning for dots
// In a real app, use a mapping library. This acts as a "stylized" aesthetic map.
const StylizedMap = ({ venues }) => {
    // Recalibrated coordinates for standard Miller/Mercator projection SVG
    const venueCoordinates = {
        'amangiri': { top: '34%', left: '16%' }, // Utah
        'amanpuri': { top: '54%', left: '76%' }, // Thailand (Phuket)
        'singita-lebombo': { top: '78%', left: '56%' }, // South Africa (Kruger)
        'habitas-alula': { top: '48%', left: '59%' }, // Saudi
        'potato-head': { top: '70%', left: '80%' }, // Bali
        'eaton-dc': { top: '35%', left: '23%' }, // Washington DC
        'fogo-island': { top: '24%', left: '32%' }, // Newfoundland
        'nomade-tulum': { top: '48%', left: '19%' }, // Tulum
        'the-bridge': { top: '34.5%', left: '25%' }, // Hamptons (NY)
        'deplar-farm': { top: '15%', left: '44%' }, // Iceland
        'explora-torres': { top: '88%', left: '29%' }, // Patagonia
        'villa-deste': { top: '32%', left: '51%' }, // Italy
        'royal-mansour': { top: '40%', left: '46%' }, // Morocco
        'nihi-sumba': { top: '72%', left: '83%' }, // Sumba
        'six-senses-douro': { top: '35%', left: '45%' }, // Portugal
        'laucala-island': { top: '70%', left: '92%' }, // Fiji (Approx)
        'ace-hotel-kyoto': { top: '38%', left: '86%' }, // Kyoto
        'giraffe-manor': { top: '60%', left: '57%' }, // Kenya
        'therme-vals': { top: '30%', left: '49%' }, // Switzerland
        'post-ranch-inn': { top: '36%', left: '15%' }, // California (Big Sur)
    };

    return (
        <div className="w-full mb-16 hidden md:block group/map">
            <div className="relative w-full max-w-4xl mx-auto aspect-[1009/666]">
                {/* Real World Map SVG */}
                <div className="absolute inset-0">
                    <svg viewBox="0 0 1009.6727 665.96301" className="w-full h-full stroke-aman-charcoal/10 fill-aman-charcoal/5">
                        <g transform="translate(0,60)">
                            {/* South America */}
                            <path d="M 286.6,560.4 L 273.6,535.9 L 261.6,498.4 L 285.9,461.3 L 269.4,453.6 L 271.6,437.1 L 286.9,431.1 L 297.4,443.1 L 305.6,437.9 L 325.9,446.9 L 340.9,438.6 L 358.1,439.4 L 387.4,461.9 L 409.9,455.9 L 420.4,467.9 L 393.4,496.4 L 399.4,509.9 L 377.6,547.4 L 343.9,599.9 L 346.1,617.9 L 326.6,638.1 L 286.6,560.4 z" />
                            {/* North America */}
                            <path d="M 82.6,269.8 L 94.6,275.8 L 106.6,289.4 L 118.6,275.8 L 130.6,275.8 L 142.6,255.6 L 154.6,255.6 L 166.6,269.1 L 190.6,262.3 L 202.6,262.3 L 214.6,269.1 L 226.6,262.3 L 238.6,262.3 L 244.6,269.1 L 250.6,282.6 L 238.6,289.4 L 214.6,296.1 L 280.6,423.4 L 298.6,416.6 L 298.6,416.6 L 310.6,416.6 L 322.6,403.1 L 310.6,376.1 L 430.7,262.3 L 418.7,221.8 L 364.7,215.1 L 322.6,120.6 L 244.6,73.4 L 214.6,87.0 L 172.6,87.0 L 160.6,107.2 L 94.6,174.7 L 22.6,174.7 L 82.6,269.8 z" />
                            {/* Africa */}
                            <path d="M 439.9,395.6 L 445.9,361.9 L 427.9,334.9 L 439.9,321.4 L 469.9,321.4 L 481.9,307.9 L 517.9,307.9 L 523.9,314.6 L 553.9,307.9 L 583.9,334.9 L 607.9,321.4 L 637.9,368.6 L 631.9,395.6 L 655.9,415.9 L 637.9,456.4 L 607.9,469.9 L 577.9,591.4 L 541.9,598.1 L 493.9,523.9 L 469.9,476.6 L 439.9,456.4 L 427.9,429.4 L 439.9,395.6 z" />
                            {/* Europe/Asia */}
                            <path d="M 445.9,314.6 L 451.9,301.1 L 445.9,287.6 L 463.9,287.6 L 469.9,267.4 L 487.9,267.4 L 481.9,247.1 L 529.9,233.6 L 541.9,260.6 L 559.9,260.6 L 559.9,220.1 L 601.9,186.4 L 691.9,186.4 L 757.9,206.6 L 775.9,193.1 L 931.9,193.1 L 985.9,260.6 L 937.9,348.4 L 883.9,301.1 L 859.9,328.1 L 829.9,314.6 L 805.9,334.9 L 751.9,301.1 L 715.9,334.9 L 715.9,355.1 L 679.9,355.1 L 661.9,321.4 L 625.9,355.1 L 601.9,314.6 L 559.9,301.1 L 529.9,301.1 L 511.9,294.4 L 499.9,301.1 L 457.9,301.1 L 445.9,314.6 z" />
                            {/* Australia */}
                            <path d="M 817.9,496.9 L 841.9,483.4 L 883.9,483.4 L 925.9,523.9 L 925.9,550.9 L 901.9,577.9 L 817.9,550.9 L 799.9,523.9 L 817.9,496.9 z" />

                            {/* Islands & Details */}
                            {/* UK */}
                            <path d="M 450,230 L 460,225 L 465,240 L 455,245 Z" />
                            {/* Iceland */}
                            <path d="M 420,180 L 435,180 L 430,195 Z" />
                            {/* Madagascar */}
                            <path d="M 590,470 L 610,470 L 600,520 Z" />
                            {/* Japan */}
                            <path d="M 880,260 L 900,270 L 890,300 L 870,290 Z" />
                            {/* New Zealand */}
                            <path d="M 930,580 L 950,570 L 940,610 Z" />
                            {/* Indonesia */}
                            <path d="M 760,400 L 830,410 L 820,430 L 760,420 Z" />
                            <path d="M 850,420 L 900,420 L 900,440 L 850,440 Z" />
                        </g>
                    </svg>
                </div>

                {/* Plot Venues */}
                {venues.map((venue) => {
                    const coords = venueCoordinates[venue.id];
                    if (!coords) return null;

                    return (
                        <Link to={`/destinations/${venue.id}`} key={venue.id} className="absolute group z-10" style={{ top: coords.top, left: coords.left }}>
                            <div className="relative flex items-center justify-center">
                                <span className="w-2 h-2 md:w-3 md:h-3 bg-aman-charcoal rounded-full relative z-10 group-hover:bg-aman-gold transition-colors duration-300 shadow-sm border border-white/50"></span>
                                <span className="absolute w-full h-full bg-aman-charcoal/20 rounded-full animate-ping opacity-0 group-hover:opacity-100"></span>

                                {/* Tooltip */}
                                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white px-3 py-1 shadow-lg border border-aman-charcoal/10 whitespace-nowrap pointer-events-none z-20">
                                    <span className="text-[10px] uppercase tracking-widest text-aman-charcoal font-bold">{venue.name}</span>
                                    <span className="block text-[8px] text-aman-charcoal/50">{venue.location}</span>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

const Destinations = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    // Extract unique categories for filter pills
    const allCategories = ['All', 'Executive', 'Wellness', 'Creative', 'Adventure', 'Culture'];

    const filteredVenues = venuesData.filter(venue => {
        const lowerSearch = searchTerm.toLowerCase();
        const matchesSearch = venue.name.toLowerCase().includes(lowerSearch) ||
            venue.location.toLowerCase().includes(lowerSearch);

        const matchesCategory = activeCategory === 'All' ||
            venue.bestFor.some(cat => cat.includes(activeCategory)) ||
            venue.tier.includes(activeCategory);

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="bg-aman-pearl min-h-screen pt-32 pb-24 px-6 md:px-12">
            <div className="max-w-[1600px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-xs uppercase tracking-[0.2em] text-aman-charcoal/40 block mb-4">Our Global Canvas</span>
                    <h1 className="text-4xl md:text-6xl font-serif text-aman-charcoal mb-8">Partner Venues</h1>

                    {/* Search & Filter Controls */}
                    <div className="max-w-4xl mx-auto space-y-8">
                        {/* Search Bar */}
                        <div className="relative max-w-lg mx-auto">
                            <input
                                type="text"
                                placeholder="Search by name or location..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-white/50 border-b border-aman-charcoal/20 py-3 pl-10 pr-4 text-aman-charcoal focus:outline-none focus:border-aman-gold focus:bg-white transition-all font-serif italic"
                            />
                            <Search className="absolute left-0 top-1/2 transform -translate-y-1/2 text-aman-charcoal/40 w-5 h-5" />
                            {searchTerm && (
                                <button onClick={() => setSearchTerm('')} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-aman-charcoal/40 hover:text-aman-charcoal">
                                    <X size={16} />
                                </button>
                            )}
                        </div>

                        {/* Category Pills */}
                        <div className="flex flex-wrap justify-center gap-3">
                            {allCategories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-6 py-2 text-[10px] uppercase tracking-widest border transition-all duration-300 ${activeCategory === cat
                                        ? 'border-aman-charcoal bg-aman-charcoal text-white'
                                        : 'border-aman-charcoal/20 text-aman-charcoal/60 hover:border-aman-charcoal hover:text-aman-charcoal'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Stylized Map */}
                <StylizedMap venues={filteredVenues} />

                {/* Grid */}
                {filteredVenues.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
                        {filteredVenues.map((venue, index) => (
                            <Link to={`/destinations/${venue.id}`} key={venue.id}>
                                <DestinationCard
                                    title={venue.name}
                                    location={venue.location}
                                    description={venue.tagline}
                                    image={venue.images[0]}
                                />
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 text-aman-charcoal/40">
                        <p className="text-lg font-serif italic">No venues found matching your criteria.</p>
                        <button
                            onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}
                            className="mt-4 text-xs uppercase tracking-widest border-b border-aman-charcoal/40 hover:text-aman-gold hover:border-aman-gold transition-colors"
                        >
                            Reset Filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Destinations;
