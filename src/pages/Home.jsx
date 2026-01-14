import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { retreat } from '../data/retreats';
import { motion, useScroll, useTransform } from 'framer-motion';

// Animation variants for consistent reuse
const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const Home = () => {
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 500], [0, 150]); // Parallax
    const textY = useTransform(scrollY, [0, 500], [0, 50]); // Text Moves slower

    return (
        <Layout>
            {/* 1. Immersive Hero Section */}
            <div style={{
                position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
                overflow: 'hidden', color: 'var(--surface-color)', textAlign: 'center', marginTop: '-100px', // Compensate for header
                zIndex: 1 // Ensure this container is above base
            }}>
                <motion.div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', // Changed to 100% to avoid overflow issues for now
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${retreat.heroImage})`,
                    backgroundSize: 'cover', backgroundPosition: 'center',
                    zIndex: 0, // Explicitly 0 (base of this stack)
                    y: heroY
                }} />

                <motion.div
                    className="container"
                    style={{ position: 'relative', zIndex: 10, y: textY }} // Explicitly 10 (above background)
                    initial="hidden" animate="visible" variants={staggerContainer}
                >
                    <motion.p variants={fadeInUp} style={{ textTransform: 'uppercase', letterSpacing: '0.4em', fontSize: '0.9rem', marginBottom: 'var(--spacing-md)' }}>
                        {retreat.dates}
                    </motion.p>
                    <motion.h1 variants={fadeInUp} style={{ fontSize: 'clamp(3.5rem, 6vw, 6rem)', marginBottom: 'var(--spacing-md)', fontWeight: '400', lineHeight: 1.1 }}>
                        {retreat.title}
                    </motion.h1>
                    <motion.div variants={fadeInUp}>
                        <span style={{ display: 'block', height: '1px', width: '80px', backgroundColor: 'currentColor', margin: '2rem auto' }}></span>
                    </motion.div>
                    <motion.p variants={fadeInUp} style={{ fontSize: '1.4rem', marginBottom: 'var(--spacing-lg)', fontWeight: '300', letterSpacing: '1px' }}>
                        {retreat.subtitle}
                    </motion.p>
                    <motion.div variants={fadeInUp}>
                        <a href={retreat.bookingUrl} className="btn" style={{
                            backgroundColor: 'var(--surface-color)', color: 'var(--primary-color)',
                            padding: '1.2rem 3rem', fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase',
                            border: 'none', cursor: 'pointer'
                        }}>Explore the Sanctuary</a>
                    </motion.div>
                </motion.div>
            </div>

            {/* 2. Intro / The Vibe (Pure Text - Aman Style) */}
            <section style={{ padding: '6rem 0', backgroundColor: 'var(--surface-color)', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                    >
                        <motion.h2 variants={fadeInUp} style={{
                            fontSize: '2.2rem', marginBottom: 'var(--spacing-lg)', fontWeight: '400', letterSpacing: '1px'
                        }}>{retreat.introSection.heading}</motion.h2>
                        <motion.p variants={fadeInUp} style={{
                            fontSize: '1.1rem', lineHeight: '2', color: 'var(--text-secondary)', fontFamily: 'var(--body-font)'
                        }}>{retreat.introSection.text}</motion.p>
                    </motion.div>
                </div>
            </section>

            {/* 3. Discover (Grid of Vertical Cards - Aman Style) */}
            <section style={{ paddingBottom: '6rem', backgroundColor: 'var(--surface-color)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Suites", img: retreat.accommodation.image, desc: "Private sanctuaries with Dalem Jiwo suites" },
                            { title: "Wellness", img: retreat.program[1].image, desc: "Javanese healing rituals" },
                            { title: "Dining", img: retreat.program[2].image, desc: "Java's rich culinary heritage" }
                        ].map((card, c) => (
                            <motion.div
                                key={c}
                                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: c * 0.2 }} viewport={{ once: true }}
                                style={{ cursor: 'pointer' }}
                            >
                                <div style={{ height: '500px', overflow: 'hidden', marginBottom: '1.5rem' }}>
                                    <img src={card.img} alt={card.title} style={{
                                        width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease'
                                    }}
                                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                    />
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: '400', letterSpacing: '1px' }}>{card.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. The Program (Alternating) - Kept for detailed info, but styled more minimally */}
            <div style={{ backgroundColor: 'var(--background-color)' }}>
                {retreat.program.map((item, idx) => (
                    <section key={idx} style={{ padding: 'var(--spacing-xl) 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                        <div className="container">
                            <div style={{
                                display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 'var(--spacing-xl)', alignItems: 'center',
                                direction: item.position === 'left' ? 'rtl' : 'ltr'
                            }}>
                                <motion.div
                                    style={{ direction: 'ltr' }}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <img src={item.image} alt={item.title} style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }} />
                                </motion.div>

                                <motion.div
                                    style={{ direction: 'ltr', padding: 'var(--spacing-lg)' }}
                                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                                >
                                    <motion.h3 variants={fadeInUp} style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)' }}>{item.title}</motion.h3>
                                    <motion.p variants={fadeInUp} style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>{item.text}</motion.p>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            {/* 4. Inclusions */}
            <section style={{ padding: 'var(--spacing-xl) 0', backgroundColor: 'var(--primary-color)', color: 'var(--surface-color)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-xl)', color: 'var(--surface-color)' }}
                    >
                        Curated Inclusions
                    </motion.h2>
                    <motion.div
                        className="grid-inclusions"
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-lg)' }}
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                    >
                        {retreat.inclusions.map((inc, i) => (
                            <motion.div key={i} variants={fadeInUp} style={{ padding: 'var(--spacing-md)' }}>
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>{inc.icon}</div>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: 'var(--spacing-xs)', textTransform: 'uppercase', letterSpacing: '1px' }}>{inc.title}</h4>
                                <p style={{ fontSize: '0.95rem', opacity: 0.8 }}>{inc.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 5. Accommodation */}
            <section style={{ padding: 'var(--spacing-xl) 0', backgroundColor: 'var(--background-color)' }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: '900px' }}>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                        <motion.h2 variants={fadeInUp} style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>{retreat.accommodation.title}</motion.h2>
                        <motion.p variants={fadeInUp} style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: 'var(--spacing-lg)' }}>{retreat.accommodation.description}</motion.p>
                        <motion.img
                            variants={fadeInUp}
                            src={retreat.accommodation.image} alt="Suite"
                            style={{ width: '100%', boxShadow: 'var(--shadow-lg)', borderRadius: 'var(--radius-sm)' }}
                        />
                    </motion.div>
                </div>
            </section>

            {/* 5a. Visual Break */}
            <div style={{
                backgroundImage: `url(${retreat.breakImage})`,
                backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center',
                height: '60vh', width: '100%',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
                    style={{
                        color: 'white', fontSize: '3rem', textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                        textAlign: 'center', padding: '0 var(--spacing-md)'
                    }}
                >
                    Reconnect with the Earth
                </motion.h2>
            </div>

            {/* 6. Hosts & Gallery */}
            <section style={{ padding: 'var(--spacing-xl) 0', backgroundColor: 'var(--surface-color)' }}>
                <div className="container">
                    <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: 'var(--spacing-xl)' }}>Your Guides</motion.h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-xl)' }}>
                        {retreat.hosts.map((host, h) => (
                            <motion.div
                                key={h}
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: h * 0.2 }} viewport={{ once: true }}
                                style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}
                            >
                                <img src={host.image} alt={host.name} style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover' }} />
                                <div>
                                    <h4 style={{ fontSize: '1.4rem', margin: 0 }}>{host.name}</h4>
                                    <p style={{ color: 'var(--primary-color)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: 'var(--spacing-xs)' }}>{host.role}</p>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{host.bio}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--spacing-sm)' }}>
                        {retreat.images.map((img, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: idx * 0.05 }} viewport={{ once: true }}
                                style={{ height: '250px', overflow: 'hidden', borderRadius: 'var(--radius-sm)' }}
                            >
                                <img src={img} alt="Gallery" style={{
                                    width: '100%', height: '100%', objectFit: 'cover',
                                    transition: 'transform 0.5s ease', cursor: 'pointer'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Testimonials */}
            <section style={{ padding: 'var(--spacing-xl) 0', backgroundColor: 'var(--secondary-color)', color: 'var(--surface-color)', textAlign: 'center' }}>
                <motion.div
                    className="container" style={{ maxWidth: '800px' }}
                    initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                >
                    <div style={{ fontSize: '4rem', lineHeight: 1, opacity: 0.3, marginBottom: 'var(--spacing-md)' }}>“</div>
                    <p style={{ fontSize: '1.8rem', fontStyle: 'italic', marginBottom: 'var(--spacing-md)', lineHeight: '1.4' }}>{retreat.testimonials[0].text}</p>
                    <p style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>— {retreat.testimonials[0].author}</p>
                </motion.div>
            </section>

            {/* 8. Final CTA */}
            <div style={{
                textAlign: 'center', padding: 'var(--spacing-xl) 0',
                backgroundColor: 'var(--primary-color)', color: 'var(--surface-color)'
            }}>
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>Begin Your Journey</h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: 'var(--spacing-lg)' }}>{retreat.price}</p>
                    <a href={retreat.bookingUrl} className="btn" style={{
                        backgroundColor: 'var(--surface-color)', color: 'var(--primary-color)',
                        padding: '1.2rem 3rem', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px'
                    }}>Book Now</a>
                </motion.div>
            </div>
        </Layout>
    );
};

export default Home;
