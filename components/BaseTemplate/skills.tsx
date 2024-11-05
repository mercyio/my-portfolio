import { UserSkills } from "../../data/skills";
import { BaseTemplate } from "../../data/templates/base";

export const SkillsSection = () => {
  if (!BaseTemplate.features.SKILLS_SECTION) return;

  return (
    <section className="container mx-auto px-4 mb-16">
      <h2 className="text-2xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {UserSkills.map((skill) => (
          <div
            key={skill.name}
            className="group relative flex flex-col bg-zinc-800/50 rounded-xl p-4 hover:bg-zinc-800 transition-colors border border-zinc-700"
          >
            <div className="flex items-center justify-between gap-4 mb-2">
              <h3 className="text-lg font-semibold">{skill.name}</h3>
              <span className="px-2 py-1 text-xs font-medium bg-zinc-700 text-zinc-200 rounded-full">
                {skill.projects_completed} projects
              </span>
            </div>
            <p className="text-sm text-zinc-400">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
