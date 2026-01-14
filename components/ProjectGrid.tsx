import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectGrid() {
    return (
        <section className="pt-14">
            
            <p className="px-4 pb-10 w-full text-xl text-neutral-800 leading-snug">

            Hi! I’m Valentina Marino,
born and raised in Colombia, currently based in the Netherlands.
I love finding ways to bring poetry into everyday objects and technologies.
My work explores how the sensibility of Latin American magical realism can live in contemporary design.
I’m interested in how poetry and a bit of magic can exist in everyday technology, using both handcrafted and digital tools.
            </p>
            <div className="px-4 py-10">
                <div className="grid grid-cols-2 gap-x-2 gap-y-10">
                    {projects.map((p) => (
                        <div
                        key={p.slug}>
                        <ProjectCard
                            key={p.slug}
                            slug={p.slug}
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
