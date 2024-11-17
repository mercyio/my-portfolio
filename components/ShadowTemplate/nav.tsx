"use client";
import Link from "next/link";

const navItems = [
  { href: "#about", label: "ABOUT" },
  { href: "#experience", label: "EXPERIENCE" },
  { href: "#skills", label: "SKILLS" },
  { href: "#projects", label: "PROJECTS" },
];

export function ShadowNav() {
  return (
    <nav className="fixed left-[40px] top-1/2 -translate-y-1/2 hidden lg:block">
      <ul className="flex flex-col space-y-24">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link 
              href={item.href}
              className="text-black font-mono text-[13px] tracking-widest opacity-70 hover:opacity-100 transition-opacity"
              style={{ writingMode: 'vertical-rl' }}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      </nav>)}