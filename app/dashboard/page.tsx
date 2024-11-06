import { AddSkillDialog } from "@/components/dashboard/add-skill-dialog";
import { AddProjectDialog } from "@/components/dashboard/add-project-dialog";
import { UserProjects } from "../../data/projects";
import { UserSkills } from "../../data/skills";
import { UserWorkExperience } from "../../data/workExperience";
import { AddWorkExperienceDialog } from "../../components/dashboard/add-work-experience-dialog";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="p-4 bg-zinc-900 rounded-lg border border-zinc-800">
          <h3 className="text-sm font-medium text-zinc-400">Total Projects</h3>
          <p className="text-2xl font-bold text-white mt-2">12</p>
        </div>
        <div className="p-4 bg-zinc-900 rounded-lg border border-zinc-800">
          <h3 className="text-sm font-medium text-zinc-400">Skills</h3>
          <p className="text-2xl font-bold text-white mt-2">24</p>
        </div>
        <div className="p-4 bg-zinc-900 rounded-lg border border-zinc-800">
          <h3 className="text-sm font-medium text-zinc-400">Work Experience</h3>
          <p className="text-2xl font-bold text-white mt-2">5</p>
        </div>
        <div className="p-4 bg-zinc-900 rounded-lg border border-zinc-800">
          <h3 className="text-sm font-medium text-zinc-400">Portfolio Views</h3>
          <p className="text-2xl font-bold text-white mt-2">1.2k</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-zinc-900 rounded-lg border border-zinc-800">
          <h3 className="text-lg font-semibold text-white mb-4">
            Recent Projects
          </h3>
          <div className="space-y-4">
            {UserProjects.slice(0, 3).map((project) => (
              <div key={project.title} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-zinc-800 flex items-center justify-center">
                  📁
                </div>
                <div>
                  <p className="text-sm font-medium text-white">
                    {project.title}
                  </p>
                  <p className="text-xs text-zinc-400">{project.role}</p>
                </div>
              </div>
            ))}
          </div>
          <AddProjectDialog />
        </div>

        <div className="p-6 bg-zinc-900 rounded-lg border border-zinc-800">
          <h3 className="text-lg font-semibold text-white mb-4">Top Skills</h3>
          <div className="space-y-4">
            {UserSkills.slice(0, 3).map((skill) => (
              <div
                key={skill.name}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-zinc-800 flex items-center justify-center">
                    💪
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      {skill.name}
                    </p>
                    <p className="text-xs text-zinc-400">
                      {skill.projects_completed} projects
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <AddSkillDialog />
        </div>

        <div className="p-6 bg-zinc-900 rounded-lg border border-zinc-800">
          <h3 className="text-lg font-semibold text-white mb-4">
            Work Experience
          </h3>
          <div className="space-y-4">
            {UserWorkExperience.slice(0, 3).map((work) => (
              <div key={work.company} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-zinc-800 flex items-center justify-center">
                  💼
                </div>
                <div>
                  <p className="text-sm font-medium text-white">
                    {work.company}
                  </p>
                  <p className="text-xs text-zinc-400">{work.position}</p>
                </div>
              </div>
            ))}
          </div>
          <AddWorkExperienceDialog />
        </div>
      </div>
    </div>
  );
}
