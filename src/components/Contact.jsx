import { profile } from "../data/resume";
import { useInView } from "../hooks/useInView";

const contactItems = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.25 6.75c0-.828.672-1.5 1.5-1.5h16.5c.828 0 1.5.672 1.5 1.5v10.5a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5V6.75zm0 0l9.75 6.75 9.75-6.75"
      />
    ),
  },
  {
    label: "LinkedIn",
    value: profile.linkedin,
    href: profile.linkedinUrl,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.75 9.75v7.5m0-10.5v.008M11.25 17.25v-4.5a2.25 2.25 0 014.5 0v4.5m-4.5 0h4.5m-4.5 0v-7.5m-8.25 7.5V6.75A2.25 2.25 0 014.5 4.5h15A2.25 2.25 0 0121.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25z"
      />
    ),
  },
  {
    label: "GitHub",
    value: profile.github,
    href: profile.githubUrl,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .09-1.42-.5-2 2.79-.31 5.5-1.365 5.5-6.155a4.885 4.885 0 00-1.4-3.41 4.507 4.507 0 00-.12-3.42s-1.14-.345-3.73 1.31a13.028 13.028 0 00-6.7 0c-2.6-1.655-3.74-1.31-3.74-1.31a4.507 4.507 0 00-.12 3.42 4.885 4.885 0 00-1.4 3.41c0 4.78 2.7 5.845 5.5 6.155-.35.31-.665.855-.5 2V21"
      />
    ),
  },
  {
    label: "Location",
    value: "Texas, USA → Relocating to India",
    href: null,
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </>
    ),
  },
];

function Contact() {
  const [ref, isInView] = useInView();

  return (
    <section
      id="contact"
      ref={ref}
      // Extra bottom padding keeps the floating chat bubble / scroll-to-top button
      // from covering the footer once the page is scrolled all the way down.
      className={`pt-16 sm:pt-20 pb-32 sm:pb-24 px-6 bg-slate-50 transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-900">Let's Connect</h2>

        <p className="mt-4 text-base text-slate-600 max-w-xl mx-auto">
          I'm actively looking for full-stack opportunities in India. Feel
          free to reach out!
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {contactItems.map((item) => {
            const Wrapper = item.href ? "a" : "div";
            const wrapperProps = item.href
              ? {
                  href: item.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <Wrapper
                key={item.label}
                {...wrapperProps}
                className="flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
              >
                <span className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-slate-100 text-slate-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    {item.icon}
                  </svg>
                </span>

                <span>
                  <span className="block text-xs font-medium text-slate-400 uppercase tracking-wide">
                    {item.label}
                  </span>
                  <span className="block text-sm font-medium text-slate-800 break-all">
                    {item.value}
                  </span>
                </span>
              </Wrapper>
            );
          })}
        </div>
      </div>

      <footer className="mt-16 pt-8 border-t border-slate-200 text-center">
        <p className="text-sm text-slate-400">
          © 2026 Jayanth Guntuku. Built with React & Tailwind CSS
        </p>
      </footer>
    </section>
  );
}

export default Contact;
