// ============================================================================
// IT Automation Career Page — /career/automation-it
// ============================================================================
"use client";

import CareerPage from "@/components/CareerPage";
import {
  SITE_OWNER,
  PROJECTS_AUTOMATION_IT,
  EXPERIENCE_AUTOMATION_IT,
  SKILLS_AUTOMATION_IT,
} from "@/lib/constants";

export default function AutomationITPage() {
  return (
    <CareerPage
      career="automation-it"
      accentColor="green"
      titleKey="automation.hero.title"
      subtitleKey="automation.hero.subtitle"
      bioKey="automation.hero.bio"
      projects={PROJECTS_AUTOMATION_IT}
      experience={EXPERIENCE_AUTOMATION_IT}
      skills={SKILLS_AUTOMATION_IT}
      cvUrl={SITE_OWNER.cvAutomationIT}
      projectBasePath="/career/automation-it/projects"
    />
  );
}
