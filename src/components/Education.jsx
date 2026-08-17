import { education } from "../data/resume";
import { useInView } from "../hooks/useInView";

function Education() {
  const [ref, isInView] = useInView();

  return (
    <section
      id="education"
      ref={ref}
      className={`py-16 sm:py-20 px-6 bg-white transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 text-center">
          Education
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {education.map((item) => (
            <div
              key={item.degree}
              className="rounded-lg border border-slate-200 bg-slate-50 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {item.degree}
              </h3>

              <p className="mt-2 text-sm text-slate-600">{item.school}</p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-slate-400">{item.period}</span>

                <span className="text-xs font-medium px-3 py-1 rounded-full border border-slate-200 bg-white text-slate-700">
                  GPA {item.gpa}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
