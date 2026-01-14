import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { journalData } from '../data/journal';

const Journal = () => {
    return (
        <div className="bg-aman-pearl min-h-screen pt-32 pb-24 px-6 md:px-12">
            <div className="max-w-[1600px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="text-xs uppercase tracking-[0.2em] text-aman-charcoal/40 block mb-4">The Journal</span>
                    <h1 className="text-4xl md:text-6xl font-serif text-aman-charcoal">Stories & <br />Insights</h1>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {journalData.map((post, index) => (
                        <Link to={`/journal/${post.id}`} key={index} className="group cursor-pointer">
                            <div className="overflow-hidden mb-6 aspect-[4/3]">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="space-y-4">
                                <span className="text-xs uppercase tracking-[0.2em] text-aman-charcoal/40">{post.category}</span>
                                <h3 className="text-2xl font-serif text-aman-charcoal group-hover:text-aman-gold transition-colors duration-300">
                                    {post.title}
                                </h3>
                                <p className="text-aman-charcoal/60 text-sm leading-relaxed line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <span className="text-xs text-aman-charcoal/40 border-b border-transparent group-hover:border-aman-gold transition-all inline-block pb-1">Read Story</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Journal;
