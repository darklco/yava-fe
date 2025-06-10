import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MissionStats = () => {
  const [tons, setTons] = useState(0);
  const [employees, setEmployees] = useState(0);
  const [leadersPercent, setLeadersPercent] = useState(0);
  const [workersPercent, setWorkersPercent] = useState(0);
  const [glycemicIndex, setGlycemicIndex] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const startTime = Date.now();
    const animateValues = () => {
      const progress = Math.min(1, (Date.now() - startTime) / duration);
      setTons(Math.floor(progress * 2138));
      setEmployees(Math.floor(progress * 471));
      setLeadersPercent(Number((progress * 53.7).toFixed(1)));
      setWorkersPercent(Number((progress * 65.6).toFixed(1)));
      setGlycemicIndex(Math.floor(progress * 52));
      if (progress < 1) requestAnimationFrame(animateValues);
    };
    animateValues();
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <section className="bg-white px-0 py-20">
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <motion.h1
            className="text-4xl 2x1:text-5x1 font-bold leading-tight"
            variants={textVariant}
          >
            <div className="wildwords text-[#4B1A1B]">OUR MISSION</div>
          </motion.h1>

          <motion.div
            className="text-4xl 2x1:text-5x1 font-bold leading-tight wildwords inline-block bg-gradient-to-r from-[#FE8301] to-[#f31212] bg-clip-text text-transparent"
            variants={textVariant}
          >
            IN NUMBERS
          </motion.div>

          <motion.p
            className="text-gray-600 text-sm mt-2"
            variants={textVariant}
          >
            In 2023, at our production facilities in Desa Ban, Bali, and Oka, Flores:
          </motion.p>
        </motion.div>

        {/* STATS */}
        <div className="space-y-8">
          {/* First Row - 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-0 gap-y-6 text-center">
            <div className="py-2">
              <div className="text-2xl md:text-3xl font-bold text-[#FE8301] mb-1">
                {tons.toLocaleString()} <span className="text-[#FE8301]">Tons</span>
              </div>
              <div className="text-gray-600 text-sm leading-relaxed">
                <div>Total raw materials sourced from</div>
                <div>Eastern Indonesia.</div>
              </div>
            </div>

            <div className="py-2">
              <div className="text-2xl md:text-3xl font-bold text-[#FE8301] mb-1">
                {employees} <span className="text-[#FE8301]">Employees</span>
              </div>
              <div className="text-gray-600 text-sm leading-relaxed">
                <div>The number of workers involved in our</div>
                <div>production process.</div>
              </div>
            </div>

            <div className="py-2">
              <div className="text-2xl md:text-3xl font-bold text-[#FE8301] mb-1">
                {leadersPercent}% <span className="text-[#FE8301]">Leaders</span>
              </div>
              <div className="text-gray-600 text-sm leading-relaxed">
                <div>Percentage of female leaders</div>
                <div>in our workforce.</div>
              </div>
            </div>
          </div>

          {/* Second Row - 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-6 text-center max-w-2xl mx-auto">
            <div className="py-2">
              <div className="text-2xl md:text-3xl font-bold text-[#FE8301] mb-1">
                {workersPercent}% <span className="text-[#FE8301]">Workers</span>
              </div>
              <div className="text-gray-600 text-sm leading-relaxed">
                <div>Percentage of female employees in</div>
                <div>our total workforce.</div>
              </div>
            </div>

            <div className="py-2">
              <div className="text-2xl md:text-3xl font-bold text-[#FE8301] mb-1">
                {glycemicIndex} <span className="text-[#FE8301]">Glycemic Index</span>
              </div>
              <div className="text-gray-600 text-sm leading-relaxed">
                <div>Replacing white sugar with low-GI</div>
                <div>palm sugar.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStats;
