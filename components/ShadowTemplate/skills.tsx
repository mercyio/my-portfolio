"use client";
import { motion } from "framer-motion";
import { UserSkillsData } from "@/data/skills";
import { containerVariants, itemVariants } from "./animations";

export function ShadowSkills() {
  return (
    <section id="skills" className="max-w-[1000px] mx-auto py-24">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2 
          variants={itemVariants}
          className="text-black text-4xl font-bold mb-12"
        >
          Skills
        </motion.h2>
        
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {UserSkillsData.map((tech, index) => (
            <div 
              key={index} 
              className="bg-white border border-black/10 rounded-lg p-6 hover:transform hover:-translate-y-2 transition-all hover:shadow-lg"
            >
              <span className="text-black font-mono text-base block mb-2">
                {tech.name}
              </span>
              <span className="text-black/80 text-sm block mb-4">
                {tech.description}
              </span>
              <span className="text-black text-sm block">
                {tech.projects_completed} projects completed
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}