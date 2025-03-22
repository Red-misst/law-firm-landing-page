"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function ContactForm() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ email, phone });
    setSubmitted(true);
    // Reset form after submission
    setEmail('');
    setPhone('');

    // Return to form view after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id='contact' className="relative w-full py-16 md:py-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://res.cloudinary.com/dcdivbkwd/image/upload/v1734343071/xau-usd%20blog/sjoghh2ht9h4oddykcbu.jpg" 
          alt="Contact Background" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gray-900/70" />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="hidden md:flex items-center justify-center">
          {/* Empty space on the left for large screens */}
        </div>
        
        <div className="bg-gray-800/40 backdrop-blur-sm p-8 md:p-10 rounded-lg shadow-xl border border-gray-500/30">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Get in touch with our legal experts. We&apos;re here to help with your legal needs.
            </p>
          </div>

          <div className="grid gap-8">
            <div className="space-y-6 text-white mb-10">
              <div className="flex items-start space-x-4">
                <div className="text-gray-300 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-sm text-gray-300">Email</p>
                  <a href="mailto:contact@lawfirmname.com" className="text-white hover:underline">ruttopatnerslaw@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-gray-300 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-sm text-gray-300">Phone</p>
                  <a href="tel:+254722886287" className="text-white hover:underline">(254) 7228-86287</a>
                  <br/>
                  <a href="tel:+254728766890" className="text-white hover:underline mt-3">(254) 7287-66890</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-gray-300 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-sm text-gray-300">Address</p>
                  <address className="not-italic">
                    Kiren Arcade<br />
                    3rd floor, room 25<br />
                   Ronald Ngala Street, Eldoret
                  </address>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-gray-300 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-sm text-gray-300">Business Hours</p>
                  <p>Monday - Friday: 9AM - 5PM</p>
                </div>
              </div>
            </div>
            
            <div>
              {submitted ? (
                <div className="text-center py-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300 mx-auto mb-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <h3 className="text-xl font-semibold text-white mb-2">Thank You!</h3>
                  <p className="text-white/80">We&apos;ve received your message and will contact you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-300/50 text-white placeholder-gray-300/60 focus:outline-none focus:border-white focus:ring-0"
                      placeholder="name@gmail.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-300/50 text-white placeholder-gray-300/60 focus:outline-none focus:border-white focus:ring-0"
                      placeholder="(254) 7123-456789"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gray-700 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-md transition duration-300 shadow-md"
                  >
                    Contact Us
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
