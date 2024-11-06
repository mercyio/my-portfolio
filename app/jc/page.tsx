import React from "react";
import { HeroSection } from "../../components/BaseTemplate/hero";
import { WorkExperienceSection } from "../../components/BaseTemplate/work";
import { SkillsSection } from "../../components/BaseTemplate/skills";
import { ProjectsSection } from "../../components/BaseTemplate/projects";
import { FooterSection } from "../../components/BaseTemplate/footer";
import { BaseTemplateLayout } from "../../components/BaseTemplate/layout";

export default function Home() {
  return (
    <BaseTemplateLayout>
      <HeroSection />
      <WorkExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <FooterSection />
    </BaseTemplateLayout>
  );
}
