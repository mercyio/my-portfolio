"use client";
import { motion } from "framer-motion";
import { UserWorkExperienceData } from "@/data/workExperience";
import type { IWorkExperience } from "@/data/workExperience";
import { containerVariants, itemVariants } from "./animations";

export function ShadowExperience() {
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
              <p className="text-black/80 text-sm leading-relaxed">
                {exp.shortDescription || exp.responsibilities[0]}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}