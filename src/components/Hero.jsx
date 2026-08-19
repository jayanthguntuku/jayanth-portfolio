import { profile } from "../data/resume";
import { useInView } from "../hooks/useInView";

const CODE_COLORS = {
  keyword: "#C586C0",
  variable: "#9CDCFE",
  key: "#569CD6",
  string: "#98C379",
  boolean: "#D19A66",
  punct: "#D4D4D4",
};

const CODE_LINES = [
  [
    { t: "const ", c: "keyword" },
    { t: "jayanth", c: "variable" },
    { t: " = {", c: "punct" },
  ],
  [
    { t: "  role", c: "key" },
    { t: ": ", c: "punct" },
    { t: '"Full-Stack Engineer"', c: "string" },
    { t: ",", c: "punct" },
  ],
  [
    { t: "  experience", c: "key" },
    { t: ": ", c: "punct" },
    { t: '"4+ years"', c: "string" },
    { t: ",", c: "punct" },
  ],
  [
    { t: "  location", c: "key" },
    { t: ": ", c: "punct" },
    { t: '"Texas, USA → India"', c: "string" },
    { t: ",", c: "punct" },
  ],
  [],
  [
    { t: "  currentlyLooking", c: "key" },
    { t: ": ", c: "punct" },
    { t: "true", c: "boolean" },
    { t: ",", c: "punct" },
  ],
  [
    { t: "  openTo", c: "key" },
    { t: ": ", c: "punct" },
    { t: '"Full-Stack roles in India"', c: "string" },
    { t: ",", c: "punct" },
  ],
  [],
  [
    { t: "  contact", c: "key" },
    { t: ": ", c: "punct" },
    { t: '"guntukujayanth35@gmail.com"', c: "string" },
  ],
  [{ t: "};", c: "punct" }],
];

function CodeBlock() {
  return (
    <div className="rounded-xl bg-[#1E1E1E] shadow-2xl overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 bg-[#2D2D2D]">
        <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
        <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
        <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
        <span className="ml-2 text-xs text-slate-400 font-mono">
          jayanth.js
        </span>
      </div>

      <div className="p-6 font-mono text-sm sm:text-[15px] leading-relaxed overflow-x-auto">
        {CODE_LINES.map((line, i) => (
          <div key={i} className="whitespace-pre">
            {line.length === 0
              ? " "
              : line.map((tok, j) => (
                  <span key={j} style={{ color: CODE_COLORS[tok.c] }}>
                    {tok.t}
                  </span>
                ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  const [ref, isInView] = useInView();

  return (
    <section
      id="hero"
      ref={ref}
      className={`min-h-screen flex items-center bg-white px-6 py-24 transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="order-2 md:order-1 text-center md:text-left">
          <p className="text-sm sm:text-base text-slate-500">Hi there 👋 I'm</p>

          <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            {profile.name}
          </h1>

          <p className="mt-3 text-xl sm:text-2xl font-medium text-slate-700">
            Full-Stack Software Engineer
          </p>

          <p className="mt-4 text-sm sm:text-base text-slate-500 max-w-md mx-auto md:mx-0">
            I build things that scale — clean frontends, robust backends, and
            everything in between.
          </p>

          <div className="mt-5 flex justify-center md:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.75}
                stroke="currentColor"
                className="h-4 w-4 flex-shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              Actively seeking opportunities in India
            </span>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-center md:items-start justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="w-full sm:w-auto px-6 py-3 rounded-md bg-slate-900 text-white text-sm font-medium transition-all hover:bg-slate-700 hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3 rounded-md border border-slate-300 text-slate-700 text-sm font-medium transition-all hover:border-slate-400 hover:bg-slate-50 hover:-translate-y-0.5"
            >
              Contact Me
            </a>
            <a
              href="/JayanthGuntuku_Resume.pdf"
              download
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-slate-300 text-slate-700 text-sm font-medium transition-all hover:border-slate-400 hover:bg-slate-50 hover:-translate-y-0.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Download Resume
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <CodeBlock />
        </div>
      </div>
    </section>
  );
}

export default Hero;
