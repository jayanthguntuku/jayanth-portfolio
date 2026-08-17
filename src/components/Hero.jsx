import { profile } from "../data/resume";
import { useInView } from "../hooks/useInView";

function Hero() {
  const [ref, isInView] = useInView();

  return (
    <section
      id="hero"
      ref={ref}
      className={`min-h-screen flex items-center justify-center bg-white px-6 transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
          {profile.name}
        </h1>

        <p className="mt-4 text-xl sm:text-2xl font-medium text-slate-700">
          {profile.title}
        </p>

        <p className="mt-2 text-sm sm:text-base text-slate-500">
          {profile.subtitle}
        </p>

        <p className="mt-3 text-sm text-slate-400">
          Based in {profile.location} | Actively seeking opportunities in India
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
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
        </div>
      </div>
    </section>
  );
}

export default Hero;
