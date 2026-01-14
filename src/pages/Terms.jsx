import { motion } from 'framer-motion';

const Terms = () => {
    return (
        <div className="bg-aman-pearl min-h-screen pt-32 pb-24 px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-serif text-aman-charcoal mb-12"
                >
                    Terms of Service
                </motion.h1>
                <div className="space-y-8 text-aman-charcoal/70 leading-relaxed font-sans">
                    <p>Last updated: January 2026</p>
                    <p>
                        Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Inspired Retreats website (the "Service") operated by Inspired Ventures ("us", "we", or "our").
                    </p>
                    <h3 className="text-xl font-serif text-aman-charcoal mt-8 mb-4">1. Conditions of Use</h3>
                    <p>
                        By using this website, you certify that you have read and reviewed this Agreement and that you agree to comply with its terms. If you do not want to be bound by the terms of this Agreement, you are advised to leave the website accordingly. Inspired Ventures only grants use and access of this website, its products, and its services to those who have accepted its terms.
                    </p>
                    <h3 className="text-xl font-serif text-aman-charcoal mt-8 mb-4">2. Intellectual Property</h3>
                    <p>
                        You agree that all materials, products, and services provided on this website are the property of Inspired Ventures, its affiliates, directors, officers, employees, agents, suppliers, or licensors including all copyrights, trade secrets, trademarks, patents, and other intellectual property. You also agree that you will not reproduce or redistribute the [name]'s intellectual property in any way, including electronic, digital, or new trademark registrations.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Terms;
