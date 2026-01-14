import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import DestinationCard from '../components/DestinationCard';
import JournalSection from '../components/JournalSection';
import Testimonials from '../components/Testimonials';
import { motion } from 'framer-motion';
import safariImg from '../assets/images/exp_safari.png';
import japanImg from '../assets/images/exp_japan.png';
import arcticImg from '../assets/images/exp_arctic.png';

const Home = () => {
    return (
        <div className="bg-aman-pearl">
            <Hero />

            {/* Introduction Section */}
            <section className="py-24 md:py-40 px-6 max-w-4xl mx-auto text-center">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-aman-charcoal/60 text-xs uppercase tracking-[0.2em] block mb-8"
                >
                    Our Service
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-5xl font-serif leading-tight text-aman-charcoal mb-10"
                >
                    We create the stage. <br /> You lead the performance.
                </motion.h2>
                <p className="font-sans text-aman-charcoal/70 leading-relaxed text-sm md:text-base max-w-2xl mx-auto">
                    Inspired Retreats partners with visionary leaders and companies to craft bespoke travel experiences.
                    We curate the venue, logistics, and atmosphere, allowing you to focus on connecting with your community.
                </p>
            </section>

            {/* Featured Section (Placeholder for Grid) */}
            {/* Destinantions Section */}
            <section className="px-6 md:px-12 pb-24 max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    <Link to="/retreats/conservationists-asana">
                        <DestinationCard
                            title="The Conservationist's Asana"
                            location="Kruger, South Africa"
                            description="A symbiotic journey of yoga andtracking, supporting the Endangered Wildlife Trust."
                            image={safariImg}
                        />
                    </Link>
                    <Link to="/retreats/zen-and-creation">
                        <DestinationCard
                            title="Zen & Creation"
                            location="Kyoto, Japan"
                            description="Private temple stays dedicated to creative writing and tea ceremony arts."
                            image={japanImg}
                        />
                    </Link>
                    <Link to="/retreats/arctic-silence">
                        <DestinationCard
                            title="Arctic Silence"
                            location="Svalbard, Norway"
                            description="Expedition mindfulness and glaciology under the midnight sun."
                            image={arcticImg}
                        />
                    </Link>
                </div>
            </section>

            {/* Testimonials */}
            <Testimonials />

            {/* Journal Section */}
            <JournalSection />
        </div>
    );
}

export default Home;
