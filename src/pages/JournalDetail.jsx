import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { journalData } from '../data/journal';

const JournalDetail = () => {
    const { id } = useParams();
    const post = journalData.find(p => p.id === id);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center text-aman-charcoal">
                <div className="text-center">
                    <h2 className="text-2xl font-serif mb-4">Article Not Found</h2>
                    <Link to="/journal" className="text-sm underline hover:text-aman-gold">Back to Journal</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-aman-pearl min-h-screen pt-32 pb-24 px-6 md:px-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto"
            >
                <Link to="/journal" className="inline-flex items-center text-xs uppercase tracking-widest text-aman-charcoal/40 hover:text-aman-gold mb-12 transition-colors">
                    <ArrowLeft size={14} className="mr-2" /> Back to Journal
                </Link>

                <div className="mb-8">
                    <span className="text-xs uppercase tracking-[0.2em] text-aman-gold mb-4 block">{post.category}</span>
                    <h1 className="text-3xl md:text-5xl font-serif text-aman-charcoal mb-6 leading-tight">{post.title}</h1>

                    <div className="flex items-center space-x-6 text-xs text-aman-charcoal/40 uppercase tracking-widest border-b border-aman-charcoal/10 pb-8">
                        <div className="flex items-center">
                            <Calendar size={14} className="mr-2" />
                            {post.date}
                        </div>
                        <div className="flex items-center">
                            <User size={14} className="mr-2" />
                            {post.author}
                        </div>
                    </div>
                </div>

                <div className="relative w-full h-96 mb-12 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>

                <div className="prose prose-lg text-aman-charcoal/70 font-sans leading-relaxed">
                    <p className="text-xl font-serif italic text-aman-charcoal/90 mb-8">{post.excerpt}</p>
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

            </motion.div>
        </div>
    );
};

export default JournalDetail;
