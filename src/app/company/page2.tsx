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

  return (
    <section className="bg-white px-4 sm:px-12 lg:px-24 py-16">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="wildwords text-3xl md:text-4xl font-bold mb-1 text-[#4B1A1B]">
            OUR MISSION
          </h2>
          <h2 className="wildwords text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            IN NUMBERS
          </h2>
          <p className="text-gray-600 text-sm">
            In 2023, at our production facilities in Desa Ban, Bali, and Oka, Flores:
          </p>
        </motion.div>

        {/* STATS */}
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-2">
                {tons.toLocaleString()} <span className="text-orange-600">Tons</span>
              </div>
              <div className="text-gray-600 text-sm leading-relaxed">
                Total raw materials sourced from Eastern Indonesia.
              </div>
            </div>

            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-2">
                {employees} <span className="text-orange-600">Employees</span>
              </div>
              <div className="text-gray-600 text-sm leading-relaxed">
                The number of workers involved in our production process.
              </div>
            </div>

            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-2">
                {leadersPercent}% <span className="text-orange-600">Leaders</span>
              </div>
              <div className="text-gray-600 text-sm leading-relaxed">
                Percentage of female leaders in our workforce.
              </div>
            </div>
          </div>

          {/* Second Row - 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-2">
                {workersPercent}% <span className="text-orange-600">Workers</span>
              </div>
              <div className="text-gray-600 text-sm leading-relaxed">
                Percentage of female employees in our total workforce.
              </div>
            </div>

            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-2">
                {glycemicIndex} <span className="text-orange-600">Glycemic Index</span>
              </div>
              <div className="text-gray-600 text-sm leading-relaxed">
                Replacing white sugar with low-GI palm sugar.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStats;
