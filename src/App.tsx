import { useEffect, useMemo, useRef, useState, type CSSProperties, type FormEvent, type PointerEvent as ReactPointerEvent, type ReactNode } from 'react';
import { useForm } from '@formspree/react';
import { motion, useInView, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from 'motion/react';
import {
  ArrowDown, ArrowUp, ArrowUpRight, ExternalLink,
  Github, Linkedin, Mail, Menu, MessageCircle, Send, X
} from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { certifications, education, navigation, personal, projects, socialLinks, techStack, type Project } from './data';

const issuerMarks: Record<string, string> = { meta: 'M', packt: 'P', datacamp: 'DC', umich: 'M', ibm: 'IBM', uom: 'UoM' };

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { once: false, margin: '-15% 0px -15% 0px' });
  const reduce = useReducedMotion();
  return <motion.div ref={ref} className={className} initial={{ opacity: 0, y: reduce ? 0 : 22 }} animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: reduce ? 0 : 22 }} transition={{ duration: .6, delay, ease: 'easeOut' }}>{children}</motion.div>;
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { once: false, margin: '-15% 0px -15% 0px' });
  const reduce = useReducedMotion();
  return <motion.div ref={ref} className="section-heading" initial={{ opacity: 0, y: reduce ? 0 : 24 }} animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: reduce ? 0 : 24 }} transition={{ duration: .65, ease: 'easeOut' }}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</motion.div>;
}

function SocialIcon({ name, size = 17 }: { name: string; size?: number }) {
  if (name === 'linkedin') return <Linkedin size={size} />;
  if (name === 'github') return <Github size={size} />;
  if (name === 'whatsapp') return <SiWhatsapp size={size} />;
  return <MessageCircle size={size} />;
}

function Header({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="nav-shell">
    <a href="#home" className="brand" aria-label="Dineth Dovindu home"><span>DD</span><small>DINETH DOVINDU</small></a>
    <nav id="primary-navigation" className={`desktop-nav ${open ? 'mobile-open' : ''}`} aria-label="Primary navigation">
      {navigation.map((item) => <a key={item.href} className={active === item.href.slice(1) ? 'active' : ''} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
    </nav>
    <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
  </div></header>;
}

function ScrollProgress({ active, projectProgress }: { active: string; projectProgress: MotionValue<number> }) {
  const { scrollYProgress } = useScroll();
  const projectStart = useRef(0);
  useEffect(() => {
    if (active === 'projects') projectStart.current = projectProgress.get();
  }, [active, projectProgress]);
  const displayProgress = useTransform([scrollYProgress, projectProgress], ([pageProgress, localProgress]) => {
    const dragContribution = active === 'projects' ? (Number(localProgress) - projectStart.current) * .08 : 0;
    return Math.max(0, Math.min(1, Number(pageProgress) + dragContribution));
  });
  const dotPosition = useTransform(displayProgress, [0, 1], ['0%', '100%']);
  return <div className="site-progress" aria-hidden="true"><div className="site-progress-track"><motion.i className="site-progress-fill" style={{ scaleY: displayProgress }} /><motion.b className="site-progress-dot" style={{ top: dotPosition }} /></div></div>;
}

function HangingCard() {
  const reduce = useReducedMotion();
  const anchorRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const [angle, setAngle] = useState(reduce ? 0 : -20);
  const [dragging, setDragging] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const tapeBend = angle * 0.9;
  const tapePath = `M 20 4 C ${20 + tapeBend} 88, ${20 + tapeBend} 188, 20 276`;
  const tapeLeftPath = `M 10 4 C ${10 + tapeBend * 0.82} 88, ${10 + tapeBend * 0.82} 188, 10 276`;
  const tapeRightPath = `M 30 4 C ${30 + tapeBend * 0.82} 88, ${30 + tapeBend * 0.82} 188, 30 276`;

  useEffect(() => {
    if (reduce) return;
    const startedAt = performance.now();
    const tick = (now: number) => {
      const elapsed = (now - startedAt) / 1000;
      const progress = Math.min(elapsed / 5, 1);
      const envelope = Math.pow(1 - progress, 1.6);
      const next = -20 * envelope * Math.cos(4.2 * elapsed);
      setAngle(next);
      if (progress < 1) frameRef.current = requestAnimationFrame(tick);
      else { frameRef.current = null; setAngle(0); }
    };
    frameRef.current = requestAnimationFrame(tick);
    return () => { if (frameRef.current !== null) cancelAnimationFrame(frameRef.current); };
  }, [reduce]);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 760px)');
    const update = () => setMobile(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const update = () => setHasScrolled(window.scrollY > 32);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  const settle = () => {
    if (reduce) { setAngle(0); return; }
    const start = angle;
    const startedAt = performance.now();
    const tick = (now: number) => {
      const elapsed = (now - startedAt) / 1000;
      const progress = Math.min(elapsed / 2.2, 1);
      const envelope = Math.pow(1 - progress, 1.6);
      const next = start * envelope * Math.cos(7.2 * elapsed);
      setAngle(next);
      if (progress < 1) frameRef.current = requestAnimationFrame(tick);
      else { frameRef.current = null; setAngle(0); }
    };
    frameRef.current = requestAnimationFrame(tick);
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (mobile) return;
    if (event.target instanceof Element && event.target.closest('a')) return;
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragging(true);
  };
  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (mobile || !dragging || !anchorRef.current) return;
    const anchor = anchorRef.current.getBoundingClientRect();
    const dx = event.clientX - (anchor.left + anchor.width / 2);
    const dy = Math.max(26, event.clientY - anchor.top);
    const next = Math.atan2(dx, dy) * (180 / Math.PI);
    setAngle(Math.max(-42, Math.min(42, -next)));
  };
  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (mobile || !dragging) return;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    setDragging(false);
    settle();
  };

  return <div className="hanging-stage">
    <div ref={anchorRef} className="pivot-point" aria-hidden="true" />
    <motion.div className={`badge-rig ${dragging ? 'is-dragging' : ''}`} style={{ rotate: angle }} onPointerDown={handlePointerDown} onPointerMove={handlePointerMove} onPointerUp={handlePointerUp} onPointerCancel={handlePointerUp} initial={{ y: 0 }} animate={{ y: 0 }}>
      <svg className="hanging-tape" viewBox="0 0 40 280" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="tape-shade" x1="0" x2="1"><stop offset="0" stopColor="#0c0d12" /><stop offset=".38" stopColor="#292b33" /><stop offset=".7" stopColor="#17181d" /><stop offset="1" stopColor="#08090c" /></linearGradient></defs><path d={tapePath} fill="none" stroke="#08090c" strokeWidth="29" strokeLinecap="round" opacity=".8" /><path d={tapePath} fill="none" stroke="url(#tape-shade)" strokeWidth="22" strokeLinecap="round" /><path d={tapeLeftPath} fill="none" stroke="#717581" strokeWidth="1.2" opacity=".8" /><path d={tapeRightPath} fill="none" stroke="#717581" strokeWidth="1.2" opacity=".8" /><path id="tape-text-path" d={tapePath} fill="none" stroke="none" /><text className="tape-label"><textPath href="#tape-text-path" startOffset="50%" textAnchor="middle">KATANGODAGE DINETH DOVINDU</textPath></text></svg>
      <span className="tape-clip" aria-hidden="true" /><span className="tape-ring" aria-hidden="true" />
      <div className="badge-card">
        <img src="/images/Professional_Portrait.png" alt="Profile placeholder for Dineth Dovindu" draggable={false} onDragStart={(event) => event.preventDefault()} />
        <div className="badge-info"><span className="badge-name">Dineth Dovindu</span><span className="badge-role">FULL-STACK DEVELOPER</span></div>
        <div className="badge-socials">{socialLinks.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={`${link.label} profile`} onPointerDown={(event) => event.stopPropagation()}><SocialIcon name={link.icon} /></a>)}<a href={`mailto:${personal.email}`} aria-label="Email Dineth" onPointerDown={(event) => event.stopPropagation()}><Mail size={17} /></a></div>
      </div>
    </motion.div>
    <div className={`hero-scroll-indicator ${hasScrolled ? 'is-hidden' : ''}`} aria-hidden="true"><span>Scroll to explore</span><div className="scroll-pill"><i /></div></div>
  </div>;
}

function TypewriterName() {
  const fullName = 'Dineth Dovindu';
  const reduce = useReducedMotion();
  const deleting = useRef(false);
  const [value, setValue] = useState(reduce ? fullName : '');

  useEffect(() => {
    if (reduce) { setValue(fullName); return; }
    const delay = value === fullName ? 2200 : value.length === 0 ? 700 : deleting.current ? 72 : 125;
    const timer = window.setTimeout(() => {
      if (value === fullName) deleting.current = true;
      if (value.length === 0) deleting.current = false;
      setValue((current) => deleting.current ? current.slice(0, -1) : fullName.slice(0, current.length + 1));
    }, delay);
    return () => window.clearTimeout(timer);
  }, [reduce, value]);

  const firstName = value.slice(0, 6);
  const lastName = value.length > 6 ? value.slice(7) : '';
  return <h1 aria-label={fullName}>{firstName}{!lastName && <i className="typing-caret" aria-hidden="true" />}<br /><span>{lastName}{lastName && <i className="typing-caret" aria-hidden="true" />}</span></h1>;
}

function Hero() {
  return <section id="home" className="hero section-shell"><div className="hero-glow" aria-hidden="true" /><div className="hero-grid">
    <Reveal className="hero-intro"><span className="eyebrow">HELLO, I'M</span><TypewriterName /><p className="hero-role">Full-Stack Developer</p><p className="hero-copy">Building modern, secure, and scalable web applications using React, Spring Boot, and modern development technologies.</p><div className="hero-actions">{personal.cvAvailable ? <a className="primary-button" href={personal.cvPath} download="Dineth_Dovindu_CV.pdf">Download CV <ArrowDown size={16} /></a> : <span className="primary-button disabled-button" aria-disabled="true">CV coming soon <ArrowDown size={16} /></span>}<a className="talk-button" href="#contact">Let's Talk <ArrowUpRight size={16} /></a></div></Reveal>
    <HangingCard />
    <Reveal className="hero-about" delay={.1}><span className="eyebrow">A LITTLE ABOUT ME</span><h2>Curious by nature.<br /><em>Focused on impact.</em></h2><p>I'm an Information Technology & Management undergraduate at the University of Moratuwa, Sri Lanka, passionate about full-stack web development and problem solving. I enjoy building practical applications with React, Java, Spring Boot, and modern web technologies.</p><p>I'm preparing for opportunities in professional software engineering where thoughtful products and reliable systems meet.</p></Reveal>
  </div></section>;
}

function TechStack() {
  const groups = useMemo(() => ['Frontend', 'Backend', 'Databases', 'Tools'].map((group) => ({ group, items: techStack.filter((item) => item.group === group) })), []);
  const [activeGroup, setActiveGroup] = useState('All');
  const visibleGroups = activeGroup === 'All' ? groups : groups.filter((section) => section.group === activeGroup);
  const loopItems = (items: typeof techStack) => items.length >= 6 ? items : Array.from({ length: 6 }, (_, index) => items[index % items.length]);
  return <section id="tech-stack" className="section-shell section-space"><SectionHeading eyebrow="02 / TOOLKIT" title="Tech Stack" subtitle="Technologies and tools I use to build full-stack applications." /><Reveal className="stack-showcase">
    <div className="stack-filters" role="tablist" aria-label="Filter technology groups">{['All', ...groups.map((section) => section.group)].map((group) => <button key={group} type="button" role="tab" aria-selected={activeGroup === group} className={activeGroup === group ? 'active' : ''} onClick={() => setActiveGroup(group)}><span aria-hidden="true">{activeGroup === group ? '■' : '□'}</span>{group}</button>)}</div>
    <div className={`stack-marquees ${activeGroup === 'All' ? 'is-looping no-hover' : 'is-filtered'}`}>{visibleGroups.map((section, rowIndex) => { const laneItems = activeGroup === 'All' ? loopItems(section.items) : section.items; return <div className={`stack-marquee ${activeGroup === 'All' ? '' : 'static'} ${rowIndex % 2 ? 'reverse' : ''}`} key={section.group} aria-label={`${section.group} technologies`}><div className="stack-marquee-track">{activeGroup === 'All' ? [...laneItems, ...laneItems].map((item, index) => <div className="stack-chip" key={`${section.group}-${item.name}-${index}`} style={{ '--tech-color': item.color } as CSSProperties}><img src={item.image ?? '/images/tech-demo.png'} alt="" aria-hidden="true" /><span>{item.name}</span></div>) : laneItems.map((item) => <div className="stack-chip" key={`${section.group}-${item.name}`} style={{ '--tech-color': item.color } as CSSProperties}><img src={item.image ?? '/images/tech-demo.png'} alt="" aria-hidden="true" /><span>{item.name}</span></div>)}</div></div>; })}</div>
  </Reveal></section>;
}

function ProjectCard({ project }: { project: Project }) {
  const LinkButton = ({ href, label, icon }: { href: string | null; label: string; icon: ReactNode }) => href ? <a className="card-action" href={href} target="_blank" rel="noreferrer">{icon}{label}</a> : <span className="card-action disabled" aria-disabled="true">{icon}{label}</span>;
  return <article className="project-card"><div className="project-image"><img src={project.image} alt={`${project.shortTitle} project placeholder`} /><span className="project-index">PROJECT / {String(projects.indexOf(project) + 1).padStart(2, '0')}</span></div><div className="project-body"><div><span className="project-kicker">{project.role ?? project.tech.slice(0, 3).join(' · ')}</span><h3>{project.title}</h3><p>{project.description}</p></div><div className="project-actions"><LinkButton href={project.github} label="GitHub" icon={<Github size={15} />} /><LinkButton href={project.demo} label="Live Demo" icon={<ExternalLink size={15} />} /></div></div></article>;
}

function Projects({ projectProgress }: { projectProgress: MotionValue<number> }) {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [travel, setTravel] = useState(0);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [dragging, setDragging] = useState(false);
  const manualOffset = useMotionValue(0);
  const dragStartRef = useRef<{ pointerX: number; position: number } | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });
  const scrollX = useTransform(scrollYProgress, [0, 1], [0, -travel]);
  const smoothScrollX = useSpring(scrollX, { stiffness: 78, damping: 28, mass: .55 });
  const clampPosition = (position: number) => Math.max(-travel, Math.min(0, position));
  const rawTrackX = useTransform([smoothScrollX, manualOffset], ([scrollPosition, manualPosition]) => Number(scrollPosition) + Number(manualPosition));
  const trackX = useTransform(rawTrackX, (position) => clampPosition(Number(position)));
  const galleryProgress = useTransform(trackX, (position) => travel > 0 ? Math.max(0, Math.min(1, -Number(position) / travel)) : 0);
  useEffect(() => galleryProgress.on('change', (value) => projectProgress.set(Number(value))), [galleryProgress, projectProgress]);
  useEffect(() => { const measure = () => { if (viewportRef.current && trackRef.current) { const nextTravel = Math.max(0, trackRef.current.scrollWidth - viewportRef.current.clientWidth + 24); setTravel(nextTravel); setScrollDistance(nextTravel); manualOffset.set(Math.max(-nextTravel, Math.min(0, manualOffset.get()))); } }; measure(); const observer = new ResizeObserver(measure); if (viewportRef.current) observer.observe(viewportRef.current); if (trackRef.current) observer.observe(trackRef.current); window.addEventListener('resize', measure); return () => { observer.disconnect(); window.removeEventListener('resize', measure); }; }, [manualOffset]);
  const handleGalleryPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => { if (event.pointerType === 'mouse' && event.button !== 0) return; if (event.target instanceof Element && event.target.closest('a,button')) return; const position = clampPosition(smoothScrollX.get() + manualOffset.get()); dragStartRef.current = { pointerX: event.clientX, position }; event.currentTarget.setPointerCapture(event.pointerId); setDragging(true); };
  const handleGalleryPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => { const start = dragStartRef.current; if (!start) return; const position = clampPosition(start.position + event.clientX - start.pointerX); manualOffset.set(position - smoothScrollX.get()); };
  const handleGalleryPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => { if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId); dragStartRef.current = null; setDragging(false); };
  return <section id="projects" ref={sectionRef} className="projects-section section-shell" style={scrollDistance > 0 ? { height: `calc(100vh + ${scrollDistance}px)` } : undefined}><div className="projects-sticky"><div className="projects-head"><SectionHeading eyebrow="03 / SELECTED WORK" title="Featured Projects" subtitle="A selection of applications I've designed and developed." /></div><div className={`gallery-viewport ${dragging ? 'is-dragging' : ''}`} ref={viewportRef} onPointerDown={handleGalleryPointerDown} onPointerMove={handleGalleryPointerMove} onPointerUp={handleGalleryPointerUp} onPointerCancel={handleGalleryPointerUp}><motion.div className="project-track" ref={trackRef} style={{ x: trackX } as unknown as CSSProperties}>{projects.map((project) => <ProjectCard key={project.shortTitle} project={project} />)}</motion.div></div><div className="gallery-progress"><span>SCROLL TO EXPLORE</span><div><motion.i style={{ scaleX: galleryProgress }} /></div><span>{String(projects.length).padStart(2, '0')} PROJECTS</span></div></div></section>;
}

function Timeline({ items, kind }: { items: typeof education | typeof certifications; kind: 'education' | 'certifications' }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 55%'] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 82, damping: 24, mass: .65 });
  const height = useTransform(smoothProgress, [0, 1], ['0%', '100%']);
  const orderedItems = kind === 'certifications' ? [...items].reverse() : items;
  return <div ref={ref} className={`timeline ${kind}`}><motion.div className="timeline-progress" style={{ height }} />{orderedItems.map((item, index) => <TimelineItem key={'institution' in item ? item.institution : `${item.title}-${index}`} item={item} index={index} kind={kind} progress={smoothProgress} />)}</div>;
}

function TimelineItem({ item, index, kind, progress }: { item: (typeof education)[number] | (typeof certifications)[number]; index: number; kind: 'education' | 'certifications'; progress: MotionValue<number> }) {
  const count = kind === 'certifications' ? certifications.length : education.length;
  const threshold = count > 1 ? index / (count - 1) : 0;
  const visibility = useTransform(progress, [Math.max(0, threshold - .08), Math.min(1, threshold + .08)], [0, 1]);
  const lift = useTransform(progress, [Math.max(0, threshold - .08), Math.min(1, threshold + .08)], [12, 0]);
  const rowClass = kind === 'certifications' ? `cert-row ${index % 2 ? 'cert-right' : 'cert-left'}` : '';
  const row = <motion.div className={`timeline-row ${rowClass}`} style={kind === 'certifications' ? { opacity: visibility, y: lift } : undefined}><div className="timeline-node" />{'institution' in item ? <EducationCard item={item} /> : <CertificationCard item={item} />}</motion.div>;
  return kind === 'certifications' ? row : <Reveal delay={index * .06}>{row}</Reveal>;
}

function EducationCard({ item }: { item: (typeof education)[number] }) {
  return (
    <div className="timeline-card education-card">
      <div className="education-card-info">
        <span className="timeline-date">{item.dates}</span>
        <h3>{item.institution}</h3>
        <p>{item.qualification}</p>
      </div>
      <div className="education-card-image">
        <img src={item.image} alt={`${item.institution} campus and badge`} loading="lazy" decoding="async" width={2079} height={756} />
      </div>
    </div>
  );
}

function CertificationCard({ item }: { item: (typeof certifications)[number] }) {
  const className = `timeline-card cert-card ${item.credentialUrl ? 'is-link' : ''}`;
  const content = <div className="cert-card-head"><span className={`issuer-mark ${item.icon}`}>{issuerMarks[item.icon]}</span><div className="cert-card-title"><span title={item.issuer}>{item.issuer}</span><h3 title={item.title}>{item.title}</h3></div>{item.issued && <time>{item.issued}</time>}</div>;
  return item.credentialUrl ? <a className={className} href={item.credentialUrl} target="_blank" rel="noreferrer" aria-label={`View ${item.title} credential`}>{content}</a> : <div className={className}>{content}</div>;
}

function Education() { return <section id="education" className="section-shell section-space"><SectionHeading eyebrow="04 / LEARNING PATH" title="Education" subtitle="The foundation behind the work I build." /><Timeline items={education} kind="education" /></section>; }
function Certifications() { return <section id="certifications" className="certifications-section section-shell section-space"><SectionHeading eyebrow="05 / CONTINUOUS GROWTH" title="Certifications" subtitle="Focused learning across frontend, backend, testing, and development workflows." /><Timeline items={certifications} kind="certifications" /></section>; }

function Contact() {
  const formId = import.meta.env.VITE_FORMSPREE_FORM_ID as string | undefined;
  const [state, handleSubmit] = useForm(formId || 'disabled');
  const [fallback, setFallback] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { if (!formId) { event.preventDefault(); setFallback(true); return; } void handleSubmit(event); };
  return <section id="contact" className="section-shell contact-section section-space"><div className="contact-grid"><Reveal className="contact-copy"><span className="eyebrow">06 / GET IN TOUCH</span><h2>Let's Work<br /><em>Together.</em></h2><p>Have a project idea, opportunity, or question? Feel free to reach out. I'm always interested in connecting and exploring new opportunities.</p><div className="contact-links"><a href={`mailto:${personal.email}`}><Mail size={18} /><span><small>Email</small>{personal.email}</span><ArrowUpRight size={16} /></a>{socialLinks.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer"><SocialIcon name={link.icon} size={18} /><span><small>{link.label}</small>{link.label === 'WhatsApp' ? 'Chat on WhatsApp' : `Connect on ${link.label}`}</span><ArrowUpRight size={16} /></a>)}</div></Reveal><Reveal className="contact-form-wrap" delay={.12}><form className="contact-form" onSubmit={submit} noValidate><div className="form-heading"><span className="eyebrow">SEND A MESSAGE</span><p>I'll get back to you as soon as possible.</p></div><label>Full Name<input name="name" type="text" placeholder="Your name" required /></label><label>Email Address<input name="email" type="email" placeholder="you@example.com" required /></label><label>Subject <span className="muted">(optional)</span><input name="subject" type="text" placeholder="How can I help?" /></label><label>Message<textarea name="message" rows={4} placeholder="Tell me a little about your project..." required /></label>{state.errors && <p className="form-error" role="alert">Something went wrong while sending. Please try again or email me directly.</p>}{state.succeeded && <p className="form-success" role="status">Message sent — thank you for reaching out.</p>}{fallback && <p className="form-error" role="alert">The form is being configured. Use the email fallback below to send your message.</p>}<div className="form-footer"><button className="primary-button" type="submit" disabled={state.submitting}>{state.submitting ? 'Sending…' : 'Send Message'} <Send size={16} /></button><a className="email-fallback" href={`mailto:${personal.email}`}>Email Me Instead <ArrowUpRight size={14} /></a></div></form></Reveal></div></section>;
}

function Footer() {
  return <footer className="site-footer"><div className="section-shell footer-inner"><div className="footer-brand"><span>DINETH DOVINDU</span><small>Full-Stack Developer</small></div><div className="footer-nav">{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</div><div className="footer-socials">{socialLinks.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}><SocialIcon name={link.icon} /></a>)}<a href="#home" className="back-top" aria-label="Back to top"><ArrowUp /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Dineth Dovindu. All rights reserved.</span><span>Sri Lanka · Available for opportunities</span></div></div></footer>;
}

export default function App() {
  const [active, setActive] = useState('home');
  const projectProgress = useMotionValue(0);
  useEffect(() => {
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    if (!window.location.hash) window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    return () => { window.history.scrollRestoration = previousRestoration; };
  }, []);
  useEffect(() => { const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); }), { rootMargin: '-35% 0px -55% 0px' }); navigation.forEach((item) => { const section = document.querySelector(item.href); if (section) observer.observe(section); }); return () => observer.disconnect(); }, []);
  return <><Header active={active} /><ScrollProgress active={active} projectProgress={projectProgress} /><main><Hero /><TechStack /><Projects projectProgress={projectProgress} /><Education /><Certifications /><Contact /></main><Footer /></>;
}
