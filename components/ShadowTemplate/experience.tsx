"use client";
import { motion, AnimatePresence } from "framer-motion";
import { UserWorkExperienceData } from "@/data/workExperience";
import type { IWorkExperience } from "@/data/workExperience";
import { containerVariants, itemVariants } from "./animations";
import { useState } from "react";

export function ShadowExperience() {
  const [selectedExp, setSelectedExp] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedExp(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedExp(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="experience" className="max-w-[1000px] mx-auto py-24">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2 
          variants={itemVariants}
          className="text-black text-4xl font-bold mb-12"
        >
          Experience
        </motion.h2>
        
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {UserWorkExperienceData.map((exp: IWorkExperience, index: number) => (
            <div 
              key={index} 
              className="bg-white border border-black/10 rounded-lg p-6 hover:transform hover:-translate-y-2 transition-all hover:shadow-lg"
            >
              <div className="text-black font-mono text-sm mb-2">
                {exp.period}
              </div>
              <h3 className="text-black text-lg font-semibold mb-2">
                @ {exp.company}
              </h3>
              <p className="text-black/800 text-sm leading-relaxed">
                {exp.shortDescription || exp.responsibilities[0]}
              </p>
              <button 
                onClick={() => openModal(index)}
                className="text-sm text-blue-600 hover:text-blue-800 mt-2"
              >
                See more
              </button>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedExp !== null && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/50 z-40"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed inset-0 flex items-center justify-center z-50 px-4 pointer-events-none"
            >
              <div 
                className="bg-white rounded-xl p-8 w-full max-w-[600px] relative pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-black/60 hover:text-black"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="text-black font-mono text-sm mb-2">
                  {UserWorkExperienceData[selectedExp].period}
                </div>
                <h3 className="text-black text-xl font-semibold mb-4">
                  @ {UserWorkExperienceData[selectedExp].company}
                </h3>
                <div className="text-black/800 space-y-3 max-h-[60vh] overflow-y-auto">
                  {UserWorkExperienceData[selectedExp].responsibilities.map((resp, i) => (
                    <p key={i} className="text-base leading-relaxed">{resp}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}