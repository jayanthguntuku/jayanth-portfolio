import { useEffect } from "react";
import { createPortal } from "react-dom";

const SECTIONS = [
  { key: "problem", label: "Problem" },
  { key: "approach", label: "Approach & Key Decisions" },
  { key: "challenges", label: "Challenges & Solutions" },
  { key: "results", label: "Results & Impact" },
];

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;

    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return createPortal(
    <div
      role="presentation"
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/60 px-4 py-8 backdrop-blur-sm"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-6 py-5">
          <h3 id="project-modal-title" className="text-xl font-bold text-slate-900">
            {project.name}
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="flex-shrink-0 text-slate-400 transition-colors hover:text-slate-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="space-y-6">
            {SECTIONS.map((section) => (
              <div key={section.key}>
                <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  {section.label}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {project.details[section.key]}
                </p>
              </div>
            ))}

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Tech Stack
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.details.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default ProjectModal;
