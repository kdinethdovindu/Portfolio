export type SocialLink = { label: string; href: string; icon: string };
export type Project = {
  title: string;
  shortTitle: string;
  description: string;
  role?: string;
  tech: string[];
  image: string;
  github: string | null;
  demo: string | null;
};
export type TechItem = { name: string; group: 'Frontend' | 'Backend' | 'Databases' | 'Tools'; icon: string; color: string; image: string };
export type Certificate = { title: string; issuer: string; issued?: string; icon: string; credentialUrl: string | null };

export const personal = {
  name: 'Dineth Dovindu',
  title: 'Full-Stack Developer',
  university: 'University of Moratuwa, Sri Lanka',
  email: 'kdinethdovindu@gmail.com',
  whatsapp: 'https://wa.me/94711961556',
  linkedin: 'https://www.linkedin.com/in/dineth-dovindu-ba801a383/',
  github: 'https://github.com/kdinethdovindu',
  location: 'Sri Lanka',
  cvPath: '/resume/Dineth_Dovindu_v.2 CV.pdf',
  cvAvailable: true
};

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: personal.linkedin, icon: 'linkedin' },
  { label: 'GitHub', href: personal.github, icon: 'github' },
  { label: 'WhatsApp', href: personal.whatsapp, icon: 'whatsapp' }
];

export const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' }
];

export const techStack: TechItem[] = [
  { name: 'React', group: 'Frontend', icon: 'react', color: '#61dafb', image: '/images/Stack_png/react.png' },
  { name: 'TypeScript', group: 'Frontend', icon: 'typescript', color: '#3178c6', image: '/images/Stack_png/typescript.png' },
  { name: 'JavaScript', group: 'Frontend', icon: 'javascript', color: '#f7df1e', image: '/images/Stack_png/javascript.png' },
  { name: 'HTML5', group: 'Frontend', icon: 'html5', color: '#e34f26', image: '/images/Stack_png/html5.png' },
  { name: 'CSS3', group: 'Frontend', icon: 'css3', color: '#1572b6', image: '/images/Stack_png/css3.png' },
  { name: 'Tailwind CSS', group: 'Frontend', icon: 'tailwind', color: '#38bdf8', image: '/images/Stack_png/tailwind-css.png' },
  { name: 'Next.js', group: 'Frontend', icon: 'nextjs', color: '#f5f5f5', image: '/images/Stack_png/nextjs.png' },
  { name: 'Java', group: 'Backend', icon: 'java', color: '#ed8b00', image: '/images/Stack_png/java.png' },
  { name: 'Spring Boot', group: 'Backend', icon: 'spring', color: '#6db33f', image: '/images/Stack_png/spring-boot.png' },
  { name: 'Spring Security', group: 'Backend', icon: 'security', color: '#8bc34a', image: '/images/Stack_png/spring-security.png' },
  { name: 'Spring Data JPA', group: 'Backend', icon: 'database', color: '#7cb342', image: '/images/Stack_png/spring-data-jpa.png' },
  { name: 'REST APIs', group: 'Backend', icon: 'api', color: '#f97316', image: '/images/Stack_png/rest-apis.png' },
  { name: 'JWT', group: 'Backend', icon: 'jwt', color: '#fb7185', image: '/images/Stack_png/jwt.png' },
  { name: 'PHP', group: 'Backend', icon: 'php', color: '#777bb4', image: '/images/Stack_png/php.png' },
  { name: 'Python', group: 'Backend', icon: 'python', color: '#3776ab', image: '/images/Stack_png/python.png' },
  { name: 'Flask', group: 'Backend', icon: 'python', color: '#ffffff', image: '/images/Stack_png/flask.png' },
  { name: 'PostgreSQL', group: 'Databases', icon: 'postgres', color: '#4169e1', image: '/images/Stack_png/postgresql.png' },
  { name: 'MySQL', group: 'Databases', icon: 'mysql', color: '#4479a1', image: '/images/Stack_png/mysql.png' },
  { name: 'MongoDB', group: 'Databases', icon: 'mongodb', color: '#47a248', image: '/images/Stack_png/mongodb.png' },
  { name: 'Git', group: 'Tools', icon: 'git', color: '#f05032', image: '/images/Stack_png/git.png' },
  { name: 'GitHub', group: 'Tools', icon: 'github', color: '#f5f5f5', image: '/images/Stack_png/github.png' },
  { name: 'Postman', group: 'Tools', icon: 'postman', color: '#ff6c37', image: '/images/Stack_png/postman.png' },
  { name: 'JUnit', group: 'Tools', icon: 'junit', color: '#25a162', image: '/images/Stack_png/junit.png' },
  { name: 'Mockito', group: 'Tools', icon: 'mockito', color: '#79b728', image: '/images/Stack_png/mockito.png' },
  { name: 'Swagger / OpenAPI', group: 'Tools', icon: 'swagger', color: '#85ea2d', image: '/images/Stack_png/swagger.png' },
  { name: 'Vercel', group: 'Tools', icon: 'vercel', color: '#f5f5f5', image: '/images/Stack_png/vercel.png' },
  { name: 'Figma', group: 'Tools', icon: 'figma', color: '#f24e1e', image: '/images/Stack_png/figma.png' }
];

export const projects: Project[] = [
  {
    title: 'PrimeCore — Credit Risk Assessment Web Application', shortTitle: 'PrimeCore',
    description: 'An industry-collaborative credit risk assessment web application developed with Team MetaMinds, featuring customer credit assessment workflows, profile management, and integrated notifications.',
    role: 'Team Leader and Full-Stack Contributor',
    tech: ['React', 'Next.js', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL'],
    image: '/images/projects/PrimeCore_Credit_Intelligence_Showcase.png',
    github: 'https://github.com/Metaminds-BankWebApp',
    demo: 'https://bank-web-app-theta.vercel.app'
  },
  {
    title: 'Personal Task Manager — Full-Stack Web Application', shortTitle: 'Task Manager',
    description: 'A full-stack personal task management application built with React and Spring Boot, featuring authentication and task management functionality.',
    tech: ['React', 'Java', 'Spring Boot', 'JWT', 'PostgreSQL'],
    image: '/images/projects/Personal Task Manager Showcase.png',
    github: 'https://github.com/kdinethdovindu/personal-task-manager-frontend',
    demo: 'https://personal-task-manager-frontend-six.vercel.app/register'
  },
  {
    title: 'MOVEONE | Transportation in 2100 — Cre8X 3.0', shortTitle: 'MOVEONE',
    description: 'A futuristic smart-city transportation web application developed for Cre8X 3.0, featuring multimodal journey planning, route comparison, a rule-based Journey AI assistant, simulated booking with QR tickets, and live-tracking demonstrations.',
    role: 'Frontend Contributor',
    tech: ['React.js', 'Vite', 'JavaScript', 'CSS', 'PWA', 'Vercel'],
    image: '/images/projects/MoveOne Futuristic Transport Showcase.png', 
    github: 'https://github.com/PixelCraft-Cre8X/transport-2100', 
    demo: 'https://transport-2100-ashy.vercel.app'
  },
  {
    title: 'CareerTrack — Job Application Tracker', shortTitle: 'CareerTrack',
    description: 'A responsive React application designed to help users organize and monitor their job applications.',
    role: 'Frontend Developer',
    tech: ['React', 'JavaScript', 'Vite', 'Context API', 'localStorage'],
    image: '/images/projects/Career Track App Showcase.png', 
    github: 'https://github.com/kdinethdovindu/React-job-tracker', 
    demo: 'https://react-job-tracker-henna.vercel.app/'
  },
  {
    title: 'BlogApp — Full-Stack Blogging Platform', shortTitle: 'BlogApp',
    description: 'A responsive blogging platform built with PHP, MySQL, HTML, CSS, and JavaScript. Users can register and log in, create and manage posts, and preview content with Markdown.',
    role: 'Full-Stack Developer',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    image: '/images/projects/BlogApp Dark Tech Showcase.png', 
    github: 'https://github.com/kdinethdovindu/blog-Web', 
    demo: 'https://blog-web-ecru-delta.vercel.app'
  },
  {
    title: 'Luna Smart Storytelling Robot', shortTitle: 'Luna',
    description: 'A browser-based control interface developed for the Luna Smart Storytelling Robot, integrating web controls with robot functionality.',
    role: 'Frontend and Flask API Contributor',
    tech: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask'],
    image: '/images/projects/Luna Smart Robot Control Centre.png', 
    github: 'https://github.com/kdinethdovindu/Luna-Code-Base', 
    demo: null
  }
];

export const education = [
  { institution: 'University of Moratuwa', qualification: 'Bachelor of Science Honours in Information Technology & Management', dates: '2024 – Present', image: '/images/education/uom.png' },
  { institution: 'Richmond College, Galle', qualification: 'G.C.E. Advanced Level', dates: '2020 – 2023', image: '/images/education/richmond.png' }
];

export const certifications: Certificate[] = [
  { title: 'Advanced React', issuer: 'Meta', issued: 'September 2026', icon: 'meta', credentialUrl: null },
  { title: 'JUnit and Mockito Unit Testing for Java Developers', issuer: 'Packt', issued: 'August 2026', icon: 'packt', credentialUrl: null },
  { title: 'Spring Boot Foundations', issuer: 'Packt', issued: 'June 2026', icon: 'packt', credentialUrl: null },
  { title: 'Intermediate GitHub Concepts', issuer: 'DataCamp', issued: 'April 2026', icon: 'datacamp', credentialUrl: null },
  { title: 'Introduction to GitHub Concepts', issuer: 'DataCamp', issued: 'April 2026', icon: 'datacamp', credentialUrl: null },
  { title: 'Intermediate Git', issuer: 'DataCamp', issued: 'April 2026', icon: 'datacamp', credentialUrl: null },
  { title: 'Introduction to Git', issuer: 'DataCamp', issued: 'April 2026', icon: 'datacamp', credentialUrl: null },
  { title: 'Introduction to Structured Query Language (SQL)', issuer: 'University of Michigan', issued: 'April 2026', icon: 'umich', credentialUrl: null },
  { title: 'Object Oriented Programming in Java', issuer: 'IBM', issued: 'March 2026', icon: 'ibm', credentialUrl: null },
  { title: 'Java Programming for Beginners', issuer: 'IBM', issued: 'March 2026', icon: 'ibm', credentialUrl: null },
  { title: 'Web Design for beginners', issuer: 'University of Moratuwa', icon: 'uom', credentialUrl: null }
];
