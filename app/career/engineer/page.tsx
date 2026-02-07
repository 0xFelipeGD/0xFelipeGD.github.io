// ============================================================================
// Engineer Career Page — /career/engineer
// ============================================================================
"use client";

import CareerPage from "@/components/CareerPage";
import { SITE_OWNER, PROJECTS_ENGINEER, EXPERIENCE_ENGINEER, SKILLS_ENGINEER } from "@/lib/constants";

export default function EngineerPage() {
  return (
    <CareerPage
      career="engineer"
      accentColor="purple"
      titleKey="engineer.hero.title"
      subtitleKey="engineer.hero.subtitle"
      bioKey="engineer.hero.bio"
      projects={PROJECTS_ENGINEER}
      experience={EXPERIENCE_ENGINEER}
      skills={SKILLS_ENGINEER}
      cvUrl={SITE_OWNER.cvEngineer}
      projectBasePath="/career/engineer/projects"
    />
  );
}
