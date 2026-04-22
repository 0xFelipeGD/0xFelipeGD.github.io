// ============================================================================
// SaaS & Automation Career Page — /career/automation-it
// ============================================================================
"use client";

import CareerPage from "@/components/CareerPage";
import {
  SITE_OWNER,
  PROJECTS_SAAS_AUTOMATION,
  EXPERIENCE_SAAS_AUTOMATION,
  SKILLS_SAAS_AUTOMATION,
} from "@/lib/constants";

export default function SaasAutomationPage() {
  return (
    <CareerPage
      career="automation-it"
      accentColor="green"
      titleKey="automation.hero.title"
      subtitleKey="automation.hero.subtitle"
      bioKey="automation.hero.bio"
      projects={PROJECTS_SAAS_AUTOMATION}
      experience={EXPERIENCE_SAAS_AUTOMATION}
      skills={SKILLS_SAAS_AUTOMATION}
      cvUrl={SITE_OWNER.cvSaasAutomation}
      projectBasePath="/career/automation-it/projects"
    />
  );
}
