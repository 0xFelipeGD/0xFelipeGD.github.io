// ============================================================================
// Industry 4.0 Career Page — /career/industry
// ============================================================================
"use client";

import CareerPage from "@/components/CareerPage";
import { SITE_OWNER, PROJECTS_INDUSTRY, EXPERIENCE_INDUSTRY, SKILLS_INDUSTRY } from "@/lib/constants";

export default function IndustryPage() {
  return (
    <CareerPage
      career="industry"
      accentColor="blue"
      titleKey="industry.hero.title"
      subtitleKey="industry.hero.subtitle"
      bioKey="industry.hero.bio"
      projects={PROJECTS_INDUSTRY}
      experience={EXPERIENCE_INDUSTRY}
      skills={SKILLS_INDUSTRY}
      cvUrl={SITE_OWNER.cvIndustry}
      projectBasePath="/career/industry/projects"
    />
  );
}
