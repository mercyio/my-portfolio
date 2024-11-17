"use client";

import { motion } from "framer-motion";
import { AppSettingData } from "@/data/appSetting";
import { containerVariants, itemVariants } from "./animations";
import Link from "next/link";

export function ShadowFooter() {
  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="py-12 border-t border-black/10"
    >
      <div className="max-w-[1000px] mx-auto px-4">
        <motion.div
          variants={itemVariants}
          className="flex flex-col space-y-8"
        >
          {/* Credits Section */}
          <motion.div 
            variants={itemVariants}
            className="text-center border-t border-black/5 pt-8"
          >
            <p className="text-black/60 text-sm mb-3">
              This portfolio was built with{" "}
              <Link
                href="https://github.com/IDAN-DEVS/portify"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                Portify
              </Link>
              , an open-source portfolio builder
            </p>
            <div className="flex items-center justify-center space-x-2 text-xs text-black/50">
              <span>Template Created by</span>
              <Link
                href="https://github.com/bright-bassey"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/60 hover:text-black underline underline-offset-2"
              >
                Bright Bassey
              </Link>
              <span>•</span>
              <Link
                href={AppSettingData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/60 hover:text-black underline underline-offset-2"
              >
                Create Your Portfolio Now
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
