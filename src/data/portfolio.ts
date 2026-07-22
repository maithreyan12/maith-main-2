// ─────────────────────────────────────────────────────────────
// Portfolio data — edit here to update all sections at once
// ─────────────────────────────────────────────────────────────

export const AUTHOR = {
  name: "Maithreyan D",
  shortName: "Maithreyan",
  title: "MERN Stack Developer & App Developer",
  bio: "I am an enthusiastic Information Technology student in my 3rd year, passionate about designing and developing modern, user-friendly websites. With hands-on experience in HTML, CSS, JavaScript, and frameworks like React and Django, I love turning creative ideas into functional, responsive designs. As a Mac user, I'm proficient in using macOS development environments such as VS Code, Xcode, and design tools like Figma for UI/UX creation. I'm comfortable with cross-platform testing and optimization to ensure a seamless user experience. Currently exploring both front-end and full-stack development, I'm eager to apply my skills in real-world projects and collaborate with teams to build impactful digital solutions.",
  email: "maithreyan2006@gmail.com",
  linkedin: "https://www.linkedin.com/in/maithreyan-d-93924a2a6",
  github: "https://github.com/maithreyan12",
  cvAsset: "/assets/Maithreyan-Resume.pdf",
  cvDownloadName: "Maithreyan-Resume.pdf",
  profilePic: "/assets/profile-pic.png",
  aboutPic: "/assets/about-pic.jpeg",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export interface Skill {
  name: string;
  level: "Basic" | "Intermediate" | "Experienced";
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", level: "Experienced" },
      { name: "CSS", level: "Experienced" },
      { name: "SASS", level: "Intermediate" },
      { name: "JavaScript", level: "Basic" },
      { name: "TypeScript", level: "Basic" },
      { name: "Material UI", level: "Intermediate" },
    ],
  },
  {
    title: "Backend & Tools",
    skills: [
      { name: "PostgreSQL", level: "Basic" },
      { name: "Node JS", level: "Intermediate" },
      { name: "Express JS", level: "Intermediate" },
      { name: "Git", level: "Intermediate" },
    ],
  },
];

// Professional skill icon grid
export interface SkillIcon {
  name: string;
  icon: string; // devicon CDN URL
  color: string; // glow/accent color
}

export const SKILL_ICONS: SkillIcon[] = [
  { name: "HTML5",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",          color: "#e34f26" },
  { name: "CSS3",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",            color: "#1572b6" },
  { name: "JavaScript",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", color: "#f7df1e" },
  { name: "TypeScript",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", color: "#3178c6" },
  { name: "React JS",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",           color: "#61dafb" },
  { name: "Node JS",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",         color: "#339933" },
  { name: "Express JS",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",       color: "#eeeeee" },
  { name: "MongoDB",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",       color: "#47a248" },
  { name: "Flutter",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",       color: "#54c5f8" },
  { name: "Dart",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",             color: "#0175c2" },
  { name: "Git",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",               color: "#f05032" },
  { name: "GitHub",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",         color: "#eeeeee" },
  { name: "SASS",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",             color: "#cc6699" },
  { name: "PostgreSQL",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", color: "#4169e1" },
  { name: "Figma",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",           color: "#f24e1e" },
  { name: "Xcode",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xcode/xcode-original.svg",           color: "#147efb" },
  { name: "VS Code",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",         color: "#007acc" },
  { name: "Python",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",         color: "#3776ab" },
];

export interface Project {
  title: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Sentiment Analysis",
    image: "/assets/project-1.png",
    githubUrl: "https://github.com/maithreyan12/antigravity-sentiment-sphere.git",
    liveUrl: "https://sentimentanalyse.vercel.app",
  },
  {
    title: "FakeNews-Detector",
    image: "/assets/project-2.png",
    githubUrl: "https://github.com/maithreyan12/fakenewsdetector",
    liveUrl: "https://fakenewsdetector-alpha.vercel.app/",
  },
  {
    title: "Project Three",
    image: "/assets/project-3.png",
    githubUrl: "https://github.com/",
    liveUrl: "https://github.com/",
  },
];

export const ABOUT_CARDS = [
  {
    icon: "/assets/experience.png",
    iconAlt: "Experience icon",
    heading: "Experience",
    description: "2+ years\nFrontend Development",
  },
  {
    icon: "/assets/education.png",
    iconAlt: "Education icon",
    heading: "Education",
    description: "B-TECH\nInformation Technology",
  },
] as const;

// Quick navigation menu items (floating sidebar)
export const QUICK_NAV = [
  { label: "Profile", href: "#profile", icon: "profile" },
  { label: "Skills", href: "#skills", icon: "experience" },
  { label: "Experience", href: "#experience", icon: "experience" },
  { label: "Projects", href: "#projects", icon: "projects" },
  { label: "Contact", href: "#contact", icon: "contact" },
] as const;

// Chatbot knowledge base
export const CHATBOT_KB = {
  greetings: ["hello", "hi", "hey", "greetings", "sup", "what's up"],
  contact: {
    triggers: ["email", "contact", "reach", "gmail", "phone", "call", "message"],
    response: `You can contact Maithreyan at:\n📧 Email: ${AUTHOR.email}\n💼 LinkedIn: linkedin.com/in/maithreyan-d-93924a2a6\n🐙 GitHub: github.com/maithreyan12`,
  },
  skills: {
    triggers: ["skill", "technology", "tech", "know", "language", "framework", "stack", "use", "familiar"],
    response: `Maithreyan's technical skills include:\n\n**Frontend:** HTML (Experienced), CSS (Experienced), SASS (Intermediate), JavaScript (Basic), TypeScript (Basic), Material UI (Intermediate)\n\n**Backend & Tools:** PostgreSQL (Basic), Node.js (Intermediate), Express.js (Intermediate), Git (Intermediate)\n\nHe's also working with React and Django frameworks.`,
  },
  projects: {
    triggers: ["project", "work", "portfolio", "build", "create", "made", "develop", "app"],
    response: `Here are Maithreyan's key projects:\n\n🔍 **Sentiment Analysis** — Live at sentimentanalyse.vercel.app\n📰 **FakeNews Detector** — Live at fakenewsdetector-alpha.vercel.app\n\nMore projects are available on his GitHub: github.com/maithreyan12`,
  },
  education: {
    triggers: ["education", "study", "college", "university", "degree", "student", "school", "gpa"],
    response: `Maithreyan is currently pursuing a **B.Tech in Information Technology**. He's in his 3rd year and actively building projects in both frontend and full-stack development.`,
  },
  experience: {
    triggers: ["experience", "internship", "job", "work", "career", "year"],
    response: `Maithreyan has **2+ years of experience** in Frontend Development. He's passionate about creating modern, responsive, user-friendly web applications.`,
  },
  cv: {
    triggers: ["cv", "resume", "download", "pdf"],
    response: `You can download Maithreyan's CV from the Profile section at the top of the page. Just click the **"Download CV"** button!`,
  },
};
