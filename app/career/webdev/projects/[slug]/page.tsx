// ============================================================================
// Project Detail — /career/webdev/projects/[slug]
// ============================================================================
import ProjectDetailPage from "@/components/ProjectDetailPage";
import { PROJECTS_WEBDEV, PROJECT_DETAILS } from "@/lib/constants";

export function generateStaticParams() {
  return PROJECTS_WEBDEV.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const detail = PROJECT_DETAILS[slug];
  return { title: detail?.title ?? "Project" };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProjectDetailPage slug={slug} backHref="/career/webdev" accentColor="blue" />;
}
