// ─────────────────────────────────────────────────────────────
// Portfolio data — edit here to update all sections at once
// ─────────────────────────────────────────────────────────────

export const AUTHOR = {
  name: "Maithreyan D",
  shortName: "Maithreyan",
  bio: `<strong>Maithreyan D</strong> is a <strong>Software Development Associate</strong>, <strong>Mobile &amp; Full-Stack Developer (Flutter)</strong>, and <strong>Founder of Appziio</strong>, currently pursuing a <strong>B.Tech in Information Technology</strong> at <strong>C. Abdul Hakeem College of Engineering &amp; Technology (CAHCET)</strong>, affiliated with <strong>Anna University</strong>. He specializes in building high-performance mobile apps, scalable web platforms, and production-ready digital products across web, mobile, and cloud environments using <strong>Flutter, Dart, React.js, Next.js, Node.js, TypeScript, Supabase, Firebase, and MongoDB</strong>.

He currently serves as a <strong>Software Development Associate at PIAX Life Private Limited</strong>, maintaining and deploying digital products across 3 product surfaces as the sole developer reporting directly to the Founder &amp; CEO. A flagship achievement is architecting and publishing the <strong><a href="https://play.google.com/store/apps/details?id=com.mukundhantextile.app" target="_blank" rel="noopener noreferrer">Mugundhan Textile E-Commerce App</a></strong> live on the <strong><a href="https://play.google.com/store/apps/details?id=com.mukundhantextile.app" target="_blank" rel="noopener noreferrer">Google Play Store</a></strong>—delivering an end-to-end commercial experience with real-time inventory, secure authentication, shopping cart, and order tracking. He is also the architect and lead developer of <strong><a href="https://infogram26.in" target="_blank" rel="noopener noreferrer">INFogram'26 (infogram26.in)</a></strong>, the official National Level Technical Symposium portal for CAHCET Dept of IT, and the <strong><a href="https://technexus.maithreyan.in/" target="_blank" rel="noopener noreferrer">Tech Nexus Event Pass &amp; Certificate Automation Platform</a></strong>.

Driven by continuous learning, Maithreyan combines <strong>Mobile Engineering, Cloud Backends, Artificial Intelligence, and Modern Web Systems</strong> to deliver impactful, production-grade software solutions.`,
  email: "maithreyan2006@gmail.com",
  phone: "+91 93427 06675",
  linkedin: "https://www.linkedin.com/in/maithreyan-d-680261412/",
  github: "https://github.com/maithreyan12",
  instagram: "https://www.instagram.com/maithreyan__12?igsh=MTl1NW1xaHJlaGo5bw==",
  appziio: "https://www.appziio.com",
  cvAsset: "/assets/Maithreyan-Resume.pdf",
  cvDownloadName: "Maithreyan-Resume.pdf",
  profilePic: "/assets/profile-pic.webp",
  aboutPic: "/assets/about-pic.webp",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
] as const;

// ─────────────────────────────────────────────────────────────
// PROFESSIONAL EXPERIENCE
// ─────────────────────────────────────────────────────────────

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  type: string;
  period: string;
  location: string;
  responsibilities: string[];
  tech: string[];
}

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    id: "exp-piax",
    role: "Software Development Associate",
    company: "PIAX Life Private Limited",
    type: "Full-Time",
    period: "08/2026 – Present",
    location: "Walajapet, Tamil Nadu",
    responsibilities: [
      "Maintain and extend PIAX digital products across 3 surfaces (web, mobile, and internal platforms) as the sole developer reporting directly to the Founder and CEO.",
      "Deploy frontend and backend features to production across 3 product surfaces, integrating REST APIs, databases, and third-party services into live customer-facing systems.",
      "Coordinate with UI/UX, Product, and Operations teams across 4 stages of delivery (design, testing, deployment, and ongoing maintenance) to release software products.",
      "Diagnose and resolve production issues, measurably improving application performance, functionality, security, and user experience.",
      "Own assigned projects end to end, delivering within agreed timelines and maintaining technical documentation for all development work.",
    ],
    tech: ["Flutter", "Dart", "React.js", "Node.js", "REST APIs", "Supabase", "Firebase"],
  },
  {
    id: "exp-inamigos",
    role: "Web Development Intern",
    company: "InAmigos Foundation",
    type: "Internship",
    period: "05/2026 – 06/2026",
    location: "Remote",
    responsibilities: [
      "Developed high-performance responsive web user interfaces using React.js, HTML5, and modern CSS3.",
      "Implemented cross-browser optimizations, component state management patterns, and interactive modal dialog systems.",
    ],
    tech: ["React.js", "HTML5", "CSS3", "JavaScript"],
  },
];

// ─────────────────────────────────────────────────────────────
// EDUCATION
// ─────────────────────────────────────────────────────────────

export interface Education {
  id: string;
  institution: string;
  location: string;
  degree: string;
  affiliation: string;
  period: string;
}

export const EDUCATION: Education[] = [
  {
    id: "edu-cahcet",
    institution: "C. Abdul Hakeem College of Engineering & Technology",
    location: "Vellore, Tamil Nadu",
    degree: "Bachelor of Technology (B.Tech) in Information Technology",
    affiliation: "Anna University",
    period: "2023 – 2027 (Expected)",
  },
];

// ─────────────────────────────────────────────────────────────
// CERTIFICATES
// ─────────────────────────────────────────────────────────────

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
    id: "cert-aws-ml-ai-2026",
    title: "Fundamentals of Machine Learning and Artificial Intelligence",
    issuer: "AWS Training & Certification",
    date: "September 20, 2026",
    credentialId: "AWS Training & Certification Completion Certificate",
    skills: ["Machine Learning", "Artificial Intelligence (AI)", "AWS Cloud", "Cloud Computing"],
    image: "/assets/cert-aws-ml.webp",
    verifyUrl: "/assets/Maithreyan-AWS-ML-AI-Certificate.pdf",
  },
  {
    id: "cert-tcs-ion-2025",
    title: "TCS iON Career Edge - Young Professional",
    issuer: "TCS iON (Tata Consultancy Services)",
    date: "Certified: June 2025",
    credentialId: "Cert ID: 119854-26810271-1016",
    skills: ["IT Foundational Skills", "Overview of AI", "Communication & Soft Skills", "Business Etiquette"],
    image: "/assets/cert-tcs-ion.webp",
    verifyUrl: "/assets/Maithreyan_D_4858348.pdf",
  },
  {
    id: "cert-linkedin-genai-2024",
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft and LinkedIn Learning",
    date: "Aug 09, 2024",
    credentialId: "Cert ID: 2c1847e237fe957c960e4bbfe1cbe4dc8cbfa28bab6fa079152dbc992b756599",
    skills: ["Generative AI", "Artificial Intelligence (AI)", "Computer Ethics"],
    image: "/assets/cert-linkedin.webp",
    verifyUrl: "https://www.linkedin.com/learning/certificates/2c1847e237fe957c960e4bbfe1cbe4dc8cbfa28bab6fa079152dbc992b756599",
  },
  {
    id: "cert-inamigos-2026",
    title: "Web Development Internship Certificate",
    issuer: "InAmigos Foundation (Ministry of Corporate Affairs & ISO Certified)",
    date: "June 2026",
    credentialId: "Regd: U85300CT2020NPL010641 | CSR00083159",
    skills: ["Web Development", "Frontend Engineering", "Full-Stack Web", "Responsive Design"],
    image: "/assets/cert-wa0007.webp",
    verifyUrl: "/assets/Maithreyan-Certificate.pdf",
  },
  {
    id: "cert-guvi-2025",
    title: "UI/UX Design Career Workshop Certificate",
    issuer: "GUVI | HCL (GUVI Geek Networks)",
    date: "13 November 2025",
    credentialId: "Cert ID: 0iI6R37E9785g1Gn0Z",
    skills: ["UI/UX Design", "User Experience", "Product Design", "GUVI & HCL"],
    image: "/assets/cert-guvi.webp",
    verifyUrl: "https://www.guvi.in/verify-certificate?id=0iI6R37E9785g1Gn0Z",
  },
];

// ─────────────────────────────────────────────────────────────
// TECHNICAL SKILLS
// ─────────────────────────────────────────────────────────────

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
      { name: "Vite", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
      { name: "HTML5", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS3", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Material UI", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" },
      { name: "Framer Motion", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg" },
      { name: "Responsive UI", level: "Advanced", icon: "/assets/checkmark.png" },
    ],
  },
  {
    title: "Mobile Development",
    skills: [
      { name: "Flutter", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
      { name: "Dart", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" },
      { name: "Android SDK", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg" },
      { name: "iOS Development", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg" },
      { name: "Google Play Store Publishing", level: "Advanced", icon: "/assets/checkmark.png" },
      { name: "State Management", level: "Advanced", icon: "/assets/checkmark.png" },
      { name: "Responsive UI", level: "Advanced", icon: "/assets/checkmark.png" },
      { name: "Firebase Integration", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
    ],
  },
  {
    title: "Backend & Cloud",
    skills: [
      { name: "Node.js", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
      { name: "REST API", level: "Advanced", icon: "/assets/checkmark.png" },
      { name: "JWT Authentication", level: "Intermediate", icon: "/assets/checkmark.png" },
      { name: "Firebase Backend", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
      { name: "Supabase", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
      { name: "Vercel", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "Firebase Firestore", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
      { name: "Firebase Realtime DB", level: "Advanced", icon: "/assets/checkmark.png" },
      { name: "MongoDB", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "Dart", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "Java", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
      { name: "Python", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "SQL", level: "Intermediate", icon: "/assets/checkmark.png" },
      { name: "HTML5 & CSS3", level: "Advanced", icon: "/assets/checkmark.png" },
    ],
  },
  {
    title: "Tools & Design",
    skills: [
      { name: "VS Code", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
      { name: "Android Studio", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg" },
      { name: "Xcode", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xcode/xcode-original.svg" },
      { name: "Git & GitHub", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "Postman", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
      { name: "Figma", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
      { name: "Razorpay Integration", level: "Advanced", icon: "/assets/checkmark.png" },
    ],
  },
  {
    title: "Professional Strengths",
    skills: [
      { name: "Clear Communication", icon: "/assets/checkmark.png" },
      { name: "Cross-Functional Collaboration", icon: "/assets/checkmark.png" },
      { name: "Ownership & Accountability", icon: "/assets/checkmark.png" },
      { name: "Customer-Focused Problem Solving", icon: "/assets/checkmark.png" },
      { name: "Adaptability in Fast-Paced Environments", icon: "/assets/checkmark.png" },
      { name: "Clean Architecture & Best Practices", icon: "/assets/checkmark.png" },
    ],
  },
];

// Professional skill icon grid
export interface SkillIcon {
  name: string;
  icon: string;
  color: string;
}

export const SKILL_ICONS: SkillIcon[] = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", color: "#e34f26" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", color: "#1572b6" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", color: "#f7df1e" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", color: "#3178c6" },
  { name: "React JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", color: "#61dafb" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", color: "#eeeeee" },
  { name: "Node JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", color: "#339933" },
  { name: "Express JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", color: "#eeeeee" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", color: "#47a248" },
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg", color: "#54c5f8" },
  { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg", color: "#0175c2" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg", color: "#ffca28" },
  { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg", color: "#3ecf8e" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", color: "#4169e1" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", color: "#3776ab" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", color: "#f05032" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", color: "#f24e1e" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", color: "#007acc" },
];

// ─────────────────────────────────────────────────────────────
// PROJECTS
// ─────────────────────────────────────────────────────────────

export interface Project {
  title: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
  playStoreUrl?: string;
  description?: string;
  featured?: boolean;
  badge?: string;
  category: string;
  tech: string[];
}

export const PROJECTS: Project[] = [
  {
    title: "Mugundhan Textile App",
    image: "/assets/project-3.webp",
    githubUrl: "https://github.com/maithreyan12",
    liveUrl: "https://mukundhantextile-c2ed0.firebaseapp.com/#/login",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.mukundhantextile.app",
    description: "Architected and published a full-featured commercial mobile e-commerce application live on the Google Play Store with secure authentication, dynamic catalog browsing, interactive cart, wishlist, and real-time order lifecycle tracking.",
    featured: true,
    badge: "LIVE ON PLAY STORE",
    category: "Mobile App",
    tech: ["Flutter", "Dart", "Firebase", "Supabase", "Play Store"],
  },
  {
    title: "INFogram'26 Portal",
    image: "/assets/infogram26.webp",
    githubUrl: "https://github.com/maithreyan12/INFOGRAM26-1",
    liveUrl: "https://infogram26.in",
    description: "Official National Level Technical Symposium web platform for CAHCET Dept of IT featuring attendee registrations, digital QR ticket passes, Razorpay payment gateway integration, and organizer admin workflows.",
    featured: true,
    badge: "NATIONAL SYMPOSIUM",
    category: "Web Platform",
    tech: ["React.js", "Node.js", "Razorpay", "Firebase", "QR Tickets"],
  },
  {
    title: "Tech Nexus Event Pass & Certificate Automation",
    image: "/assets/project-technexus.webp",
    githubUrl: "https://github.com/maithreyan12/Tech-Nexus-Community-Project",
    liveUrl: "https://technexus.maithreyan.in/",
    description: "Community event automation platform that generates and delivers personalized event passes and certificates in bulk with Excel upload mapping, automated email dispatching, and delivery tracking.",
    featured: true,
    badge: "COMMUNITY PLATFORM",
    category: "Automation Platform",
    tech: ["React.js", "TypeScript", "Vite", "Tailwind CSS"],
  },
  {
    title: "Sentiment Analysis",
    image: "/assets/project-1.webp",
    githubUrl: "https://github.com/maithreyan12/antigravity-sentiment-sphere.git",
    liveUrl: "https://sentimentanalyse.maithreyan.in/",
    description: "AI-powered sentiment analysis platform with real-time NLP scoring and visual analysis output, providing instant breakdowns of emotional indicators from input text.",
    category: "AI Application",
    tech: ["Python", "NLP", "React.js", "Web App"],
  },
  {
    title: "Veritas.ai — FakeNews Detector",
    image: "/assets/project-2.webp",
    githubUrl: "https://github.com/maithreyan12/fakenewsdetector",
    liveUrl: "https://fakenewsdetector.maithreyan.in/",
    description: "AI-based news authenticity detection engine evaluating headline claims and textual patterns through machine learning and Python NLP routines.",
    category: "AI Application",
    tech: ["Python", "Machine Learning", "React.js"],
  },
];

export const ABOUT_CARDS = [
  {
    icon: "/assets/experience.webp",
    iconAlt: "Experience icon",
    heading: "Experience",
    description: "Software Associate\nMobile & Full-Stack",
  },
  {
    icon: "/assets/education.webp",
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
    response: `You can contact Maithreyan at:\n📧 Email: maithreyan2006@gmail.com\n📞 Phone: +91 93427 06675\n💼 LinkedIn: linkedin.com/in/maithreyan-d-680261412\n🐙 GitHub: github.com/maithreyan12`,
  },
  skills: {
    triggers: ["skill", "technology", "tech", "know", "language", "framework", "stack", "use", "familiar"],
    response: `Maithreyan's technical skills include:\n\n**Mobile & Web:** Flutter, Dart, React.js, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Material UI, Framer Motion\n\n**Backend & Cloud:** Node.js, Express.js, REST APIs, JWT Auth, Firebase (Firestore, Realtime DB), Supabase, Vercel\n\n**Databases & Tools:** MongoDB, PostgreSQL, MySQL, Android Studio, Xcode, VS Code, Git, GitHub, Postman, Figma, Razorpay`,
  },
  projects: {
    triggers: ["project", "work", "portfolio", "build", "create", "made", "develop", "app", "playstore", "play store", "mugundhan", "mukundhan", "textile", "technexus", "tech nexus", "sentiment", "fakenews", "infogram"],
    response: `Here are Maithreyan's key projects:\n\n📱 **Mugundhan Textile E-Commerce App** (Live on Google Play Store)\n▶️ Play Store: https://play.google.com/store/apps/details?id=com.mukundhantextile.app\n🌐 Web Demo: https://mukundhantextile-c2ed0.firebaseapp.com/#/login\n\n🏛️ **INFogram'26 Symposium Platform** — Live at https://infogram26.in\n\n🎟️ **Tech Nexus Automation Platform** — Live at https://technexus.maithreyan.in/\n\n🔍 **Sentiment Analysis** — Live at https://sentimentanalyse.maithreyan.in/\n\n📰 **Veritas.ai FakeNews Detector** — Live at https://fakenewsdetector.maithreyan.in/\n\n💻 **Developer Portfolio** — Live at https://maithreyan.in/\n\nMore on GitHub: https://github.com/maithreyan12`,
  },
  education: {
    triggers: ["education", "study", "college", "university", "degree", "student", "school", "gpa", "cahcet"],
    response: `Maithreyan is pursuing a **B.Tech in Information Technology** (2023 – 2027) at C. Abdul Hakeem College of Engineering and Technology (CAHCET), affiliated with Anna University, Vellore, Tamil Nadu.`,
  },
  experience: {
    triggers: ["experience", "internship", "job", "work", "career", "year", "piax", "appziio", "inamigos"],
    response: `Maithreyan's professional experience includes:\n\n🚀 **Software Development Associate** @ PIAX Life Private Limited (08/2026 – Present)\nSole developer managing 3 product surfaces (web, mobile, internal), integrating REST APIs, databases, and third-party services.\n\n🏢 **Founder & Lead Engineer** @ Appziio (2024 – Present)\n\n🎓 **Web Development Intern** @ InAmigos Foundation (05/2026 – 06/2026)\nBuilt high-performance responsive web user interfaces using React.js, HTML5, and CSS3.`,
  },
  cv: {
    triggers: ["cv", "resume", "download", "pdf"],
    response: `You can download Maithreyan's updated CV from the Hero section at the top of the page. Just click the **"Download CV"** button!`,
  },
};
