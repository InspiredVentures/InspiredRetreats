import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-aman-charcoal text-aman-pearl py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">

                {/* Brand */}
                <div>
                    <h4 className="text-2xl font-serif tracking-widest mb-6">INSPIRED RETREATS</h4>
                    <p className="text-white/50 text-sm max-w-xs leading-relaxed">
                        Curating the world's most serene escapes. <br />
                        Designed for the modern seeker.
                    </p>
                </div>

                {/* Links */}
                <div className="flex gap-16 text-sm tracking-wide">
                    <div className="flex flex-col gap-4">
                        <span className="text-white/40 text-xs uppercase mb-2">Explore</span>
                        <Link to="/retreats" className="hover:text-aman-stone transition-colors">Retreats</Link>
                        <Link to="/destinations" className="hover:text-aman-stone transition-colors">Venues</Link>
                        <Link to="/journal" className="hover:text-aman-stone transition-colors">Journal</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-white/40 text-xs uppercase mb-2">Company</span>
                        <Link to="/about" className="hover:text-aman-stone transition-colors">About Us</Link>
                        <Link to="/contact" className="hover:text-aman-stone transition-colors">Contact</Link>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="w-full md:w-auto">
                    <span className="text-white/40 text-xs uppercase mb-4 block">Newsletter</span>
                    <div className="flex border-b border-white/20 pb-2">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="bg-transparent border-none outline-none text-white placeholder-white/30 w-full md:w-64"
                        />
                        <button className="text-xs uppercase tracking-widest hover:text-aman-stone">Subscribe</button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between text-xs text-white/30">
                <div className="flex gap-6 mb-4 md:mb-0">
                    <p>&copy; 2026 Inspired Retreats. All rights reserved.</p>
                </div>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <Link to="/privacy" className="hover:text-aman-stone transition-colors">Privacy</Link>
                    <Link to="/terms" className="hover:text-aman-stone transition-colors">Terms</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
