"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const highlightImages = [
  {
    src: "/images/h1.png",
    text: (
      <p className="text-sm text-gray-700 mb-6 leading-relaxed">
        "Cashew nuts are typically purchased after drying which requires at least a concrete floor to stay clean. To support small farmers, Yava builds concrete drying floors in surrounding areas."
      </p>
    ),
  },
  {
    src: "/images/h2.png",
    text: (
      <p className="text-sm text-gray-700 mb-6 leading-relaxed">
        "Cashew trees in Ban village were planted over 30 years ago, and yields have declined. New varieties can double production per tree and produce larger nuts. Yava is providing new seedlings for farmers."
      </p>
    ),
  },
  {
    src: "/images/h3.png",
    text: (
      <p className="text-sm text-gray-700 mb-6 leading-relaxed">
        "Yava buys sugar from lontar palm nectar and helps farmers improve worker safety by providing protective equipment for climbing. It also enhances sugar quality by supplying better cooking tools and measuring instruments."
      </p>
    ),
  },
];

const Highlight = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  // Ganti slide otomatis tiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % highlightImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getTransitionDuration = () => 0.5;

  return (
    <section className="bg-[#FFFFFF] py-16 px-4 sm:px-12 lg:px-24 font-sans" id="highlight">
      <div className="text-center mx-auto mb-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-4xl 2x1:text-5x1 font-bold leading-tight wildwords text-[#4B1A1B]"
        >
          PROJECT
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
          className="text-4xl 2x1:text-5x1 font-bold leading-tight wildwords inline-block bg-gradient-to-r from-[#FE8301] to-[#f31212] bg-clip-text text-transparent"
        >
          HIGHLIGHT
        </motion.div>
      </div>

      <div className="relative max-w-5xl mx-auto w-full flex justify-center">
        {/* Tombol vertikal (desktop) tidak aktif */}
        <div className="hidden sm:flex flex-col items-center gap-3 absolute left-0 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
          {highlightImages.map((_, i) => (
            <span
              key={i}
              className={`transition-all duration-300 ${
                index === i
                  ? "w-1.5 h-8 bg-red-600 rounded-full"
                  : "w-1.5 h-1.5 bg-[#FFF9F2] border-2 border-red-400 rounded-full"
              }`}
            />
          ))}
        </div>

        <div className="flex flex-col items-center sm:flex-row sm:items-center gap-6 w-full sm:pl-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={highlightImages[index].src}
              initial={
                index === 0 && isFirstRender.current
                  ? { opacity: 0, x: 100 }
                  : isMobile
                  ? { opacity: 0, x: 100 }
                  : { opacity: 0, y: 50 }
              }
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={isMobile ? { opacity: 0, x: -100 } : { opacity: 0, y: -50 }}
              transition={{ duration: getTransitionDuration(), ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-6 w-full justify-center"
            >
              <div className="mx-auto max-w-[460px] w-full">
                <Image
                  src={highlightImages[index].src}
                  alt="Highlight"
                  width={460}
                  height={320}
                  className="rounded-xl w-full h-auto object-contain"
                  sizes="(max-width: 640px) 100vw, 460px"
                />
              </div>

              <div className="max-w-md text-[#1A1A1A] text-sm sm:text-base leading-relaxed text-center sm:text-left">
                {highlightImages[index].text}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Tombol horizontal (mobile) tidak aktif */}
          <div className="flex sm:hidden gap-2 mt-4 pointer-events-none">
            {highlightImages.map((_, i) => (
              <span
                key={i}
                className={`transition-all duration-300 ${
                  index === i
                    ? "w-8 h-1.5 bg-red-600 rounded-full"
                    : "w-1.5 h-1.5 bg-[#FFF9F2] border-2 border-red-400 rounded-full"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
