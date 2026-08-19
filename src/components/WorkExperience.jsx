import { useEffect, useRef, useState } from "react";
import { experience } from "../data/resume";
import { useInView } from "../hooks/useInView";

const CARD_WIDTH = 42;
const DOT_NEAR_LEFT_CARD = 46;
const DOT_NEAR_RIGHT_CARD = 54;

function TimelineItem({ job, index, isLeft, isActive }) {
  const [ref, isInView] = useInView();
  const number = String(index + 1).padStart(2, "0");

  return (
    <div ref={ref} className="relative">
      <span
        className={`md:hidden absolute left-4 top-6 h-4 w-4 -translate-x-1/2 rounded-full border-2 z-10 transition-colors duration-300 ${
          isActive ? "border-slate-900 bg-slate-900" : "border-slate-300 bg-white"
        }`}
      />

      <div
        className={`pl-12 md:pl-0 transition-all duration-700 ease-out md:flex ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        } ${isLeft ? "md:justify-start" : "md:justify-end"}`}
      >
        <div
          style={{ width: `${CARD_WIDTH}%` }}
          className={`w-full md:w-auto relative rounded-lg border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
            isActive
              ? "border-slate-900/30 shadow-lg -translate-y-1"
              : "border-slate-200 hover:border-slate-300"
          }`}
        >
          <span
            className={`md:hidden absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white shadow-md transition-colors duration-300 ${
              isActive ? "bg-slate-900" : "bg-slate-400"
            }`}
          >
            {number}
          </span>

          <div
            className={`h-1.5 rounded-t-lg transition-colors duration-300 ${
              isActive
                ? "bg-gradient-to-r from-slate-900 to-slate-600"
                : "bg-gradient-to-r from-slate-300 to-slate-200"
            }`}
          />

          <div className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="text-lg font-bold text-slate-900">
                {job.company}
              </h3>
              <span className="text-xs text-slate-400">{job.period}</span>
            </div>

            <div className="mt-1 flex flex-wrap items-baseline gap-x-2">
              <p className="text-base font-medium text-slate-700">
                {job.role}
              </p>
              <span className="text-xs text-slate-400">· {job.location}</span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {job.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium px-2.5 py-1 rounded-full border border-slate-200 bg-slate-50 text-slate-600"
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul className="mt-4 space-y-2 text-left">
              {job.highlights.map((point) => (
                <li
                  key={point}
                  className="text-sm text-slate-600 leading-relaxed flex gap-2"
                >
                  <span className="text-slate-400">›</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkExperience() {
  const [ref, isInView] = useInView();
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);

  const n = experience.length;
  const points = experience.map((job, i) => ({
    x: i % 2 === 0 ? DOT_NEAR_LEFT_CARD : DOT_NEAR_RIGHT_CARD,
    y: ((i + 0.5) / n) * 100,
    current: job.period.includes("Present"),
  }));

  const pathD = points.reduce((acc, p, i) => {
    if (i === 0) return `M ${p.x} ${p.y}`;
    const prev = points[i - 1];
    const midY = (prev.y + p.y) / 2;
    return `${acc} C ${prev.x} ${midY}, ${p.x} ${midY}, ${p.x} ${p.y}`;
  }, "");

  useEffect(() => {
    let ticking = false;

    function update() {
      const node = containerRef.current;
      ticking = false;
      if (!node) return;

      const rect = node.getBoundingClientRect();
      const anchor = window.innerHeight * 0.5;
      const raw = (anchor - rect.top) / rect.height;
      const nextProgress = Math.min(1, Math.max(0, raw));

      setProgress(nextProgress);

      let idx = -1;
      points.forEach((p, i) => {
        if (nextProgress >= p.y / 100) idx = i;
      });
      setActiveIndex(idx);
    }

    function handleScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [n]);

  return (
    <section
      id="experience"
      ref={ref}
      className={`py-16 sm:py-20 px-6 bg-white transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 text-center">
          Work Experience
        </h2>

        <div ref={containerRef} className="mt-16 relative">
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-slate-200 overflow-hidden">
            <div
              className="absolute inset-x-0 top-0 bg-slate-900 transition-[height] duration-150 ease-out"
              style={{ height: `${progress * 100}%` }}
            />
          </div>

          <svg
            className="hidden md:block absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d={pathD}
              stroke="#CBD5E1"
              strokeWidth="2"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div
            className="hidden md:block absolute inset-0 overflow-hidden transition-[clip-path] duration-150 ease-out"
            style={{ clipPath: `inset(0 0 ${(1 - progress) * 100}% 0)` }}
          >
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d={pathD}
                stroke="#1A1A1A"
                strokeWidth="2.5"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

          <div className="hidden md:block">
            {points.map((p, i) => {
              const active = i === activeIndex;
              const passed = i < activeIndex;
              return (
                <span
                  key={i}
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}
                >
                  {p.current && (
                    <span className="absolute inset-0 rounded-full bg-slate-900 opacity-50 animate-ping" />
                  )}
                  <span
                    className={`relative flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs font-bold shadow-md transition-all duration-300 ${
                      active
                        ? "border-slate-900 bg-slate-900 text-white scale-110"
                        : passed
                          ? "border-slate-900 bg-white text-slate-900"
                          : "border-slate-300 bg-white text-slate-400"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </span>
              );
            })}
          </div>

          <div className="space-y-12 md:space-y-20">
            {experience.map((job, index) => (
              <TimelineItem
                key={job.company}
                job={job}
                index={index}
                isLeft={index % 2 === 0}
                isActive={index === activeIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
