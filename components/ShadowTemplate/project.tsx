"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { UserProjectsData } from "@/data/projects";
import type { Project } from "@/data/projects";
import { containerVariants, itemVariants } from "./animations";

export function ShadowProjects() {
  return (
    <section id="projects" className="max-w-[1000px] mx-auto py-24">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2 
          variants={itemVariants}
          className="text-black text-4xl font-bold mb-12"
        >
          Notable Projects
        </motion.h2>
        
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {UserProjectsData.map((project: Project, index: number) => (
            <div 
              key={index}
              className="bg-white border border-black/10 rounded-lg p-8 hover:transform hover:-translate-y-2 transition-all hover:shadow-lg"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <Image src={project.previewImage} alt={project.title} width={80} height={80} />
                </div>
                <div className="flex gap-4">
                  {project.url && (
                    <Link href={project.url} target="_blank" className="text-black hover:text-black/70">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
              <h3 className="text-black text-xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-black/80 mb-4">
                {project.description}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}