"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const highlightImages = [
  {
    src: "/company/kids1.png",
    text: "Three Anakardia students competed in the Kindergarten Coloring Competition.",
  },
  {
    src: "/company/kids2.png",
    text: "Student and teacher joined a preschool competition organized by the pusat kegiatan Gugus (PKG, Cluster Activitiy center).",
  },
  {
    src: "/company/kids3.png",
    text: "Four student participated in teh Extraordinary Creativity competition at Alfa Prima campus.",
  },
];

const Highlight = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % highlightImages.length);
  const goToSlide = (i: number) => setIndex(i);

  return (
    <section
      className="bg-[#FFF9F2] py-16 px-4 sm:px-12 lg:px-24 font-sans"
      id="highlight"
    >
      <div className="text-center mx-auto mb-8">
        <h1 className="text-3xl font-bold leading-tight">
          <div className="wildwords text-[#4B1A1B]">ANAKARDIA KIDS</div>
          <div className="wildwords bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            HIGHLIGHT
          </div>
        </h1>
      </div>

      <div className="relative max-w-5xl mx-auto w-full flex justify-center">
        {/* Tombol vertikal (desktop) */}
        <div className="hidden sm:flex flex-col items-center gap-3 absolute left-0 top-1/2 -translate-y-1/2 z-10">
          {highlightImages.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                goToSlide(i);
              }}
              className={`transition-all duration-300 ${
                index === i
                  ? "w-1.5 h-6 bg-red-600 rounded-full"
                  : "w-2 h-2 bg-red-300 rounded-full"
              }`}
            />
          ))}
        </div>

        {/* Konten gambar + teks */}
        <div
          className="flex flex-col items-center sm:flex-row sm:items-center gap-6 w-full sm:pl-8 cursor-pointer"
          onClick={nextSlide}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={highlightImages[index].src}
              initial={isMobile ? { opacity: 0, x: 100 } : { opacity: 0, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={isMobile ? { opacity: 0, x: -100 } : { opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-6 w-full justify-center"
            >
              {/* Gambar responsive tanpa crop */}
              <div className="mx-auto max-w-[460px] w-full">
                <Image
                  src={highlightImages[index].src}
                  alt="Highlight Anakardia"
                  width={460}
                  height={320}
                  className="rounded-xl w-full h-auto object-contain"
                  sizes="(max-width: 640px) 100vw, 460px"
                />
              </div>

              {/* Teks */}
              <div className="max-w-md text-[#1A1A1A] text-sm sm:text-base leading-relaxed text-center sm:text-left">
                {highlightImages[index].text}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Tombol horizontal (mobile) */}
          <div className="flex sm:hidden gap-2 mt-4">
            {highlightImages.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  goToSlide(i);
                }}
                className={`transition-all duration-300 ${
                  index === i
                    ? "w-6 h-1.5 bg-red-600 rounded-full"
                    : "w-2 h-2 bg-red-300 rounded-full"
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
