"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaBalanceScale, FaHandshake, FaTrophy, FaUniversity, FaUsers } from "react-icons/fa";

const milestones = [
  {
    year: 2019,
    title: "Expanded Practice Areas",
    description: "Added specialized departments in corporate law and intellectual property.",
    icon: <FaBalanceScale size={24} />
  },
  {
    year: 2020,
    title: "Virtual Legal Services",
    description: "Pioneered remote legal consultations during global challenges.",
    icon: <FaUsers size={24} />
  },
  {
    year: 2021,
    title: "Regional Recognition",
    description: "Named 'Law Firm of the Year' by State Bar Association.",
    icon: <FaTrophy size={24} />
  },
  {
    year: 2022,
    title: "Strategic Partnerships",
    description: "Formed alliances with international law networks.",
    icon: <FaHandshake size={24} />
  },
  {
    year: 2023,
    title: "Legal Education Initiative",
    description: "Launched pro bono program for community legal education.",
    icon: <FaUniversity size={24} />
  }
];

const FirmHistory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Firm&apos;s Journey</h2>
          <div className="w-24 h-1 bg-gray-700 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20" ref={ref}>
          <motion.div 
            className="lg:w-1/2"
            style={{
              transform: isInView ? "none" : "translateX(-100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
            }}
          >
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <Image 
                src="https://res.cloudinary.com/dcdivbkwd/image/upload/v1742618572/lawfirm/julkobugvufq6uatbtet.jpg"
                alt="Law Firm History" 
                width={600}
                height={400}
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2"
            style={{
              transform: isInView ? "none" : "translateX(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
            }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">A Legacy of Excellence Since 1985</h3>
            <p className="text-gray-600 mb-6">
              For over three decades, our firm has stood as a pillar of legal excellence and integrity. 
              Founded by a group of visionary attorneys committed to providing exceptional legal representation, 
              we have grown from a small practice into one of the region&apos;s most respected law firms.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="inline-block"
            >
              <a 
                href="/about" 
                className="group px-8 py-3 bg-gray-700 text-white font-medium rounded-md border-2 border-gray-700 hover:bg-white hover:text-gray-700 transition-all duration-300 flex items-center gap-2"
              >
                <span>Discover Our Story</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-24 mb-12" ref={timelineRef}>
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={timelineInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-16"
          >
            Recent Milestones
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={timelineInView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Desktop timeline (hidden on mobile) */}
            <div className="hidden md:block">
              {/* Horizontal line */}
              <div className="absolute h-1 bg-gray-300 top-[45px] left-0 right-0 z-0"></div>
              
              {/* Timeline items */}
              <div className="flex justify-between relative z-10">
                {milestones.map((milestone) => (
                  <motion.div 
                    key={milestone.year}
                    variants={itemVariants}
                    className="flex flex-col items-center max-w-[180px]"
                  >
                    <div className="bg-white p-3 rounded-full border-4 border-gray-700 mb-4">
                      <div className="text-gray-700">{milestone.icon}</div>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{milestone.year}</h4>
                    <h5 className="font-medium text-gray-700 mb-1 text-center">{milestone.title}</h5>
                    <p className="text-gray-600 text-sm text-center">{milestone.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Mobile timeline (visible only on mobile) */}
            <div className="md:hidden">
              {/* Vertical line */}
              <div className="absolute w-1 bg-gray-300 top-0 bottom-0 left-[25px] z-0"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {milestones.map((milestone) => (
                  <motion.div 
                    key={milestone.year}
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    <div className="bg-white p-2 rounded-full border-4 border-gray-700 mr-6 z-10">
                      <div className="text-gray-700">{milestone.icon}</div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-1">{milestone.year}</h4>
                      <h5 className="font-medium text-gray-700 mb-1">{milestone.title}</h5>
                      <p className="text-gray-600 text-sm">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FirmHistory;
