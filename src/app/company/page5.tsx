import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const farmerImages = [
  "/images/f1.png",
  "/images/f2.png",
  "/images/f3.png",
  "/images/f4.png",
  "/images/f5.png",
  "/images/f6.png",
];

const FarmerDevelopmentSection = () => {
  const [farmerImageIndex, setFarmerImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFarmerImageIndex((prevIndex) => (prevIndex + 1) % farmerImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={inter.className}>
      <section className="bg-[#FFF6E9] px-4 sm:px-12 lg:px-24 py-16 2xl:min-h-[810px] flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="py-12 px-6 md:px-12 rounded-lg">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-10"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05 } },
              }}
            >
              {/* Text Side */}
              <motion.div
                className="flex-1 max-w-xl order-2 md:order-1 text-left"
                variants={{
                  hidden: { x: -100, opacity: 0 },
                  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.1 } },
                }}
              >
                <div className="mb-6">
                  <motion.div
                    className="text-4xl 2xl:text-5xl font-bold wildwords text-[#4B1A1B]"
                    variants={{
                      hidden: { x: -100, opacity: 0 },
                      visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.1 } },
                    }}
                  >
                    FARMER
                  </motion.div>
                  <motion.div
                    className="text-4xl 2xl:text-5xl font-bold wildwords inline-block bg-gradient-to-r from-[#FE8301] to-[#f31212] bg-clip-text text-transparent"
                    variants={{
                      hidden: { y: 100, opacity: 0 },
                      visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.15 } },
                    }}
                  >
                    DEVELOPMENT
                  </motion.div>
                </div>

                <motion.p
                  className="text-sm text-gray-700 mb-6 leading-relaxed"
                  variants={{
                    hidden: { x: -100, opacity: 0 },
                    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
                  }}
                >
                  YAVA is committed to farmers' livelihoods and responsible land use. Our
                  initiatives include training in sustainable farming techniques,
                  establishing Village Drying Centers, and improving cashew trees through
                  seedling distribution programs.
                </motion.p>

                <motion.p
                  className="text-sm text-gray-700 mb-6 leading-relaxed"
                  variants={{
                    hidden: { x: -100, opacity: 0 },
                    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.25 } },
                  }}
                >
                  We partner with local farmers for the long term in two ways:
                </motion.p>

                <motion.ol
                  className="list-decimal pl-5 text-sm text-gray-700 mb-6 leading-relaxed text-left"
                  variants={{
                    hidden: { x: -100, opacity: 0 },
                    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3 } },
                  }}
                >
                  <li>
                    Providing essential knowledge on sustainable practices like mulching,
                    pruning, and using locally available fertilizers.
                  </li>
                  <li>
                    Collaborating to enhance or create new economic opportunities for crops.
                  </li>
                </motion.ol>
              </motion.div>

              {/* Image Side */}
              <motion.div
                className="flex-1 flex justify-center order-1 md:order-2 relative"
                variants={{
                  hidden: { x: 100, opacity: 0 },
                  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.1 } },
                }}
              >
                <div className="relative w-[440px] h-[440px] 2xl:w-[520px] 2xl:h-[520px] rounded-xl flex items-center justify-center overflow-visible">
                  <Image
                    src={farmerImages[farmerImageIndex]}
                    alt="Farmer Development"
                    width={520}
                    height={520}
                    className="rounded-xl object-contain"
                    priority
                  />
                  <motion.div
                    className="absolute top-[-45px] right-[-30px] w-[150px] h-[150px] z-20"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 120 }}
                  >
                    <Image
                      src="/images/quote2.png"
                      alt="Quote"
                      width={150}
                      height={150}
                      className="rotate-12 drop-shadow-lg"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FarmerDevelopmentSection;
