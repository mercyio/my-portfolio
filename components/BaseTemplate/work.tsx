import { UserWorkExperienceData } from "@/data/workExperience";
import { BaseTemplate } from "../../data/templates/base";

export const WorkExperienceSection = () => {
  if (!BaseTemplate.features.WORK_EXPERIENCE_SECTION) return;

  return (
    <section className="container mx-auto px-4 mb-16">
      <h2 className="text-2xl font-bold mb-8">Work Experience</h2>
      <div className="space-y-12">
        {UserWorkExperienceData.map((work) => (
          <div key={work.company}>
            <h3 className="text-lg font-semibold mb-1">{work.company}</h3>
            <p className="text-zinc-400 mb-4">
              {work.position} ({work.period})
            </p>
            <ul className="list-disc list-inside text-zinc-300 space-y-2">
              {work.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
