"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from './Header';

function Banner() {
    const [scrollPosition, setScrollPosition] = useState(0);
    
    // Track scroll position for scroll-based effects
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dcdivbkwd/image/upload/v1742618552/lawfirm/l3jhrhs3pttawmppbfwr.jpg')`,
            transform: `scale(${1 + scrollPosition * 0.0005})`,
          }}
        ></div>
        
        {/* Elegant gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        
        {/* Header component */}
        <Header />
        
        {/* Content */}
        <motion.div 
            className="relative h-full flex flex-col justify-center items-start text-white px-4 sm:px-6 lg:px-16 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-left leading-tight">
            <motion.span 
                className="block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                Excellence in
            </motion.span>
            <motion.span 
                className="block mt-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                Legal Practice
            </motion.span>
          </h1>
          
          <motion.p 
            className="mt-6 text-lg sm:text-xl md:text-2xl max-w-3xl text-left text-gray-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Dedicated to providing exceptional legal representation with integrity and professionalism
          </motion.p>
          
          <motion.div 
            className="mt-16 flex flex-col items-center lg:items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* Bouncing arrow animation */}
            <motion.div 
                className="text-5xl text-white cursor-pointer"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 13l5 5 5-5"></path>
                <path d="M7 6l5 5 5-5"></path>
              </svg>
            </motion.div>
            
            {/* Line */}
            <div className="w-24 h-px bg-white mt-4"></div>
            
            <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-sm font-light">
              <Link href="#services" className="text-white hover:text-gray-300 hover:underline transition-colors">Corporate Law</Link>
              <Link href="#services" className="text-white hover:text-gray-300 hover:underline transition-colors">Litigation</Link>
              <Link href="#services" className="text-white hover:text-gray-300 hover:underline transition-colors">Family Law</Link>
              <Link href="#services" className="text-white hover:text-gray-300 hover:underline transition-colors">Real Estate</Link>
              <Link href="#contact" className="text-white hover:text-gray-300 hover:underline transition-colors">Contact</Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    );
}

export default Banner;