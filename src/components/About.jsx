import { useInView } from "../hooks/useInView";

const highlights = [
  { value: "4+", label: "Years Experience" },
  { value: "2", label: "Countries Worked (India, USA)" },
  { value: "3.9", label: "GPA - Masters, Syracuse University" },
];

function About() {
  const [ref, isInView] = useInView();

  return (
    <section
      id="about"
      ref={ref}
      className={`py-16 sm:py-20 px-6 bg-white transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 text-center">
          About Me
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-600 text-center leading-relaxed max-w-2xl mx-auto">
          Full-Stack Software Engineer with 4+ years of experience building
          scalable web applications and distributed systems. Worked across
          React, Golang, Java Spring Boot, and cloud platforms (AWS, GCP).
          Currently based in Texas, USA, actively seeking full-stack
          opportunities in India.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-slate-200 bg-slate-50 py-8 px-4 text-center transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
            >
              <p className="text-3xl font-bold text-slate-900">
                {item.value}
              </p>
              <p className="mt-2 text-sm text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
