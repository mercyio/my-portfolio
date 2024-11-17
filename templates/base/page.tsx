import React from "react";
import { HeroSection } from "../../components/BaseTemplate/hero";
import { WorkExperienceSection } from "../../components/BaseTemplate/work";
import { SkillsSection } from "../../components/BaseTemplate/skills";
import { ProjectsSection } from "../../components/BaseTemplate/projects";
import { BaseTemplateLayout } from "../../components/BaseTemplate/layout";
import { BaseFooter } from "@/components/BaseTemplate/footer";

export default function BaseTemplate() {
  return (
    <BaseTemplateLayout>
      <HeroSection />
      <WorkExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <BaseFooter />
    </BaseTemplateLayout>
  );
}
