"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { UserInfoData } from "@/data/usersInfo";
import { UserSocialsData } from "@/data/socials";
import { containerVariants, itemVariants } from "./animations";

export function ShadowHero() {
  return (
    <main className="max-w-[1000px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-screen items-center">
        {/* Left Column */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div 
            variants={itemVariants}
            className="mb-8"
          >
            <Image
              src={
                UserInfoData.heroImage.type === "url"
                  ? UserInfoData.heroImage.url
                  : `/images/${UserInfoData.heroImage.url}`
              }
              width={120}
              height={120}
              alt="Profile picture"
              className="w-16 h-16 rounded-full object-cover transform shadow-lg border-2 border-[#64ffda] hover:rotate-0 transition-transform duration-300"
            />
          </motion.div>

          <motion.h1 
            className="text-[clamp(40px,8vw,80px)] font-bold leading-none mb-8"
            variants={itemVariants}
          >
            <span className="text-black font-mono text-base block mb-5">Hi, my name is</span>
            <span className="text-black text-[clamp(25px,4vw,40px)] block mb-2">{UserInfoData.fullName}.</span>
            <span className="text-black text-[clamp(10px,4vw,15px)] block">{UserInfoData.tagLine}</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="mb-8">
            <Link 
              href="/resume"
              className="inline-block px-7 py-4 border border-black text-black font-mono rounded hover:bg-black/10 transition-colors"
            >
              My Resume
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
                    className="text-black hover:text-black/70 hover:-translate-y-1 transition-all inline-block p-4"
                  >
                    <Icon size={24} />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-lg leading-relaxed space-y-6 font-mono lg:-mt-45"
        >
          <motion.p variants={itemVariants}>
            {UserInfoData.miniBio}
          </motion.p>
        </motion.div>
      </div>
    </main>
  );
}