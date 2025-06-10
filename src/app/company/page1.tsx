import React, { useState, useEffect } from "react";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

const MissionSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/images/pg1.png",
    "/images/pg2.png",
    "/images/pg3.png",
    "/images/pg4.png",
    "/images/pg5.png",
    "/images/pg6.png",
    "/images/pg7.png",
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
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <div className="font-sans">
      <section className="bg-[#FFF6E9] px-4 sm:px-12 lg:px-24 py-16 2xl:min-h-[810px] flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          {/* Breadcrumb
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <a href="/" className="hover:text-orange-500 transition-colors">Home</a>
              <span>/</span>
              <span className="text-gray-400">Company</span>
            </div>
          </nav> */}

          {/* Mission Content */}
          <div className="py-12 px-6 md:px-12 rounded-lg">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-10"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {/* Text Side */}
              <motion.div className="flex-1 max-w-xl order-2 md:order-1 text-left" variants={containerVariants}>
                <div className="text-4xl 2xl:text-5xl font-bold mb-6 flex gap-2 items-center">
                  <motion.span
                    className="wildwords text-[#4B1A1B]"
                    variants={{
                      hidden: { x: -100, opacity: 0 },
                      visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.1 } },
                    }}
                  >
                    OUR
                  </motion.span>
                  <motion.span
                    className="wildwords bg-gradient-to-r from-[#FE8301] to-[#f31212] bg-clip-text text-transparent"
                    variants={{
                      hidden: { y: 100, opacity: 0 },
                      visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.1 } },
                    }}
                  >
                    MISSION
                  </motion.span>
                </div>

                <motion.p
                  className="text-sm text-gray-700 mb-6 leading-relaxed"
                  variants={{
                    hidden: { x: -100, opacity: 0 },
                    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.1 } },
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
                    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.1 } },
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
                  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.1 } },
                }}
              >
                <div className="relative w-[380px] h-[380px] md:w-[440px] md:h-[440px] 2xl:w-[520px] 2xl:h-[520px]">
                  {/* Quote mark */}
                 <motion.img
                  src="/images/quote2.png"
                  alt="Quote Mark"
                  width={150}
                  height={150}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 120 }}
                  className="absolute top-[-50px] right-[-30px] w-[150px] h-[150px] transform rotate-12 z-20"
                />


                  {/* Rotating Image */}
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
