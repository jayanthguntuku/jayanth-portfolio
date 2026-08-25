export const profile = {
  name: "Jayanth Guntuku",
  title: "Full-Stack Software Engineer",
  subtitle: "4+ Years of Experience | Open to Opportunities in India",
  location: "Texas, USA",
  email: "guntukujayanth35@gmail.com",
  github: "jayanthguntuku",
  githubUrl: "https://github.com/jayanthguntuku",
  linkedin: "Jayanth Guntuku",
  linkedinUrl: "https://www.linkedin.com/in/jayanthguntuku",
};

export const experience = [
  {
    company: "Synapse ITS",
    location: "USA",
    role: "Software Engineer",
    period: "Dec 2024 - Present",
    stack: [
      "React",
      "Golang",
      "JavaScript",
      "REST APIs",
      "WebSocket",
      "MySQL",
      "Docker",
      "GCP",
      "AWS",
    ],
    highlights: [
      "Engineered 5+ full-stack features end-to-end improving page load performance by 40%",
      "Architected and maintained 30+ REST APIs in Go reducing integration issues by 30%",
      "Built Go-based gateway service bridging cloud infrastructure and 1000+ edge devices across 100+ agencies",
      "Rolled out RBAC across the platform reducing support tickets by 20%",
    ],
  },
  {
    company: "Syracuse University",
    location: "USA",
    role: "Software Intern + Graduate Teaching Assistant",
    period: "Aug 2023 - Nov 2024",
    stack: [
      "Java",
      "Spring Boot",
      "React",
      "MySQL",
      "Google Maps API",
      "Kafka",
      "Docker",
      "Kubernetes",
      "AWS",
    ],
    highlights: [
      "Built real-time campus shuttle tracking app serving 1000+ daily users",
      "Deployed predictive model cutting average wait times by 30% and increasing shuttle usage by 20%",
      "Architected system with Kafka and WebSocket achieving 99% uptime during peak hours",
    ],
  },
  {
    company: "Infosys",
    location: "India",
    role: "Systems Engineer",
    period: "Aug 2020 - May 2022",
    stack: [
      "Java",
      "Spring Boot",
      "React",
      "REST APIs",
      "SQL Server",
      "MySQL",
      "AWS",
    ],
    highlights: [
      "Delivered enterprise full-stack applications increasing user engagement by 25%",
      "Maintained 50+ REST APIs with 95% test coverage cutting production bugs by 30%",
      "Optimized SQL Server and MySQL schemas cutting query time by 15-20%",
    ],
  },
];

export const projects = [
  {
    name: "Online Examination Portal",
    description:
      "End-to-end full-stack exam platform with RBAC, adaptive difficulty, and automated grading. Reduced admin time by 50% and improved average grades by 10%.",
    stack: ["React", "Java", "Spring Boot", "Apache Kafka", "MySQL", "Docker"],
    githubUrl: null,
    details: {
      problem:
        "Universities needed a scalable exam platform that could handle concurrent students, prevent cheating, and automate grading.",
      approach:
        "Built end-to-end with a React frontend and a Java Spring Boot backend. Implemented RBAC so admins, teachers, and students each have different access levels.",
      challenges:
        "Handling concurrent exam submissions without data loss. Solved using Apache Kafka for async processing and load balancing.",
      results:
        "Reduced admin time by 50%, improved average grades by 10%, cut question disputes by 20%.",
      tech: ["React", "Java", "Spring Boot", "Apache Kafka", "MySQL", "Docker"],
    },
  },
  {
    name: "Campus Shuttle Tracker",
    description:
      "Real-time campus shuttle tracking app with live locations and ETAs serving 1000+ daily users. Achieved 99% uptime during peak hours.",
    stack: ["React", "Java", "Spring Boot", "Google Maps API", "WebSocket", "Kafka", "AWS"],
    githubUrl: null,
    details: {
      problem:
        "1000+ students had no visibility into shuttle locations or arrival times, causing frustration and missed shuttles.",
      approach:
        "Built a real-time tracking app integrating the Google Maps API for live locations. Added a predictive model on historical data to forecast ETAs. Used WebSocket for real-time data delivery and Kafka for event-driven processing.",
      challenges:
        "Maintaining real-time accuracy at scale during peak hours. Solved with WebSocket connections and Kafka event streaming, achieving 99% uptime.",
      results:
        "Served 1000+ daily users, cut average wait times by 30%, increased shuttle usage by 20%.",
      tech: ["React", "Java", "Spring Boot", "Google Maps API", "WebSocket", "Kafka", "AWS"],
    },
  },
  {
    name: "Image Super Resolution CNN",
    description:
      "Deep CNN with residual learning achieving 30.60 dB PSNR and 0.8961 SSIM, surpassing the 30 dB industry threshold. Trained on 500 BSD images across 300 epochs.",
    stack: ["PyTorch", "Python", "NumPy", "Google Colab", "CUDA"],
    githubUrl: "https://github.com/jayanthguntuku/image-super-resolution",
    details: {
      problem:
        "Low resolution images lose critical detail when upscaled using traditional methods, which is a major limitation in computer vision applications.",
      approach:
        "Engineered a 6-layer deep CNN with residual learning in PyTorch. Used L1Loss instead of MSELoss for sharper results and StepLR scheduling to stabilize training. Built a custom degradation pipeline to generate 128x128 training pairs.",
      challenges:
        "Training instability and slow convergence over 300 epochs on limited GPU. Solved by adding residual connections and switching loss functions, which reduced validation loss by 78%.",
      results:
        "Achieved 30.60 dB PSNR and 0.8961 SSIM on 200 test images, surpassing the 30 dB industry threshold. Improved PSNR by +1.67 dB over baseline.",
      tech: ["PyTorch", "Python", "NumPy", "Google Colab T4 GPU", "scikit-image"],
    },
  },
  {
    name: "IPL Match Predictor",
    description:
      "ML model predicting IPL match winners with backtesting across 2008-2026 data. Achieved 53.52% accuracy on 2025 season backtest.",
    stack: ["Python", "scikit-learn", "Pandas", "Random Forest", "Matplotlib"],
    githubUrl: "https://github.com/jayanthguntuku/ipl-match-predictor",
    details: {
      problem:
        "Predicting cricket match outcomes is complex due to constantly changing team compositions, venues, and season form.",
      approach:
        "Merged 3 datasets covering 2008-2026. Engineered features including home ground advantage, all-time win rate, recent 2-season form, toss advantage, and playoff flags. Used Random Forest for its robustness with tabular sports data.",
      challenges:
        "Dataset inconsistencies across different sources and years. Verified and cleaned data carefully before training to avoid model errors.",
      results:
        "Achieved 53.52% accuracy on 2025 backtest and correctly predicted RCB winning both the 2025 and 2026 IPL Finals.",
      tech: ["Python", "scikit-learn", "Pandas", "Random Forest", "Matplotlib"],
    },
  },
];

export const skills = {
  Frontend: [
    "Angular",
    "React.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "State Management",
  ],
  Backend: [
    "Node.js",
    "Golang",
    "Java",
    "Spring Boot",
    "REST APIs",
    "Microservices",
    "WebSocket",
    ".NET Core",
  ],
  "System Design": ["Distributed Systems", "Scalability", "API Design", "Microservices Architecture"],
  "Cloud & DevOps": [
    "AWS (EC2, S3, Lambda, RDS)",
    "GCP",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Git",
  ],
  "AI/ML": ["PyTorch", "CNN", "Deep Learning", "Python", "NumPy", "scikit-learn"],
  Testing: ["Jest", "React Testing Library", "JUnit", "Jasmine"],
  Databases: ["MySQL", "SQL Server", "MongoDB", "DynamoDB"],
};

export const education = [
  {
    degree: "M.S. in Computer and Information Science",
    school: "Syracuse University, USA",
    period: "Aug 2022 - May 2024",
    gpa: "3.9 / 4.0",
  },
  {
    degree: "B.Tech in Computer Science and Engineering",
    school: "Gayatri Vidya Parishad College of Engineering, Vizag, India",
    period: "Aug 2016 - Aug 2020",
    gpa: "8.43 / 10.0",
  },
];
