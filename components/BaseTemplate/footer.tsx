"use client";

import { AppSettingData } from "@/data/appSetting";
import Link from "next/link";

export function BaseFooter() {
  return (
    <footer className="py-12 border-t border-zinc-800">
      <div className="max-w-[1000px] mx-auto px-4">
        <div className="flex flex-col space-y-8">
          {/* Credits Section */}
          <div className="text-center border-t border-zinc-800/50 pt-8">
            <p className="text-zinc-400 text-sm mb-3">
              This portfolio was built with{" "}
              <Link
                href="https://github.com/IDAN-DEVS/portify"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                Portify
              </Link>
              , an open-source portfolio builder
            </p>
            <div className="flex items-center justify-center space-x-2 text-xs text-zinc-500">
              <>
                <span>Template Created by</span>
                <Link
                  href="https://github.com/JC-Coder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-zinc-300 underline underline-offset-2"
                >
                  JC CODER
                </Link>
                <span>•</span>
              </>
              <Link
                href={AppSettingData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-300 underline underline-offset-2"
              >
                Create Your Portfolio Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}