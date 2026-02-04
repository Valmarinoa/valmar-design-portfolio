import ProjectCard from "./ProjectCard";
import { getProjects } from "@/data/projects";
import { getMessages } from "@/data/messages";
import { getServerLocale } from "@/lib/i18n-server";

export default function ProjectGrid() {
    const locale = getServerLocale();
    const messages = getMessages(locale);
    const projects = getProjects(locale);

    return (
        <section className="pt-14">
            
            <p className="px-4 pb-10 w-full text-xl text-neutral-800 leading-snug">
            {messages.home.intro}
            </p>
            <div className="px-4 py-10">
                <div className="grid grid-cols-2 gap-x-2 gap-y-10">
                    {projects.map((p) => (
                        <div
                        key={p.title}>
                        <ProjectCard
                            key={p.title}
                            slug={p.slug}
                            link={p.link}
                            title={p.title}
                            image={p.thumbnail}
                            video={p.heroVideo}
                            description={p.tagline ?? p.description}
                        />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
