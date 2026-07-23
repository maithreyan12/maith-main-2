// ─────────────────────────────────────────────────────────────
// Portfolio data — edit here to update all sections at once
// ─────────────────────────────────────────────────────────────

export const AUTHOR = {
  name: "Maithreyan D",
  shortName: "Maithreyan",
  bio: `<strong>Maithreyan D</strong> is a <strong>Full-Stack Developer</strong>, <strong>Android & iOS Specialist</strong>, and <strong>Founder of Appziio</strong>, currently pursuing a <strong>B.Tech in Information Technology</strong> at <strong>C. Abdul Hakeem College of Engineering & Technology (CAHCET)</strong>, affiliated with <strong>Anna University</strong>. He specializes in building high-performance mobile apps, scalable web platforms, and production-ready digital products using <strong>Flutter, React, Next.js, Node.js, TypeScript, Supabase, Firebase, and MongoDB</strong>.

A key achievement is successfully developing and publishing the <strong>Mugundhan E-Commerce Textile App</strong> on the <strong>Google Play Store</strong>—delivering a complete commercial experience with real-time inventory, secure authentication, shopping cart, and order tracking. Beyond mobile apps, he actively creates <strong>business websites, admin dashboards, AI applications, and REST APIs</strong> built with a strong focus on <strong>performance, clean architecture, security, and exceptional UI/UX</strong>.

As the founder of <strong>Appziio</strong>, he helps startups and businesses transform innovative ideas into powerful digital products. Driven by continuous learning, Maithreyan is constantly exploring <strong>Artificial Intelligence, Cloud Computing, Cross-Platform Development, and Modern Web Engineering</strong> to build impactful software used by people worldwide.`,
  email: "maithreyan2006@gmail.com",
  linkedin: "https://www.linkedin.com/in/maithreyan-d-680261412/",
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
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
] as const;

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  skills: string[];
  image: string;
  verifyUrl: string;
}

export const CERTIFICATES: Certificate[] = [
  {
    id: "cert-tcs-ion-2025",
    title: "TCS iON Career Edge - Young Professional",
    issuer: "TCS iON (Tata Consultancy Services)",
    date: "Certified: June 2025",
    credentialId: "Cert ID: 119854-26810271-1016",
    skills: ["IT Foundational Skills", "Overview of AI", "Communication & Soft Skills", "Business Etiquette"],
    image: "/assets/cert-tcs-ion.png",
    verifyUrl: "/assets/Maithreyan_D_4858348.pdf",
  },
  {
    id: "cert-linkedin-genai-2024",
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft and LinkedIn Learning",
    date: "Aug 09, 2024",
    credentialId: "Cert ID: 2c1847e237fe957c960e4bbfe1cbe4dc8cbfa28bab6fa079152dbc992b756599",
    skills: ["Generative AI", "Artificial Intelligence (AI)", "Computer Ethics"],
    image: "/assets/cert-linkedin.png",
    verifyUrl: "https://www.linkedin.com/learning/certificates/2c1847e237fe957c960e4bbfe1cbe4dc8cbfa28bab6fa079152dbc992b756599",
  },
  {
    id: "cert-inamigos-2026",
    title: "Web Development Internship Certificate",
    issuer: "InAmigos Foundation (Ministry of Corporate Affairs & ISO Certified)",
    date: "June 2026",
    credentialId: "Regd: U85300CT2020NPL010641 | CSR00083159",
    skills: ["Web Development", "Frontend Engineering", "Full-Stack Web", "Responsive Design"],
    image: "/assets/cert-wa0007.png",
    verifyUrl: "/assets/Maithreyan-Certificate.pdf",
  },
  {
    id: "cert-guvi-2025",
    title: "UI/UX Design Career Workshop Certificate",
    issuer: "GUVI | HCL (GUVI Geek Networks)",
    date: "13 November 2025",
    credentialId: "Cert ID: 0iI6R37E9785g1Gn0Z",
    skills: ["UI/UX Design", "User Experience", "Product Design", "GUVI & HCL"],
    image: "/assets/cert-guvi.png",
    verifyUrl: "https://www.guvi.in/verify-certificate?id=0iI6R37E9785g1Gn0Z",
  },
];

export interface TechSkill {
  name: string;
  level?: "Beginner" | "Intermediate" | "Advanced";
  icon?: string;
}

export interface TechCard {
  title: string;
  skills: TechSkill[];
}

export const TECHNICAL_EXPERTISE_CARDS: TechCard[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Next.js", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "HTML5", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS3", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Bootstrap", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
      { name: "Material UI", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" },
      { name: "Framer Motion", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg" },
      { name: "Responsive Design", level: "Advanced", icon: "/assets/checkmark.png" },
    ],
  },
  {
    title: "Mobile Development",
    skills: [
      { name: "Flutter", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
      { name: "Dart", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" },
      { name: "Android Development", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg" },
      { name: "iOS Development", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg" },
      { name: "Play Store Publishing", level: "Advanced", icon: "/assets/checkmark.png" },
      { name: "Firebase Integration", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
      { name: "State Management", level: "Intermediate", icon: "/assets/checkmark.png" },
      { name: "Responsive UI", level: "Advanced", icon: "/assets/checkmark.png" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
      { name: "REST API Development", level: "Advanced", icon: "/assets/checkmark.png" },
      { name: "Authentication (JWT)", level: "Intermediate", icon: "/assets/checkmark.png" },
      { name: "API Integration", level: "Advanced", icon: "/assets/checkmark.png" },
      { name: "Server-side Development", level: "Intermediate", icon: "/assets/checkmark.png" },
    ],
  },
  {
    title: "Database & Cloud",
    skills: [
      { name: "MongoDB", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      { name: "Supabase", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
      { name: "Firebase", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
      { name: "PostgreSQL", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "Google Cloud", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
      { name: "Cloud Storage", level: "Advanced", icon: "/assets/checkmark.png" },
      { name: "Realtime Database", level: "Advanced", icon: "/assets/checkmark.png" },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
      { name: "Python", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "JavaScript", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "Dart", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" },
      { name: "SQL", level: "Intermediate", icon: "/assets/checkmark.png" },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "GitHub", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
      { name: "VS Code", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
      { name: "Postman", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
      { name: "Figma", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
      { name: "Vercel", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
      { name: "Netlify", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg" },
      { name: "Firebase Hosting", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
    ],
  },
  {
    title: "AI & Modern Technologies",
    skills: [
      { name: "AI Applications", level: "Intermediate", icon: "/assets/checkmark.png" },
      { name: "Machine Learning", level: "Intermediate", icon: "/assets/checkmark.png" },
      { name: "Prompt Engineering", level: "Advanced", icon: "/assets/checkmark.png" },
      { name: "OpenAI API", level: "Intermediate", icon: "/assets/checkmark.png" },
      { name: "Computer Vision", level: "Beginner", icon: "/assets/checkmark.png" },
      { name: "NLP", level: "Beginner", icon: "/assets/checkmark.png" },
    ],
  },
  {
    title: "Professional Skills",
    skills: [
      { name: "Problem Solving", icon: "/assets/checkmark.png" },
      { name: "Clean Architecture", icon: "/assets/checkmark.png" },
      { name: "UI/UX Design", icon: "/assets/checkmark.png" },
      { name: "Performance Optimization", icon: "/assets/checkmark.png" },
      { name: "Debugging", icon: "/assets/checkmark.png" },
      { name: "Team Collaboration", icon: "/assets/checkmark.png" },
      { name: "Project Management", icon: "/assets/checkmark.png" },
      { name: "Communication", icon: "/assets/checkmark.png" },
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
    title: "Mugundhan Textile App",
    image: "/assets/project-3.png",
    githubUrl: "https://github.com/maithreyan12",
    liveUrl: "https://mukundhantextile-c2ed0.firebaseapp.com/#/login",
  },
];

export const ABOUT_CARDS = [
  {
    icon: "/assets/experience.png",
    iconAlt: "Experience icon",
    heading: "Experience",
    description: "1+ year\nApp & Web Development",
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
  { label: "Certificates", href: "#certificates", icon: "projects" },
  { label: "Contact", href: "#contact", icon: "contact" },
] as const;

// Chatbot knowledge base
export const CHATBOT_KB = {
  greetings: ["hello", "hi", "hey", "greetings", "sup", "what's up"],
  contact: {
    triggers: ["email", "contact", "reach", "gmail", "phone", "call", "message"],
    response: `You can contact Maithreyan at:\n📧 Email: ${AUTHOR.email}\n💼 LinkedIn: linkedin.com/in/maithreyan-d-680261412\n🐙 GitHub: github.com/maithreyan12`,
  },
  skills: {
    triggers: ["skill", "technology", "tech", "know", "language", "framework", "stack", "use", "familiar"],
    response: `Maithreyan's technical skills include:\n\n**Mobile & Web:** Flutter, React, Next.js, TypeScript, JavaScript, HTML, CSS, SASS\n\n**Backend & Cloud:** Node.js, Express.js, MongoDB, Supabase, Firebase, PostgreSQL, REST APIs, Git`,
  },
  projects: {
    triggers: ["project", "work", "portfolio", "build", "create", "made", "develop", "app"],
    response: `Here are Maithreyan's key projects:\n\n📱 **Mugundhan Textile E-Commerce App** — Published on Google Play Store\n🔍 **Sentiment Analysis** — Live at sentimentanalyse.vercel.app\n📰 **FakeNews Detector** — Live at fakenewsdetector-alpha.vercel.app\n\nMore projects on GitHub: github.com/maithreyan12`,
  },
  education: {
    triggers: ["education", "study", "college", "university", "degree", "student", "school", "gpa"],
    response: `Maithreyan is pursuing a **B.Tech in Information Technology** at C. Abdul Hakeem College of Engineering and Technology (Anna University).`,
  },
  experience: {
    triggers: ["experience", "internship", "job", "work", "career", "year"],
    response: `Maithreyan has **1+ year of experience** in App & Web Development (Founder @ Appziio, Play Store app publisher).`,
  },
  cv: {
    triggers: ["cv", "resume", "download", "pdf"],
    response: `You can download Maithreyan's CV from the Profile section at the top of the page. Just click the **"Download CV"** button!`,
  },
};
