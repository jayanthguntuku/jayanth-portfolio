import { experience } from "../data/resume";
import { useInView } from "../hooks/useInView";

function WorkExperience() {
  const [ref, isInView] = useInView();

  return (
    <section
      id="experience"
      ref={ref}
      className={`py-16 sm:py-20 px-6 bg-white transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 text-center">
          Work Experience
        </h2>

        <div className="mt-12 relative">
          <div className="absolute left-2 sm:left-3 top-0 bottom-0 w-px bg-slate-200" />

          <div className="space-y-12">
            {experience.map((job) => (
              <div key={job.company} className="relative pl-10 sm:pl-12">
                <span className="absolute left-0 top-1.5 h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-white border-2 border-slate-900" />

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {job.company},{" "}
                    <span className="font-normal text-slate-600">
                      {job.location}
                    </span>
                  </h3>
                  <span className="text-sm text-slate-400">{job.period}</span>
                </div>

                <p className="mt-1 text-sm font-medium text-slate-500">
                  {job.role}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-3 py-1 rounded-full border border-slate-200 bg-slate-50 text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="mt-4 space-y-2">
                  {job.highlights.map((point) => (
                    <li
                      key={point}
                      className="text-sm text-slate-600 leading-relaxed flex gap-2"
                    >
                      <span className="text-slate-400">-</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
