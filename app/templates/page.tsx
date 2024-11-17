"use client";

import { motion } from "framer-motion";
import { AVAILABLE_TEMPLATES } from "@/data/templates/config";
import Link from "next/link";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const templates = [
  {
    name: "Base",
    key: AVAILABLE_TEMPLATES.BASE,
    description: "Clean and minimal portfolio template with dark mode",
    image: "/images/templates/base.png",
  },
  {
    name: "Shadow",
    key: AVAILABLE_TEMPLATES.SHADOW,
    description: "Modern and elegant template with subtle shadows",
    image: "/images/templates/shadow.png",
  },
  // Add more templates here
];

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="py-24 px-4 text-center bg-gradient-to-b from-gray-800 to-gray-900">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Choose Your Template
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Select from our collection of professionally designed portfolio templates.
          Each template is fully customizable to match your personal brand.
        </p>
      </header>

      {/* Templates Grid */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {templates.map((template) => (
            <motion.div
              key={template.key}
              variants={itemVariants}
              className="group"
            >
              <Link
                href={`/demo?template=${template.key}`}
                className="block bg-gray-800 rounded-xl overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={template.image}
                    alt={template.name}
                    fill
                    className="object-cover transform transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {template.name}
                  </h3>
                  <p className="text-gray-400">{template.description}</p>
                  <div className="mt-4 inline-flex items-center text-blue-400 font-medium">
                    View Demo
                    <svg
                      className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
