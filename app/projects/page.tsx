import { getAllProjects } from "@/lib/content/projects";
import Card from "../components/Card";

export default async function ProjectsPage() {
  const projects = await getAllProjects();
  return (
    <>
      <section className="w-full min-h-200 bg-[url(/index/mri.jpeg)] bg-cover">
        <div className="relative py-40 grid grid-cols-1 lg:grid-cols-3 gap-7 align-center">
          {projects.map((project) => (
            <div key={project.slug}>
              <h1>{project.title}</h1>
              <p>{project.shortDescription}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
