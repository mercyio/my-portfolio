"use client";
import Link from "next/link";

export function ShadowNav() {
  return (
    <nav className="fixed left-[40px] top-1/2 -translate-y-1/2 hidden lg:block">
      <ul className="flex flex-col space-y-24">
        <li>
          <Link 
            href="#about" 
            className="text-black font-mono text-[13px] tracking-widest opacity-70 hover:opacity-100 transition-opacity"
            style={{ writingMode: 'vertical-rl' }}
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link 
            href="#experience" 
            className="text-black font-mono text-[13px] tracking-widest opacity-70 hover:opacity-100 transition-opacity"
            style={{ writingMode: 'vertical-rl' }}
          >
            EXPERIENCE
          </Link>
        </li>
        <li>
          <Link 
            href="#skills" 
            className="text-black font-mono text-[13px] tracking-widest opacity-70 hover:opacity-100 transition-opacity"
            style={{ writingMode: 'vertical-rl' }}
          >
            SKILLS
          </Link>
        </li>
        <li>
          <Link 
            href="#projects" 
            className="text-black font-mono text-[13px] tracking-widest opacity-70 hover:opacity-100 transition-opacity"
            style={{ writingMode: 'vertical-rl' }}
          >
            PROJECTS
          </Link>
        </li>
      </ul>
    </nav>
  );
}