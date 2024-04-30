"use client";
import { Cards } from "../ui/cards/cards";
import { personalProjects } from "@/utils/projects";

export function ProjectsSession() {
  return (
    <div className="grid place-items-center bg-blue-200 dark:bg-blue-600 py-16">
      <h2 className="text-5xl text"> Projetos</h2>
      <div className="grid grid-rows-4 md:grid-flow-col gap-8 py-12 px-8 ">
        {personalProjects.map((project) => (
          <Cards key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
