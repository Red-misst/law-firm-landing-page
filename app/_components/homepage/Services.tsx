"use client"
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { 
  LuBuilding2, 
  LuScale, 
  LuUsers, 
  LuHouse, 
  LuSignature, 
  LuShield, 
  LuPlane, 
  LuLandmark, 
  LuHandshake, 
  LuScrollText 
} from 'react-icons/lu';

const Services = () => {
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleServicesScroll = () => {
      if (!servicesRef.current) return;
      
      const { scrollTop, scrollHeight, clientHeight } = servicesRef.current;
      // Check if user has scrolled to bottom (with a small buffer)
      if (scrollHeight - scrollTop <= clientHeight + 20) {
        setHasScrolledToBottom(true);
      }
    };

    const servicesDiv = servicesRef.current;
    
    if (servicesDiv) {
      servicesDiv.addEventListener('scroll', handleServicesScroll);
    }
    
    return () => {
      if (servicesDiv) {
        servicesDiv.removeEventListener('scroll', handleServicesScroll);
      }
    };
  }, []);

  const services = [
    { name: 'Corporate Law', description: 'Business formation, mergers, acquisitions, and corporate governance.', icon: <LuBuilding2 className="text-4xl mb-3 text-gray-700" /> },
    { name: 'Civil Litigation', description: 'Representation in civil disputes, motions, and trial proceedings.', icon: <LuScale className="text-4xl mb-3 text-gray-700" /> },
    { name: 'Family Law', description: 'Divorce, child custody, alimony, and domestic relations matters.', icon: <LuUsers className="text-4xl mb-3 text-gray-700" /> },
    { name: 'Real Estate Law', description: 'Property transactions, landlord-tenant disputes, and zoning issues.', icon: <LuHouse className="text-4xl mb-3 text-gray-700" /> },
    { name: 'Contract Law', description: 'Contract drafting, review, negotiation, and breach of contract disputes.', icon: <LuSignature className="text-4xl mb-3 text-gray-700" /> },
    { name: 'Intellectual Property', description: 'Trademarks, patents, copyrights, and trade secret protection.', icon: <LuShield className="text-4xl mb-3 text-gray-700" /> },
    { name: 'Immigration Law', description: 'Visas, residency applications, citizenship, and deportation defense.', icon: <LuPlane className="text-4xl mb-3 text-gray-700" /> },
    { name: 'Constitutional Law', description: 'Civil rights, first amendment cases, and government powers.', icon: <LuLandmark className="text-4xl mb-3 text-gray-700" /> },
    { name: 'Business Contracts', description: 'Negotiation and drafting of business agreements and partnerships.', icon: <LuHandshake className="text-4xl mb-3 text-gray-700" /> },
    { name: 'Legal Consultation', description: 'Professional legal advice on various matters and situations.', icon: <LuScrollText className="text-4xl mb-3 text-gray-700" /> },
  ];

  return (
    <section id="services" className="bg-gray-100 py-16 relative">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Image on left for large screens */}
          <div className="lg:w-1/2 relative h-[600px] lg:mt-12 ">
            <Image 
              src="https://res.cloudinary.com/dcdivbkwd/image/upload/v1742618572/lawfirm/julkobugvufq6uatbtet.jpg"
              alt="Law Firm Services" 
              fill
              style={{ objectFit: 'cover' , height: "100%" }}
              className="w-full rounded-lg"
            />
          </div>
          
          {/* Services list on right */}
          <div className="lg:w-1/2 bg-gray-100 p-8 lg:p-12 flex flex-col">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-800 border-b-2 border-gray-400 pb-4">
              Our Legal Services
            </h2>
            
            <div 
              ref={servicesRef}
              className="grid grid-cols-1 gap-6 overflow-y-auto max-h-[500px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 pr-2"
            >
              {services.map((service, index) => (
                <div key={index} className="p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col items-start">
                    {service.icon}
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.name}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
              
              {!hasScrolledToBottom && (
                <div className="sticky bottom-0 w-full text-center py-3 bg-gradient-to-t from-gray-100 pointer-events-none">
                  <span className="animate-bounce inline-block text-gray-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
