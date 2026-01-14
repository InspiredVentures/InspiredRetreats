import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Globe, Heart, Shield } from 'lucide-react';
import teamImg from '../assets/images/about_team.png';

const About = () => {
    return (
        <div className="bg-aman-pearl min-h-screen pt-32 pb-24">
            {/* Header */}
            <div className="max-w-4xl mx-auto px-6 text-center mb-24">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-xs uppercase tracking-[0.2em] text-aman-charcoal/40 block mb-6"
                >
                    Part of the Inspired Ventures Family
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-serif text-aman-charcoal leading-tight"
                >
                    The Freedom to<br /> Connect
                </motion.h1>
            </div>

            {/* Main Narrative */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
                <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                        src={teamImg}
                        alt="The Inspired Team"
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000"
                    />
                </div>
                <div className="space-y-8">
                    <h3 className="text-2xl font-serif text-aman-charcoal">Engage your community. Grow your business.</h3>
                    <div className="space-y-6 text-aman-charcoal/70 leading-relaxed font-sans text-sm md:text-base">
                        <p>
                            At <strong>Inspired Retreats</strong>, we believe travel is the most powerful catalyst for connection.
                            As a partner brand of <strong>Inspired Ventures</strong>, we bring decades of global expertise to one singular mission:
                            helping you build deeper bonds with your community.
                        </p>
                        <p>
                            We are not just logistics experts; we are growth partners. Whether you are a wellness leader,
                            a corporate executive, or a creative visionary, we design bespoke travel experiences that
                            elevate your brand and offer life-changing value to your audience.
                        </p>
                        <p>
                            You bring the vision and the people. We handle the rest. from the first spark of an idea
                            to the final safe return home. This is your stage; we just set the lights.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Values Grid */}
            <section className="bg-white py-24 px-6 md:px-12 mb-24">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif text-aman-charcoal mb-4">The Inspired Promise</h2>
                        <p className="text-aman-charcoal/60 max-w-2xl mx-auto">Why world-class leaders trust us with their communities.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6 bg-aman-pearl/30">
                            <Globe className="w-8 h-8 mx-auto mb-4 text-aman-charcoal opacity-70" strokeWidth={1} />
                            <h4 className="text-lg font-serif mb-2">Global Reach</h4>
                            <p className="text-xs text-aman-charcoal/60 leading-relaxed">Access to a network of ground partners in over 50 countries, ensuring authentic, safe, and unique experiences.</p>
                        </div>
                        <div className="text-center p-6 bg-aman-pearl/30">
                            <Users className="w-8 h-8 mx-auto mb-4 text-aman-charcoal opacity-70" strokeWidth={1} />
                            <h4 className="text-lg font-serif mb-2">Community First</h4>
                            <p className="text-xs text-aman-charcoal/60 leading-relaxed">Every itinerary is crafted to foster interaction, vulnerability, and shared growth among your guests.</p>
                        </div>
                        <div className="text-center p-6 bg-aman-pearl/30">
                            <Shield className="w-8 h-8 mx-auto mb-4 text-aman-charcoal opacity-70" strokeWidth={1} />
                            <h4 className="text-lg font-serif mb-2">Risk Managed</h4>
                            <p className="text-xs text-aman-charcoal/60 leading-relaxed">Comprehensive insurance, health & safety auditing, and 24/7 support. Peace of mind is our baseline.</p>
                        </div>
                        <div className="text-center p-6 bg-aman-pearl/30">
                            <Heart className="w-8 h-8 mx-auto mb-4 text-aman-charcoal opacity-70" strokeWidth={1} />
                            <h4 className="text-lg font-serif mb-2">Legacy & Impact</h4>
                            <p className="text-xs text-aman-charcoal/60 leading-relaxed">We build trips that leave a positive footprint on both the traveler and the local destination.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="text-center max-w-2xl mx-auto px-6 mb-24">
                <h3 className="text-3xl font-serif text-aman-charcoal mb-6">Ready to lead your own retreat?</h3>
                <p className="text-aman-charcoal/60 mb-8">
                    Join the ranks of leaders who have transformed their businesses through travel.
                </p>
                <Link to="/contact" className="inline-block bg-aman-charcoal text-white px-10 py-4 text-xs uppercase tracking-widest hover:bg-aman-gold transition-colors duration-300">
                    Design Your Journey
                </Link>
            </section>
        </div>
    );
};

export default About;
