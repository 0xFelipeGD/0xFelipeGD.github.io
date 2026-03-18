// ============================================================================
// Full-Stack Developer Career Page — /career/dev
// ============================================================================
"use client";

import CareerPage from "@/components/CareerPage";
import { SITE_OWNER, PROJECTS_WEBDEV, EXPERIENCE_WEBDEV, SKILLS_WEBDEV } from "@/lib/constants";

export default function DevPage() {
  return (
    <CareerPage
      career="dev"
      accentColor="blue"
      titleKey="developer.hero.title"
      subtitleKey="developer.hero.subtitle"
      bioKey="developer.hero.bio"
      projects={PROJECTS_WEBDEV}
      experience={EXPERIENCE_WEBDEV}
      skills={SKILLS_WEBDEV}
      cvUrl={SITE_OWNER.cvWebDev}
      projectBasePath="/career/dev/projects"
    />
  );
}
