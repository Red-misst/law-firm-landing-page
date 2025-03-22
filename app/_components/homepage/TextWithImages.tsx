"use client"
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const TextWithImages = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Text content on the left */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">Expert Legal Solutions</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Our team of experienced attorneys is dedicated to providing exceptional legal services 
              tailored to your specific situation. We combine traditional legal expertise with 
              innovative approaches to deliver superior results.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Whether you re facing a complex corporate matter or need assistance with personal 
              legal issues, we are committed to protecting your interests.
            </p>
            <Link href="#contact" className="inline-block px-6 py-3 bg-gray-800 text-white font-medium rounded-md 
              hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 
              transition duration-300 ease-in-out transform hover:scale-105 
              focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
              Schedule a Consultation
            </Link>
          </div>
          
          {/* Images on the right */}
          <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 lg:mt-0">
            <div className="relative h-64 sm:h-80 rounded-lg shadow-lg">
              <div className="h-full w-full hover:scale-105 transition-transform">
                <Image 
                  src="https://res.cloudinary.com/dcdivbkwd/image/upload/v1742618538/lawfirm/jbuf0subiywkln9ctssa.jpg" 
                  alt="Legal services" 
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white text-xl font-semibold">Corporate Law</h3>
                  <p className="text-gray-200 text-sm mb-2">Expert business solutions</p>
                  <Link href="#services" className="text-indigo-300 hover:text-white text-sm font-medium transition">
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 mt-5 sm:mt-16 overflow-hidden rounded-lg shadow-lg">
              <div className="h-full w-full hover:scale-105 transition-transform">
                <Image 
                  src="https://res.cloudinary.com/dcdivbkwd/image/upload/v1742618518/lawfirm/mxypofjokx7kzsklorf3.jpg" 
                  alt="Our expertise" 
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white text-xl font-semibold">Litigation</h3>
                  <p className="text-gray-200 text-sm mb-2">Protecting your interests</p>
                  <Link href="#services" className="text-indigo-300 hover:text-white text-sm font-medium transition">
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextWithImages;
