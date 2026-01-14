import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { journalData } from '../data/journal';

const JournalSection = () => {
    // Take the first 3 articles
    const articles = journalData.slice(0, 3);

    return (
        <section className="py-24 bg-white px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <span className="text-xs uppercase tracking-[0.2em] text-aman-gold mb-2 block">The Journal</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-aman-charcoal">Stories from the Sanctuary</h2>
                    </div>
                    <Link to="/journal" className="hidden md:block text-xs uppercase tracking-widest border-b border-aman-charcoal pb-1 hover:text-aman-gold hover:border-aman-gold transition-colors">
                        Read All Stories
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
                    {articles.map((article, index) => (
                        <Link to={`/journal/${article.id}`} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.8 }}
                                className="group cursor-pointer"
                            >
                                <div className="overflow-hidden aspect-[3/2] mb-6">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-aman-charcoal/50 mb-3">
                                    <span>{article.category}</span>
                                    <span className="w-1 h-1 bg-aman-charcoal/30 rounded-full" />
                                    <span>{article.date}</span>
                                </div>
                                <h3 className="text-xl font-serif text-aman-charcoal group-hover:text-aman-gold transition-colors duration-300">
                                    {article.title}
                                </h3>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link to="/journal" className="text-xs uppercase tracking-widest border-b border-aman-charcoal pb-1">
                        Read All Stories
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default JournalSection;
