import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import BookingModal from './BookingModal';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // If not Home, force "scrolled" style (solid bg, dark text) OR transparent with dark text?
    // Let's stick to the requested "background colour is too similar" -> probably invalidates white text.
    // We will use dark text on non-home pages when not scrolled, and transparent bg if at top.

    const isTransparent = isHome && !isScrolled;

    const navClasses = `fixed w-full z-50 transition-all duration-500 ${!isTransparent ? 'bg-aman-pearl/95 backdrop-blur-sm py-4 shadow-sm' : 'bg-transparent py-8'}`;

    // Text Color: White ONLY if Home AND Not Scrolled. Else Charcoal.
    const textColorClass = isTransparent ? 'text-white' : 'text-aman-charcoal';
    const borderColorClass = isTransparent ? 'border-white' : 'border-aman-charcoal';

    const linkClasses = `text-sm uppercase tracking-widest hover:text-aman-gold transition-colors duration-300 ${textColorClass}`;

    return (
        <>
            <nav className={navClasses}>
                <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="group">
                        <div className={`transition-colors duration-500 ${textColorClass}`}>
                            <Logo isScrolled={!isTransparent} className="transform scale-75 md:scale-100" />
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link to="/about" className={linkClasses}>About</Link>
                        <Link to="/destinations" className={linkClasses}>Venues</Link>
                        <Link to="/retreats" className={linkClasses}>Retreats</Link>
                        <button onClick={() => setIsBookingOpen(true)} className={linkClasses}>Start a Project</button>
                        <Link to="/journal" className={linkClasses}>Journal</Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <div className={textColorClass}>
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </div>
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-aman-pearl/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
                        >
                            <div className="flex flex-col items-center space-y-8 mt-24">
                                <Link to="/about" className="text-2xl font-serif text-aman-charcoal" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                                <Link to="/destinations" className="text-2xl font-serif text-aman-charcoal" onClick={() => setIsMobileMenuOpen(false)}>Venues</Link>
                                <Link to="/retreats" className="text-2xl font-serif text-aman-charcoal" onClick={() => setIsMobileMenuOpen(false)}>Retreats</Link>
                                <button onClick={() => { setIsBookingOpen(true); setIsMobileMenuOpen(false); }} className="text-2xl font-serif text-aman-charcoal">Start a Project</button>
                                <Link to="/journal" className="text-2xl font-serif text-aman-charcoal" onClick={() => setIsMobileMenuOpen(false)}>Journal</Link>
                            </div>
                            <button
                                onClick={() => { setIsMobileMenuOpen(false); setIsBookingOpen(true); }}
                                className="mt-8 border border-aman-charcoal px-8 py-3 text-xs uppercase tracking-widest hover:bg-aman-charcoal hover:text-white transition-all"
                            >
                                Enquire Now
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </>
    );
};

export default Navbar;
