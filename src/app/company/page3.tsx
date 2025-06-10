import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const AnakKardiaKidsSection = () => {
  const [anakKardiaImageIndex, setAnakKardiaImageIndex] = useState(0);
  const anakKardiaImages = [
    "/images/an1.png",
    "/images/an2.png",
    "/images/an3.png",
    "/images/an4.png",
    "/images/an5.png",
    "/images/an6.png",
    "/images/an7.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnakKardiaImageIndex(
        (prevIndex) => (prevIndex + 1) % anakKardiaImages.length
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [anakKardiaImages.length]);

  return (
    <section
      className={`${inter.className} bg-[#FDF5E6] px-4 sm:px-12 lg:px-24 py-16 2xl:min-h-[810px] flex items-center`}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-40">
          {/* Gambar anak-anak */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative ml-10"
          >
            {/* Tanda Petik Merah */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                type: "spring",
                stiffness: 120,
              }}
              className="absolute -top-10 -left-10 z-10"
            >
              <Image
                src="/images/quote.png"
                alt="Quote"
                width={100}
                height={100}
                className="rotate-12"
              />
            </motion.div>

            <div className="rounded-md overflow-hidden w-[380px] h-[380px] md:w-[440px] md:h-[440px] 2xl:w-[520px] 2xl:h-[520px] transform rotate-2">
              <Image
                key={anakKardiaImages[anakKardiaImageIndex]}
                src={anakKardiaImages[anakKardiaImageIndex]}
                alt="AnakKardia Kids"
                width={520}
                height={520}
                className="w-full h-full object-contain transition-opacity duration-500 ease-in-out"
              />
            </div>
          </motion.div>

          {/* Deskripsi */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-md w-full text-left space-y-4 self-center"
          >
            <h2 className="text-4xl 2xl:text-5xl font-bold flex gap-2 items-center">
              <span className="wildwords text-[#4B1A1B]">ANAKARDIA</span>
              <motion.span
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.15,
                }}
                className="wildwords bg-gradient-to-r from-[#FE8301] to-[#f31212] bg-clip-text text-transparent inline-block"
              >
                KIDS
              </motion.span>
            </h2>
            <p className="text-sm text-gray-700 mb-6 leading-relaxed">
              AnakKardia Kids is located in our factory and hosts over 55 children daily.
              Its unique name comes from the Latin word for the cashew tree,
              <i> Anacardium occidentale</i>, and the Indonesian word for 'child.'
            </p>
            <p className="text-sm text-gray-700 mb-6 leading-relaxed">
              AnakKardia Kids provides children in Desa Ban with a safe, healthy, and
              enriching learning environment, giving them a strong start in life.
              We take pride in offering opportunities for children in our community
              to grow alongside us.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnakKardiaKidsSection;
