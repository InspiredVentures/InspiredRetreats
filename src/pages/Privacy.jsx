import { motion } from 'framer-motion';

const Privacy = () => {
    return (
        <div className="bg-aman-pearl min-h-screen pt-32 pb-24 px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-serif text-aman-charcoal mb-12"
                >
                    Privacy Policy
                </motion.h1>
                <div className="space-y-8 text-aman-charcoal/70 leading-relaxed font-sans">
                    <p>Last updated: January 2026</p>
                    <p>
                        This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                    </p>
                    <h3 className="text-xl font-serif text-aman-charcoal mt-8 mb-4">Collecting and Using Your Personal Data</h3>
                    <p>
                        While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to: Email address, First name and last name, Phone number.
                    </p>
                    <h3 className="text-xl font-serif text-aman-charcoal mt-8 mb-4">Use of Your Personal Data</h3>
                    <p>
                        The Company may use Personal Data for the following purposes: To provide and maintain our Service, including to monitor the usage of our Service. To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
