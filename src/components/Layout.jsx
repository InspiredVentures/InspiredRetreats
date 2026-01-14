import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Layout = ({ children }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <header style={{
                position: 'fixed',
                top: 0,
                width: '100%',
                zIndex: 1000,
                transition: 'all 0.4s ease',
                backgroundColor: scrolled ? 'var(--surface-color)' : 'transparent',
                boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
                padding: scrolled ? 'var(--spacing-sm) 0' : 'var(--spacing-md) 0',
                color: scrolled ? 'var(--text-primary)' : 'var(--surface-color)', // White text on transparent, Dark on solid
            }}>
                <div className="container" style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto 1fr',
                    alignItems: 'center',
                    maxWidth: '1200px', // Constrain width to keep elements closer
                    margin: '0 auto',     // Center the grid
                    padding: '0 var(--spacing-md)' // Ensure interaction padding
                }}>
                    {/* Left Nav */}
                    <nav style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                        {['Resort', 'Accommodation', 'Wellness', 'Experiences'].map((item) => (
                            <Link key={item} to="/" style={{
                                color: 'currentColor', fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase',
                                fontWeight: '500', opacity: 0.9
                            }}>{item}</Link>
                        ))}
                    </nav>

                    {/* Center Logo */}
                    <Link to="/" style={{
                        display: 'flex', flexDirection: 'column', alignItems: 'center',
                        color: 'currentColor', textDecoration: 'none'
                    }}>
                        <Logo color="currentColor" width={50} height={50} />
                        <span style={{
                            marginTop: '8px', fontFamily: 'var(--heading-font)', fontSize: '1.2rem',
                            letterSpacing: '3px', textTransform: 'uppercase'
                        }}>Amanjiwo</span>
                    </Link>

                    {/* Right Action */}
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <button style={{
                            backgroundColor: 'transparent',
                            border: '1px solid currentColor',
                            color: 'currentColor',
                            padding: '0.6rem 2rem',
                            borderRadius: '0', // Square buttons are more Aman
                            cursor: 'pointer',
                            textTransform: 'uppercase',
                            fontSize: '0.75rem',
                            letterSpacing: '2px',
                            transition: 'all 0.3s ease'
                        }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = 'currentColor';
                                e.target.style.color = scrolled ? 'var(--surface-color)' : 'var(--primary-color)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'transparent';
                                e.target.style.color = 'currentColor';
                            }}
                        >
                            Book Your Stay
                        </button>
                    </div>
                </div>
            </header>

            <main style={{ flex: 1 }}>
                {children}
            </main>

            <footer style={{
                backgroundColor: 'var(--primary-color)',
                color: 'var(--surface-color)',
                padding: 'var(--spacing-xl) 0',
            }}>
                <div className="container" style={{ textAlign: 'center', opacity: 0.8 }}>
                    <Logo color="var(--surface-color)" width={60} height={60} />
                    <p style={{ marginTop: 'var(--spacing-md)', fontSize: '0.9rem', letterSpacing: '1px' }}>&copy; {new Date().getFullYear()} White Label Retreats. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
