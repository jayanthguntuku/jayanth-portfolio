import { useInView } from "../hooks/useInView";

const skillCategories = [
  {
    name: "Frontend",
    color: "bg-blue-50 text-blue-700 border-blue-200",
    skills: ["React.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    name: "Backend",
    color: "bg-purple-50 text-purple-700 border-purple-200",
    skills: [
      "Node.js",
      "Golang",
      "Java",
      "Spring Boot",
      "REST APIs",
      "Microservices",
      "WebSocket",
    ],
  },
  {
    name: "Cloud & DevOps",
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    skills: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "Git"],
  },
  {
    name: "AI/ML",
    color: "bg-amber-50 text-amber-700 border-amber-200",
    skills: ["PyTorch", "Python", "CNN", "Deep Learning", "scikit-learn"],
  },
  {
    name: "Databases",
    color: "bg-rose-50 text-rose-700 border-rose-200",
    skills: ["MySQL", "SQL Server", "MongoDB", "DynamoDB"],
  },
  {
    name: "Testing",
    color: "bg-cyan-50 text-cyan-700 border-cyan-200",
    skills: ["Jest", "JUnit", "Jasmine", "React Testing Library"],
  },
];

function Skills() {
  const [ref, isInView] = useInView();

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-16 sm:py-20 px-6 bg-slate-50 transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 text-center">
          Skills
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="rounded-lg border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
            >
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
                {category.name}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs font-medium px-3 py-1 rounded-full border ${category.color}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
