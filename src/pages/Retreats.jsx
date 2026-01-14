import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DestinationCard from '../components/DestinationCard';
import { retreatsData } from '../data/retreats';

const Retreats = () => {
    return (
        <div className="bg-aman-pearl min-h-screen pt-32 pb-24 px-6 md:px-12">
            <div className="max-w-[1600px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="text-xs uppercase tracking-[0.2em] text-aman-charcoal/40 block mb-4">Our Craft</span>
                    <h1 className="text-4xl md:text-6xl font-serif text-aman-charcoal">Signature <br />Concept Journeys</h1>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
                    {retreatsData.map((retreat, index) => (
                        <Link to={`/retreats/${retreat.id}`} key={index}>
                            <DestinationCard
                                title={retreat.title}
                                location={retreat.location}
                                description={retreat.description}
                                image={retreat.image}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Retreats;
