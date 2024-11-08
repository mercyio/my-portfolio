"use client";

import { useRef } from "react";
import generatePDF from "react-to-pdf";

import ResumeWorkExperience from "../../components/Resume/workExperience";
import ResumeHeader from "../../components/Resume/header";
import { UserResumeData, UserResumeSections } from "../../data/resume";

export default function Resume() {
  const targetRef = useRef();

  return (
    <div className="container mx-auto max-w-[1000px] p-8 font-sans">
      <div
        className="bg-white p-8"
        ref={targetRef as unknown as React.RefObject<HTMLDivElement>}
      >
        {/* Header */}
        <ResumeHeader />

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
          {/* Left Column */}
          <aside>
            {/* Skills */}
            {UserResumeSections.skills && (
              <section className="mb-8">
                <h2 className="text-base font-bold mb-4 border-b border-black pb-1">
                  SKILLS
                </h2>
                <ul className="list-disc pl-4 space-y-2 text-sm text-black font-semibold">
                  {UserResumeData?.skills?.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Education */}
            {UserResumeSections.education && (
              <section className="mb-8">
                <h2 className="text-base font-bold mb-4 border-b border-black pb-1">
                  EDUCATION
                </h2>
                <div className="text-sm space-y-4 font-semibold">
                  {UserResumeData?.education?.map((education) => (
                    <p key={education}>{education}</p>
                  ))}
                </div>
              </section>
            )}

            {/* Spoken Languages */}
            {UserResumeSections.spokenLanguages && (
              <section>
                <h2 className="text-base font-bold mb-4 border-b border-black pb-1">
                  SPOKEN LANGUAGES
                </h2>
                <ul className="list-disc pl-4 text-sm font-semibold">
                  {UserResumeData?.spokenLanguages?.map((language) => (
                    <li key={language}>{language}</li>
                  ))}
                </ul>
              </section>
            )}
          </aside>

          {/* Right Column - Professional Experience */}
          <main className="order-first md:order-last">
            <h2 className="text-base font-bold mb-6 border-b border-black pb-1">
              PROFESSIONAL EXPERIENCE
            </h2>

            <ResumeWorkExperience />
          </main>
        </div>
      </div>

      <button
        onClick={() => generatePDF(targetRef, { filename: "resume.pdf" })}
        className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
      >
        Download PDF
      </button>
    </div>
  );
}
