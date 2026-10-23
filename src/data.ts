import type { ComponentType } from 'react';

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
export type TechItem = { name: string; group: string; icon: string; color: string };
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
  cvPath: '/resume/Dineth_Dovindu_CV.pdf',
  cvAvailable: false
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
  { name: 'React', group: 'Frontend', icon: 'react', color: '#61dafb' },
  { name: 'TypeScript', group: 'Frontend', icon: 'typescript', color: '#3178c6' },
  { name: 'JavaScript', group: 'Frontend', icon: 'javascript', color: '#f7df1e' },
  { name: 'HTML5', group: 'Frontend', icon: 'html5', color: '#e34f26' },
  { name: 'CSS3', group: 'Frontend', icon: 'css3', color: '#1572b6' },
  { name: 'Tailwind CSS', group: 'Frontend', icon: 'tailwind', color: '#38bdf8' },
  { name: 'Next.js', group: 'Frontend', icon: 'nextjs', color: '#f5f5f5' },
  { name: 'Java', group: 'Backend', icon: 'java', color: '#ed8b00' },
  { name: 'Spring Boot', group: 'Backend', icon: 'spring', color: '#6db33f' },
  { name: 'Spring Security', group: 'Backend', icon: 'security', color: '#8bc34a' },
  { name: 'Spring Data JPA', group: 'Backend', icon: 'database', color: '#7cb342' },
  { name: 'REST APIs', group: 'Backend', icon: 'api', color: '#f97316' },
  { name: 'JWT', group: 'Backend', icon: 'jwt', color: '#fb7185' },
  { name: 'PHP', group: 'Backend', icon: 'php', color: '#777bb4' },
  { name: 'Python / Flask', group: 'Backend', icon: 'python', color: '#3776ab' },
  { name: 'PostgreSQL', group: 'Databases', icon: 'postgres', color: '#4169e1' },
  { name: 'MySQL', group: 'Databases', icon: 'mysql', color: '#4479a1' },
  { name: 'MongoDB', group: 'Databases', icon: 'mongodb', color: '#47a248' },
  { name: 'Git', group: 'Tools', icon: 'git', color: '#f05032' },
  { name: 'GitHub', group: 'Tools', icon: 'github', color: '#f5f5f5' },
  { name: 'Postman', group: 'Tools', icon: 'postman', color: '#ff6c37' },
  { name: 'JUnit', group: 'Tools', icon: 'junit', color: '#25a162' },
  { name: 'Mockito', group: 'Tools', icon: 'mockito', color: '#79b728' },
  { name: 'Swagger / OpenAPI', group: 'Tools', icon: 'swagger', color: '#85ea2d' },
  { name: 'Vercel', group: 'Tools', icon: 'vercel', color: '#f5f5f5' },
  { name: 'Figma', group: 'Tools', icon: 'figma', color: '#f24e1e' }
];

export const projects: Project[] = [
  {
    title: 'PrimeCore — Credit Risk Assessment Web Application', shortTitle: 'PrimeCore',
    description: 'An industry-collaborative credit risk assessment web application developed with Team MetaMinds, featuring customer credit assessment workflows, profile management, and integrated notifications.',
    role: 'Team Leader and Full-Stack Contributor',
    tech: ['React', 'Next.js', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL'],
    image: '/images/projects/primecore-placeholder.svg', github: null, demo: null
  },
  {
    title: 'Personal Task Manager — Full-Stack Web Application', shortTitle: 'Task Manager',
    description: 'A full-stack personal task management application built with React and Spring Boot, featuring authentication and task management functionality.',
    tech: ['React', 'Java', 'Spring Boot', 'JWT', 'PostgreSQL'],
    image: '/images/projects/task-manager-placeholder.svg', github: null, demo: null
  },
  {
    title: 'CareerTrack — Job Application Tracker', shortTitle: 'CareerTrack',
    description: 'A responsive React application designed to help users organize and monitor their job applications.',
    tech: ['React', 'JavaScript', 'Vite', 'Context API', 'localStorage'],
    image: '/images/projects/careertrack-placeholder.svg', github: null, demo: null
  },
  {
    title: 'Luna Smart Storytelling Robot — Web Control Application', shortTitle: 'Luna',
    description: 'A browser-based control interface developed for the Luna Smart Storytelling Robot, integrating web controls with robot functionality.',
    role: 'Frontend and Flask API Contributor',
    tech: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask'],
    image: '/images/projects/luna-placeholder.svg', github: null, demo: null
  }
];

export const education = [
  { institution: 'University of Moratuwa', qualification: 'Bachelor of Science Honours in Information Technology & Management', dates: '2024 – Present', detail: 'CGPA: 3.64 / 4.00' },
  { institution: 'Richmond College, Galle', qualification: 'G.C.E. Advanced Level', dates: '2020 – 2023', detail: '3 A Passes' }
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

export type IconComponent = ComponentType<{ size?: number; strokeWidth?: number }>;
