"use client";

import { motion } from "framer-motion";
import { ShadowTemplate } from "@/data/templates/shadow";
import { UserSocialsData } from "@/data/socials";
import { UserInfoData } from "@/data/usersInfo";
import Link from "next/link";
import { UserProjectsData } from "@/data/projects";
import { UserWorkExperienceData } from "@/data/workExperience";
import type { IWorkExperience } from "@/data/workExperience";
import type { Project } from "@/data/projects";
import Image from "next/image";
import { UserSkillsData } from "@/data/skills";

export default function ShadowTemplatePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0a192f] text-[#8892b0] selection:bg-[#233554] selection:text-[#ccd6f6] p-6 lg:p-12">
      <div className="max-w-[1600px] mx-auto">
        {/* Left Side Navigation */}
        <nav className="fixed left-[40px] top-1/2 -translate-y-1/2 hidden lg:block mix-blend-difference">
          <ul className="flex flex-col gap-32">
            <li>
              <Link 
                href="#about" 
                className="text-[#64ffda] font-mono text-[13px] tracking-widest opacity-70 hover:opacity-100 transition-opacity"
                style={{ writingMode: 'vertical-rl' }}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link 
                href="#experience" 
                className="text-[#64ffda] font-mono text-[13px] tracking-widest opacity-70 hover:opacity-100 transition-opacity"
                style={{ writingMode: 'vertical-rl' }}
              >
                EXPERIENCE
              </Link>
            </li>
            <li>
              <Link 
                href="#skills" 
                className="text-[#64ffda] font-mono text-[13px] tracking-widest opacity-70 hover:opacity-100 transition-opacity"
                style={{ writingMode: 'vertical-rl' }}
              >
                SKILLS
              </Link>
            </li>
            <li>
              <Link 
                href="#projects" 
                className="text-[#64ffda] font-mono text-[13px] tracking-widest opacity-70 hover:opacity-100 transition-opacity"
                style={{ writingMode: 'vertical-rl' }}
              >
                PROJECTS
              </Link>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <main className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-screen items-center">
            {/* Left Column - Hero Section */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div 
                variants={itemVariants}
                className="mb-12 flex justify-center"
              >
                <Image
                  src={
                    UserInfoData.heroImage.type === "url"
                      ? UserInfoData.heroImage.url
                      : `/images/${UserInfoData.heroImage.url}`
                  }
                  width={150}
                  height={150}
                  alt="Profile picture"
                  className="w-25 h-25 rounded-sm object-cover transform  shadow-lg border-2 border-[#64ffda] hover:rotate-0 transition-transform duration-300"
                />
              </motion.div>

              <motion.h1 
                className="text-[clamp(40px,8vw,80px)] font-bold leading-none mb-8"
                variants={itemVariants}
              >
                <span className="text-[#64ffda] font-mono text-base block mb-5">Hi, my name is</span>
                <span className="text-[#ccd6f6] block mb-2">{UserInfoData.fullName}</span>
                <span className="text-[#8892b0]">{UserInfoData.tagLine}</span>
              </motion.h1>

              <motion.div variants={itemVariants} className="mb-8">
                <Link 
                  href="#projects"
                  className="inline-block px-7 py-4 border border-[#64ffda] text-[#64ffda] font-mono rounded hover:bg-[#64ffda]/10 transition-colors"
                >
                  Check out my projects!
                </Link>
              </motion.div>

              {/* Social Icons */}
              <motion.div variants={itemVariants}>
                <ul className="flex items-center gap-8">
                  {Object.entries(UserSocialsData).map(([key, { url, icon: Icon }]) => (
                    <li key={key}>
                      <Link 
                        href={url} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#8892b0] hover:text-[#64ffda] hover:-translate-y-1 transition-all inline-block p-4"
                      >
                        <Icon size={24} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Right Column - About Description */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-lg leading-relaxed space-y-6 font-mono"
            >
              <motion.p variants={itemVariants}>
                {UserInfoData.miniBio}
              </motion.p>
            </motion.div>
          </div>
        </main>

        {/* Experience Section */}
        <section id="experience" className="max-w-[1000px] mx-auto py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-[#ccd6f6] text-4xl font-bold mb-12"
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
                  className="bg-[#112240] rounded-lg p-6 hover:transform hover:-translate-y-2 transition-all"
                >
                  <div className="text-[#64ffda] font-mono text-sm mb-2">
                    {exp.period}
                  </div>
                  <h3 className="text-[#ccd6f6] text-lg font-semibold mb-2">
                    @ {exp.company}
                  </h3>
                  <p className="text-[#8892b0] text-sm leading-relaxed">
                    {exp.shortDescription || exp.responsibilities[0]}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="max-w-[1000px] mx-auto py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-[#ccd6f6] text-4xl font-bold mb-12"
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
                  className="bg-[#112240] rounded-lg p-6 hover:transform hover:-translate-y-2 transition-all"
                >
                  <span className="text-[#64ffda] font-mono text-sm block mb-2">
                    {tech.name}
                  </span>
                  <span className="text-[#8892b0] text-xs block mb-4">
                    {tech.description}
                  </span>
                  <span className="text-[#64ffda] text-xs block">
                    {tech.projects_completed} projects completed
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-[1000px] mx-auto py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-[#ccd6f6] text-4xl font-bold mb-12"
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
                  className="bg-[#112240] rounded-lg p-8 hover:transform hover:-translate-y-2 transition-all"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="text-[#64ffda]">
                      <Image src={project.previewImage} alt={project.title} width={80} height={80} />
                    </div>
                    <div className="flex gap-4">
                     
                      {project.url && (
                        <Link href={project.url} target="_blank" className="text-[#8892b0] hover:text-[#64ffda]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </Link>
                      )}
                    </div>
                  </div>
                  <h3 className="text-[#ccd6f6] text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#8892b0] mb-4">
                    {project.description}
                  </p>
                  
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        @font-face {
          font-family: 'Calibre';
          src: url('/fonts/Calibre-Medium.woff2') format('woff2');
          font-weight: 500;
          font-style: normal;
        }
        
        body {
          font-family: 'Calibre', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
          margin: 0;
          padding: 0;
        }
        
        .font-mono {
          font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
        }
      `}</style>
    </div>
  );
}