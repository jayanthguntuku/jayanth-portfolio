import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaJava,
  FaPython,
  FaAws,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiGo,
  SiGooglecloud,
  SiKubernetes,
  SiMysql,
  SiMongodb,
  SiPytorch,
  SiApachekafka,
  SiClaudecode,
} from "react-icons/si";
import { useInView } from "../hooks/useInView";

const skills = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Golang", icon: SiGo, color: "#00ADD8" },
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE6" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
  { name: "Kafka", icon: SiApachekafka, color: "#000000" },
  { name: "Claude Code", icon: SiClaudecode, color: "#D97757" },
];

function Skills() {
  const [ref, isInView] = useInView();

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-16 sm:py-20 px-6 bg-alt transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 text-center">
          Technologies I Work With
        </h2>

        <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 sm:gap-8">
          {skills.map(({ name, icon: Icon, color }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-3 rounded-lg p-4 transition-transform duration-200 hover:scale-110"
            >
              <Icon size={48} color={color} />
              <span className="text-xs sm:text-sm font-medium text-slate-700 text-center">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
