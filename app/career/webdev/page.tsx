// ============================================================================
// Full-Stack Developer Career Page — /career/webdev
// ============================================================================
"use client";

import CareerPage from "@/components/CareerPage";
import { SITE_OWNER, PROJECTS_WEBDEV, EXPERIENCE_WEBDEV, SKILLS_WEBDEV } from "@/lib/constants";

export default function WebDevPage() {
  return (
    <CareerPage
      career="webdev"
      accentColor="blue"
      titleKey="developer.hero.title"
      subtitleKey="developer.hero.subtitle"
      bioKey="developer.hero.bio"
      projects={PROJECTS_WEBDEV}
      experience={EXPERIENCE_WEBDEV}
      skills={SKILLS_WEBDEV}
      cvUrl={SITE_OWNER.cvWebDev}
      projectBasePath="/career/webdev/projects"
    />
  );
}
