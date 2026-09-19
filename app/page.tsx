"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Boxes,
  Building2,
  CheckCircle2,
  Github,
  HeartPulse,
  Layers3,
  MessageCircle,
  MapPin,
  Menu,
  Phone,
  Stethoscope,
  Store,
  TestTube2,
  UsersRound,
  HardHat,
  X,
} from "lucide-react";
import { useState } from "react";

const projects = [
  {
    category: "Healthcare Operations",
    title: "Dialysis Operations Management System",
    description:
      "Offline-first platform coordinating patients, dialysis scheduling, machines, sessions, billing, supplies and operational reporting.",
    tags: ["Dialysis", "Scheduling", "Billing", "Operations"],
    image: "/images/dialysis/01-dashboard-hero.png",
    href: "/projects/dialysis-management-system",
    number: "01",
    icon: Stethoscope,
    featured: true,
  },
  {
    category: "Pharmacy Operations",
    title: "PharmaOS",
    description:
      "Integrated pharmacy operations platform connecting product master, inventory, purchasing, pricing, point-of-sale and financial workflows.",
    tags: ["Inventory", "Purchasing", "POS", "Pricing"],
    image: "/images/pharmaos/01-pos-hero.png",
    href: "/projects/pharmaos",
    number: "02",
    icon: Boxes,
    featured: true,
  },
  {
    category: "Retail Operations",
    title: "Footwear & Bags Management System",
    description:
      "Multi-branch retail platform connecting point-of-sale, product variants, inventory, purchasing, returns, cashbox shifts and reporting.",
    tags: ["Multi-Branch", "POS", "Inventory", "Cashbox"],
    image: "/images/retail-pos/01-dashboard.png",
    href: "/projects/retail-pos",
    number: "03",
    icon: Store,
    featured: true,
  },
  {
    category: "Medical Center Operations",
    title: "Integrated Medical Center System",
    description:
      "Multi-department medical-center platform connecting patients, appointments, reception, billing, day surgery, inventory and reporting.",
    tags: ["Appointments", "Reception", "Billing", "Inventory"],
    image: "/images/medical-center/01-dashboard.png",
    href: "/projects/integrated-medical-center",
    number: "04",
    icon: Building2,
    featured: true,
  },
  {
    category: "Clinical Workflow",
    title: "Internal Medicine & Nephrology Clinic",
    description:
      "Longitudinal clinical management system for patient records, structured encounters, chronic disease tracking and prescriptions.",
    tags: ["Patient Records", "ICD-10", "Clinical History", "Rx"],
    image: "/images/internal-medicine-clinic/01-dashboard.png",
    href: "/projects/internal-medicine-clinic",
    number: "05",
    icon: HeartPulse,
    featured: true,
  },
];

const upcomingProjects = [
  {
    category: "Laboratory Workflow",
    title: "Noah Lab System",
    icon: TestTube2,
    description:
      "Bilingual laboratory workflow covering patients, samples, assays, reference ranges, results and reporting.",
  },
  {
    category: "Enterprise HR",
    title: "Human Resources Management System",
    icon: UsersRound,
    description:
      "Workforce administration platform for employee records and recurring HR operations.",
  },
  {
    category: "HSE / OHS",
    title: "Occupational Health & Safety System",
    icon: HardHat,
    description:
      "Operational system for safety records, inspections, incidents and corrective follow-up.",
  },
  {
    category: "Enterprise Architecture",
    title: "Hospital Management System",
    icon: Layers3,
    description:
      "Enterprise architecture spanning clinical, administrative, financial, inventory and HR domains.",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Backend Engineering",
    text: "Node.js · Express · TypeScript · REST APIs",
  },
  {
    number: "02",
    title: "Data Architecture",
    text: "PostgreSQL · SQLite · schema design · migrations",
  },
  {
    number: "03",
    title: "Operational Systems",
    text: "ERP workflows · POS · inventory · billing",
  },
  {
    number: "04",
    title: "Healthcare Software",
    text: "Clinical workflows · dialysis · clinics · medical centers",
  },
  {
    number: "05",
    title: "Security",
    text: "Access control · authentication · auditability · validation",
  },
  {
    number: "06",
    title: "Software Delivery",
    text: "Architecture · deployment · maintainability",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="portfolio">
      {/* NAVIGATION */}
      <nav className="portfolio-nav">
        <a className="portfolio-brand" href="#top">
          <span>ON</span>
          <div>
            <b>Omar Nour</b>
            <small>Software Engineer</small>
          </div>
        </a>

        <div className="desktop-nav">
          <a href="#work">Work</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#about">About</a>

          <a className="nav-contact" href="#contact">
            Let&apos;s talk
            <ArrowUpRight size={15} />
          </a>
        </div>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {menuOpen && (
          <div className="mobile-nav">
            <a href="#work" onClick={() => setMenuOpen(false)}>
              Work
            </a>
            <a href="#capabilities" onClick={() => setMenuOpen(false)}>
              Capabilities
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="top" className="portfolio-hero">
        <div className="hero-copy">
          <div className="availability">
            <i />
            Available for software projects
          </div>

          <div className="hero-identity">
            <strong>Omar Nour</strong>
            <span>FULL-STACK SOFTWARE ENGINEER</span>
          </div>

          <h1>
            Building software for
            <span> real operations.</span>
          </h1>

          <p className="hero-description">
            I design and build reliable operational software for healthcare,
            retail and business environments — turning complex workflows into
            structured, maintainable systems.
          </p>

          <div className="hero-actions">
            <a className="button-primary" href="#work">
              Explore selected work
              <ArrowDown size={17} />
            </a>

            <a
              className="button-secondary"
              href="https://github.com/einestin7-hub"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>

          <div className="hero-meta">
            <span>
              <MapPin size={16} />
              Luxor, Egypt
            </span>

            <a href="tel:+201003253425">
              <Phone size={16} />
              +20 100 325 3425
            </a>

            <a
              href="https://wa.me/201003253425?text=Hi%20Omar%2C%20I%20found%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20software%20project."
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="hero-portrait-wrap">
          <div className="portrait-accent portrait-accent-one" />
          <div className="portrait-accent portrait-accent-two" />

          <div className="hero-portrait">
            <Image
              src="/images/profile/omar-nour.png"
              alt="Omar Nour — Full-Stack Software Engineer"
              fill
              priority
              sizes="(max-width: 900px) 90vw, 44vw"
            />
          </div>

          <div className="portrait-card">
            <span>FOCUS</span>
            <b>Operational Software</b>
            <small>Healthcare · Retail · Business Systems</small>
          </div>
        </div>
      </section>

      {/* QUICK PROFILE */}
      <section className="profile-strip">
        <div>
          <small>01 / DISCIPLINE</small>
          <strong>Full-Stack Engineering</strong>
        </div>

        <div>
          <small>02 / SPECIALIZATION</small>
          <strong>Operational Systems</strong>
        </div>

        <div>
          <small>03 / PRODUCT EXPERIENCE</small>
          <strong>Arabic & English</strong>
        </div>

        <div>
          <small>04 / DELIVERY</small>
          <strong>Architecture → Deployment</strong>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section id="work" className="portfolio-section work-section">
        <div className="section-heading">
          <div>
            <small>SELECTED WORK</small>
            <h2>
              Systems designed around
              <br />
              <em>real workflows.</em>
            </h2>
          </div>

          <p>
            A selection of operational software projects covering healthcare,
            pharmacy, retail and multi-department management.
          </p>
        </div>

        <div className="featured-projects">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <article
                className={`featured-project ${
                  index === 0 ? "featured-project-large" : ""
                }`}
                key={project.title}
              >
                <Link
                  href={project.href}
                  className="project-image"
                  aria-label={`View ${project.title} case study`}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} interface`}
                    fill
                    priority={index === 0}
                    sizes={
                      index === 0
                        ? "(max-width: 900px) 100vw, 66vw"
                        : "(max-width: 900px) 100vw, 50vw"
                    }
                  />

                  <div className="project-image-shade" />

                  <div className="project-number">
                    CASE STUDY / {project.number}
                  </div>

                  <div className="project-category-overlay">
                    <Icon size={20} />
                    {project.category}
                  </div>
                </Link>

                <div className="project-content">
                  <div className="project-title-row">
                    <div>
                      <small>{project.category}</small>
                      <h3>{project.title}</h3>
                    </div>

                    <Link
                      href={project.href}
                      className="project-arrow"
                      aria-label={`Open ${project.title}`}
                    >
                      <ArrowUpRight size={20} />
                    </Link>
                  </div>

                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>
                        <CheckCircle2 size={12} />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link href={project.href} className="view-case-study">
                    View Case Study
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* MORE SYSTEMS */}
      <section className="portfolio-section more-work">
        <div className="more-work-heading">
          <small>MORE SYSTEMS & ARCHITECTURE</small>
          <h2>Additional engineering work.</h2>
        </div>

        <div className="more-project-grid">
          {upcomingProjects.map(({ category, title, icon: Icon, description }) => (
            <article key={title}>
              <div className="more-project-icon">
                <Icon size={23} />
              </div>

              <small>{category}</small>
              <h3>{title}</h3>
              <p>{description}</p>

              <span className="case-study-status">Case study in preparation</span>
            </article>
          ))}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="capabilities-section">
        <div className="capabilities-inner">
          <div className="capabilities-intro">
            <small>CAPABILITIES</small>

            <h2>
              Engineering beyond
              <br />
              the interface.
            </h2>

            <p>
              I focus on the operational logic underneath the UI: data models,
              workflows, APIs, permissions, transactional behavior and
              maintainable system architecture.
            </p>
          </div>

          <div className="capability-list">
            {capabilities.map((capability) => (
              <article key={capability.number}>
                <span>{capability.number}</span>

                <div>
                  <h3>{capability.title}</h3>
                  <p>{capability.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="portfolio-section about-new">
        <div className="about-label">
          <small>ABOUT ME</small>
        </div>

        <div className="about-main">
          <h2>
            I approach software as an
            <em> operational system,</em> not just a collection of screens.
          </h2>

          <div className="about-columns">
            <p>
              I&apos;m Omar Nour, a Full-Stack Software Engineer based in Luxor,
              Egypt. My work focuses on management platforms where multiple
              workflows, users and datasets need to operate together
              consistently.
            </p>

            <p>
              My projects span healthcare operations, clinics, medical centers,
              pharmacy, retail/POS, inventory, billing, HR, occupational health
              and safety, and enterprise system architecture.
            </p>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="approach-section">
        <div className="approach-inner">
          <small>HOW I THINK ABOUT SOFTWARE</small>

          <div className="approach-grid">
            <div>
              <span>01</span>
              <h3>Understand the operation</h3>
              <p>
                Model the actual people, processes, constraints and business
                rules before designing the interface.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Design the system</h3>
              <p>
                Translate workflows into data models, boundaries, APIs and
                reliable transactional behavior.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Build for daily use</h3>
              <p>
                Deliver software that remains understandable, maintainable and
                useful under real operational conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-new">
        <div className="contact-inner">
          <div>
            <small>LET&apos;S BUILD SOMETHING USEFUL</small>

            <h2>
              Have an operational problem
              <br />
              that needs software?
            </h2>
          </div>

          <div className="contact-details">
            <p>
              Available to discuss management platforms, internal systems,
              healthcare software and full-stack web projects.
            </p>

            <div className="contact-links">
              <a href="tel:+201003253425">
                <span>
                  <Phone size={18} />
                  Phone
                </span>

                <b>+20 100 325 3425</b>
              </a>

              <a
                href="https://wa.me/201003253425?text=Hi%20Omar%2C%20I%20found%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20software%20project."
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <MessageCircle size={18} />
                  WhatsApp
                </span>

                <b>Start a conversation</b>
              </a>

              <div>
                <span>
                  <MapPin size={18} />
                  Location
                </span>

                <b>Luxor, Egypt</b>
              </div>

              <a
                href="https://github.com/einestin7-hub"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <Github size={18} />
                  GitHub
                </span>

                <b>@einestin7-hub</b>
              </a>
            </div>

            <div className="contact-actions">
              <a className="contact-phone" href="tel:+201003253425">
                <Phone size={17} />
                Call me
              </a>

              <a
                className="contact-whatsapp"
                href="https://wa.me/201003253425?text=Hi%20Omar%2C%20I%20found%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20software%20project."
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={17} />
                WhatsApp
              </a>

              <a
                className="contact-github"
                href="https://github.com/einestin7-hub"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} />
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="portfolio-footer">
        <div>
          <b>Omar Nour</b>
          <span>Full-Stack Software Engineer</span>
        </div>

        <p>© 2026 Omar Nour. Built around real operational software.</p>

        <a href="#top">
          Back to top
          <ArrowUpRight size={14} />
        </a>
      </footer>
    </main>
  );
}
