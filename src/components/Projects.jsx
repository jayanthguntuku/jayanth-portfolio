import { projects } from "../data/resume";
import { useInView } from "../hooks/useInView";

function Projects() {
  const [ref, isInView] = useInView();

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-16 sm:py-20 px-6 bg-slate-50 transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 text-center">
          Projects
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="flex flex-col rounded-lg border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {project.name}
              </h3>

              <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-3 py-1 rounded-full border border-slate-200 bg-slate-50 text-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center w-full sm:w-auto self-start px-4 py-2 rounded-md bg-slate-900 text-white text-sm font-medium transition-all hover:bg-slate-700 hover:-translate-y-0.5"
                >
                  View on GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
