// ============================================================================
// Industry 4.0 & Engineering Career Page — /career/industry
// ============================================================================
"use client";

import CareerPage from "@/components/CareerPage";
import {
  SITE_OWNER,
  PROJECTS_INDUSTRY_ENGINEERING,
  EXPERIENCE_INDUSTRY_ENGINEERING,
  SKILLS_INDUSTRY_ENGINEERING,
} from "@/lib/constants";

export default function IndustryEngineeringPage() {
  return (
    <CareerPage
      career="industry"
      accentColor="blue"
      titleKey="industry.hero.title"
      subtitleKey="industry.hero.subtitle"
      bioKey="industry.hero.bio"
      projects={PROJECTS_INDUSTRY_ENGINEERING}
      experience={EXPERIENCE_INDUSTRY_ENGINEERING}
      skills={SKILLS_INDUSTRY_ENGINEERING}
      cvUrl={SITE_OWNER.cvIndustryEngineering}
      cvLabelKey="hero.downloadCVMain"
      secondaryCvUrl={SITE_OWNER.cvDataEngineer}
      secondaryCvLabelKey="hero.downloadCVDataEngineer"
      tertiaryCvUrl={SITE_OWNER.cvRobotics}
      tertiaryCvLabelKey="hero.downloadCVRobotics"
      projectBasePath="/career/industry/projects"
    />
  );
}
