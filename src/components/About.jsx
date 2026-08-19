import { useInView } from "../hooks/useInView";

const highlights = [
  { value: "4+", label: "Years Experience" },
  { value: "2", label: "USA & India" },
  { value: "3.9/4.0", label: "GPA - Masters" },
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

        <p className="mt-4 text-base sm:text-lg text-slate-600 text-left leading-relaxed max-w-2xl mx-auto">
          I'm a Full-Stack Software Engineer with 4+ years of experience
          building scalable web applications and distributed systems. My
          journey started at Infosys in India, where I built enterprise
          applications serving thousands of users. I then pursued my
          Master's in Computer Science at Syracuse University (GPA
          3.9/4.0), where I built real-time systems handling 1000+ daily
          users. Currently at Synapse ITS in the USA, I architect
          cloud-native solutions connecting 1000+ devices across 100+
          agencies using React, Golang, AWS and GCP. I'm now actively
          seeking full-stack opportunities back in India, where I can bring
          my US product engineering experience to high-impact teams.
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
