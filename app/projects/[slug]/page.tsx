import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectDetailPage from "@/components/templates/ProjectDetailPage";

export default async function ProjectSlugPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    // ⬇️ unwrap the params Promise
    const { slug } = await params;

    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return <ProjectDetailPage project={project} />;
}
