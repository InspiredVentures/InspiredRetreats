import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className="bg-aman-pearl min-h-screen pt-32 pb-24 px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-serif text-aman-charcoal mb-6"
                >
                    Begin Your Journey
                </motion.h1>
                <p className="text-aman-charcoal/70 text-lg leading-relaxed max-w-2xl mx-auto">
                    Whether you are a corporate leader seeking to galvanize your team or a wellness pioneer looking to expand your community, we are ready to design your legacy.
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                {/* Contact Info */}
                <div className="space-y-12">
                    <div>
                        <h3 className="text-xl font-serif text-aman-charcoal mb-4">Global Studio</h3>
                        <p className="text-aman-charcoal/60 leading-relaxed font-sans">
                            London | New York | Singapore<br />
                            <span className="text-sm italic opacity-70">By appointment only</span>
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-serif text-aman-charcoal mb-4">Direct Inquiries</h3>
                        <p className="text-aman-charcoal/60 leading-relaxed font-sans mb-2">
                            <span className="block text-xs uppercase tracking-widest text-aman-charcoal/40 mb-1">Partnerships</span>
                            <a href="mailto:partners@inspiredretreats.com" className="hover:text-aman-gold transition-colors">partners@inspiredretreats.com</a>
                        </p>
                        <p className="text-aman-charcoal/60 leading-relaxed font-sans">
                            <span className="block text-xs uppercase tracking-widest text-aman-charcoal/40 mb-1">General</span>
                            <a href="mailto:hello@inspiredretreats.com" className="hover:text-aman-gold transition-colors">hello@inspiredretreats.com</a>
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-serif text-aman-charcoal mb-4">Connect</h3>
                        <div className="flex space-x-6 text-aman-charcoal/60">
                            <a href="#" className="hover:text-aman-gold transition-colors">LinkedIn</a>
                            <a href="#" className="hover:text-aman-gold transition-colors">Instagram</a>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-white p-8 md:p-12 shadow-sm border border-aman-charcoal/5">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-aman-charcoal/60">First Name</label>
                                <input type="text" className="w-full bg-aman-pearl/30 border-b border-aman-charcoal/20 p-2 focus:border-aman-gold outline-none transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-aman-charcoal/60">Last Name</label>
                                <input type="text" className="w-full bg-aman-pearl/30 border-b border-aman-charcoal/20 p-2 focus:border-aman-gold outline-none transition-colors" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-aman-charcoal/60">Email Address</label>
                            <input type="email" className="w-full bg-aman-pearl/30 border-b border-aman-charcoal/20 p-2 focus:border-aman-gold outline-none transition-colors" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-aman-charcoal/60">Company / Organization</label>
                            <input type="text" className="w-full bg-aman-pearl/30 border-b border-aman-charcoal/20 p-2 focus:border-aman-gold outline-none transition-colors" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-aman-charcoal/60">Vision / Message</label>
                            <textarea rows="4" className="w-full bg-aman-pearl/30 border-b border-aman-charcoal/20 p-2 focus:border-aman-gold outline-none transition-colors"></textarea>
                        </div>

                        <button type="submit" className="w-full bg-aman-charcoal text-white py-4 text-xs uppercase tracking-widest hover:bg-aman-gold transition-colors duration-300">
                            Submit Inquiry
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
