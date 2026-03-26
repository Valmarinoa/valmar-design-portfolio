import ProjectGridClient from "./ProjectGridClient";
import { getProjects } from "@/data/projects";
import { getMessages } from "@/data/messages";
import { getServerLocale } from "@/lib/i18n-server";

export default async function ProjectGrid() {
  const locale = await getServerLocale();
  const messages = getMessages(locale);
  const projects = getProjects(locale);

  return (
    <ProjectGridClient 
      projects={projects} 
      desktopBlurb={messages.home.desktopBlurb} 
      question={messages.home.question ?? ""} 
    />
  );
}