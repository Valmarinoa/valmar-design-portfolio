import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/data/projects";
import { getServerLocale } from "@/lib/i18n-server";
import ProjectDetailPage from "@/components/templates/ProjectDetailPage";

export default async function ProjectSlugPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    // ⬇️ unwrap the params Promise
    const { slug } = await params;
    const locale = await getServerLocale();
    const project = getProjectBySlug(locale, slug);
    

    if (!project) {
        notFound();
    }

    return <ProjectDetailPage project={project} />;
}
