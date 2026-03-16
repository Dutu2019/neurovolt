import { getAllProjects } from "@/lib/content/projects";
import Card from "../components/HomeCard";

export default async function ProjectsPage() {
  const projects = await getAllProjects();
  return (
    <>
      <section className="w-full min-h-200 bg-[url(/index/mri.jpeg)] bg-cover">
        <div className="relative flex align-center max-w-5xl m-auto py-40 gap-7">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="relative w-full bg-primary p-3 rounded-lg"
            >
              <h1 className="py-2 font-bold">{project.title}</h1>
              <p>{project.shortDescription}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
