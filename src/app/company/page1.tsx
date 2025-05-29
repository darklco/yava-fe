import React, { useState, useEffect } from "react";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

const MissionSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/company/pg1.png",
    "/company/pg2.png",
    "/company/pg3.png",
    "/company/pg4.png",
    "/company/pg5.png",
    "/company/pg6.png",
    "/company/pg7.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="font-sans">
      <section className="bg-[#FFF6E9] px-4 sm:px-12 lg:px-24 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <a href="/" className="hover:text-orange-500 transition-colors">Home</a>
              <span>/</span>
              <span className="text-gray-400">Company</span>
            </div>
          </nav>

          {/* Mission Content */}
          <div className="py-12 px-6 md:px-12 rounded-lg">
            <motion.div
              className="flex flex-col md:flex-row gap-10 items-center md:items-start"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {/* Text Side */}
              <motion.div className="flex-1 max-w-xl order-2 md:order-1" variants={containerVariants}>
                <div className="text-4xl font-bold mb-4 flex gap-2 items-center">
                  <motion.span
                    className="wildwords text-[#4B1A1B]"
                    variants={{
                      hidden: { x: -100, opacity: 0 },
                      visible: { x: 0, opacity: 1, transition: { duration: 1 } },
                    }}
                  >
                    OUR
                  </motion.span>
                  <motion.span
                    className="wildwords bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"
                    variants={{
                      hidden: { y: 100, opacity: 0 },
                      visible: { y: 0, opacity: 1, transition: { duration: 1 } },
                    }}
                  >
                    MISSION
                  </motion.span>
                </div>

                <motion.p
                  className="text-sm text-gray-700 mb-6 leading-relaxed"
                  variants={{
                    hidden: { x: -100, opacity: 0 },
                    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
                  }}
                >
                  YAVA fosters healthier villages in Eastern Indonesia by creating fair
                  markets and job opportunities for small farmers. Empowering women is key
                  to building village resilience. We take on this challenge with passion
                  and commitment, tracking our impact along the way. Stay connected and
                  follow our progress!
                </motion.p>

                <motion.button
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-sm flex items-center gap-2 transition-colors shadow-lg hover:shadow-xl"
                  variants={{
                    hidden: { x: -100, opacity: 0 },
                    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
                  }}
                >
                  <Download size={16} /> Our Mission Report
                </motion.button>
              </motion.div>

              {/* Image Side */}
              <motion.div
                className="flex-1 flex justify-center order-1 md:order-2 relative"
                variants={{
                  hidden: { x: 100, opacity: 0 },
                  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
                }}
              >
                <div className="relative w-[360px] h-[360px] rounded-xl shadow-lg bg-white">
                  
                  {/* Animated Quote Mark */}
                  <motion.img
                    src="/images/quote2.png"
                    alt="Quote Mark"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="absolute top-[-30px] right-[-30px] w-20 h-20 md:w-24 md:h-24 transform rotate-12 drop-shadow-lg z-20"
                  />

                  {/* Rotating Images */}
                  <img
                    key={images[currentImageIndex]}
                    src={images[currentImageIndex]}
                    alt="Mission"
                    className="w-full h-full object-contain rounded-xl z-10"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionSection;
