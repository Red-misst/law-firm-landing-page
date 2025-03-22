"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    
    // Track scroll position for scroll-based effects
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* Header section */}
            <div className={`fixed top-0 left-0 right-0 z-30 w-full py-4 flex justify-between items-center px-4 sm:px-6 lg:px-16 transition-all duration-300 ${scrollPosition > 50 ? 'bg-black/80 backdrop-blur-sm shadow-lg' : ''}`}>
                {/* Logo/Company name */}
                <div className="text-white font-bold text-xl sm:text-2xl">
                  <Link href="/" className="flex items-center">
                    <span className="text-white hover:text-gray-300 transition-colors">RUTTO & PATNERS</span>
                  </Link>
                </div>

                {/* Mobile menu button */}
                <button 
                    className="md:hidden text-white focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>

                {/* Desktop Navigation links */}
                <nav className="hidden md:flex items-center space-x-6">
                  <Link href="#about" className="text-white hover:text-gray-300 px-2 py-1 transition-colors">About Us</Link>
                  <Link href="#services" className="text-white hover:text-gray-300 px-2 py-1 transition-colors">Practice Areas</Link>
                  <Link href="#team" className="text-white hover:text-gray-300 px-2 py-1 transition-colors">Our Team</Link>

                  <Link href="#contact" className="text-white border border-white hover:bg-white hover:text-black px-4 py-2 transition-colors ml-2">Contact</Link>
                </nav>
            </div>

            {/* Mobile dropdown menu */}
            <div 
                className={`fixed top-16 inset-x-0 z-20 bg-black/95 backdrop-blur-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
            >
                <div className="flex flex-col space-y-3 p-6">
                    <Link href="#about" className="text-white hover:text-gray-300 py-3 border-b border-gray-700 transition-colors" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                    <Link href="#services" className="text-white hover:text-gray-300 py-3 border-b border-gray-700 transition-colors" onClick={() => setIsMenuOpen(false)}>Practice Areas</Link>
                    <Link href="#team" className="text-white hover:text-gray-300 py-3 border-b border-gray-700 transition-colors" onClick={() => setIsMenuOpen(false)}>Our Team</Link>
                    <Link href="#contact" className="text-white hover:bg-white hover:text-black py-3 border border-white text-center mt-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                </div>
            </div>
        </>
    );
}

export default Header;
