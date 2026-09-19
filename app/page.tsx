"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Github,
  Mail,
  Stethoscope,
  Boxes,
  TestTube2,
  Store,
  Building2,
  HeartPulse,
  UsersRound,
  HardHat,
  Layers3,
} from "lucide-react";

const projects = [
  [
    "Healthcare Operations",
    "Dialysis Operations Management System",
    Stethoscope,
    "Offline-first platform for patient management, dialysis scheduling, machines and wards, sessions, billing, supplies and operational reporting.",
    [
      "Patients & referrals",
      "Daily scheduler",
      "Machines / wards",
      "Billing",
      "Statistics",
    ],
    "blue",
  ],
  [
    "Pharmacy Platform",
    "PharmaOS",
    Boxes,
    "Modular pharmacy platform designed around product master, inventory, purchasing, pricing and controlled future transactional modules.",
    [
      "Product master",
      "Inventory ledger",
      "Purchasing",
      "Pricing",
      "Migrations",
    ],
    "green",
  ],
  [
    "Laboratory Workflow",
    "Noah Lab System",
    TestTube2,
    "Bilingual laboratory workflow covering patients, samples, assays, reference ranges, results and report generation.",
    [
      "Patients",
      "Samples & assays",
      "Reference ranges",
      "Results",
      "Reports",
    ],
    "violet",
  ],
  [
    "Retail ERP / POS",
    "Footwear & Bags Management System",
    Store,
    "Multi-branch retail operations platform for footwear and bags, connecting POS, product variants, inventory, purchasing, returns, cashbox shifts and reporting.",
    [
      "Multi-branch POS",
      "Product variants",
      "Inventory",
      "Purchasing",
      "Returns",
      "Cashbox / shifts",
    ],
    "orange",
  ],
  [
    "Healthcare Platform",
    "Integrated Medical Center System",
    Building2,
    "Integrated medical-center management platform connecting patient administration, clinical workflows and operational management.",
    [
      "Patient administration",
      "Clinical workflows",
      "Appointments / services",
      "Operational records",
      "RBAC",
    ],
    "cyan",
  ],
  [
    "Clinical Workflow",
    "Internal Medicine Clinic System",
    HeartPulse,
    "Focused clinic management system for internal-medicine workflows and longitudinal patient records.",
    [
      "Patient records",
      "Visit history",
      "Clinical follow-up",
      "Investigations",
      "Clinic workflow",
    ],
    "blue",
  ],
  [
    "Enterprise HR",
    "Human Resources Management System",
    UsersRound,
    "Dedicated HR management system for employee records and recurring workforce administration processes.",
    [
      "Employee records",
      "Attendance",
      "Leave",
      "HR documents",
      "Permissions",
    ],
    "violet",
  ],
  [
    "HSE / OHS",
    "Occupational Health & Safety System",
    HardHat,
    "Management system focused on occupational health and safety processes, documentation and operational follow-up.",
    [
      "Safety records",
      "Inspections",
      "Risk / incidents",
      "Corrective follow-up",
      "Reporting",
    ],
    "green",
  ],
  [
    "Enterprise Architecture",
    "Hospital Management System",
    Layers3,
    "Enterprise architecture covering clinical, administrative, financial, inventory and HR domains with RBAC and auditability.",
    [
      "Clinical",
      "Finance",
      "Inventory",
      "HR",
      "Identity & audit",
    ],
    "cyan",
  ],
];

export default function Home() {
  return (
    <main>
      <nav>
        <a className="brand" href="#top">
          <span>ON</span>
          <b>Omar Nour</b>
        </a>

        <div>
          <a href="#work">Work</a>
          <a href="#skills">Capabilities</a>
          <a href="#about">About</a>
          <a className="cta" href="#contact">
            Start a project <ArrowUpRight size={15} />
          </a>
        </div>
      </nav>

      <section id="top" className="hero shell">
        <small>● AVAILABLE FOR SOFTWARE PROJECTS</small>

        <h1>
          I build operational software that turns{" "}
          <em>complex workflows</em> into reliable systems.
        </h1>

        <p>
          Full-Stack Software Engineer focused on healthcare, business
          operations, retail, HR, safety, inventory, billing and data-intensive
          management platforms.
        </p>

        <div className="actions">
          <a className="primary" href="#work">
            Explore selected work <ArrowUpRight size={17} />
          </a>

          <a
            className="secondary"
            href="https://github.com/einestin7-hub"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={17} /> GitHub
          </a>
        </div>

        <div className="stats">
          <b>
            9<span>Featured systems & architectures</span>
          </b>

          <b>
            Full-stack<span>Architecture to deployment</span>
          </b>

          <b>
            Arabic / English<span>Bilingual product experience</span>
          </b>
        </div>
      </section>

      <section id="work" className="shell section">
        <header>
          <div>
            <small>SELECTED WORK</small>
            <h2>Systems built around real operations.</h2>
          </div>

          <p>
            Independent and technical projects demonstrating workflow modeling,
            system architecture and implementation across multiple operational
            domains.
          </p>
        </header>

        <div className="grid">
          {projects.map(([k, t, I, d, c, a]: any, i) => (
            <article key={t}>
              {i === 0 ? (
                <Link
                  href="/projects/dialysis-management-system"
                  className="project-real-visual"
                  aria-label="View Dialysis Operations Management System case study"
                >
                  <Image
                    src="/images/dialysis/01-dashboard-hero.png"
                    alt="Dialysis Operations Management System operational dashboard"
                    fill
                    priority
                    sizes="(max-width: 800px) 100vw, 50vw"
                  />

                  <div className="project-real-overlay">
                    <span>
                      <Stethoscope size={22} />
                      Healthcare Operations
                    </span>

                    <b>CASE STUDY / 01</b>
                  </div>
                </Link>
              ) : i === 1 ? (
                <Link
                  href="/projects/pharmaos"
                  className="project-real-visual"
                  aria-label="View PharmaOS case study"
                >
                  <Image
                    src="/images/pharmaos/01-pos-hero.png"
                    alt="PharmaOS pharmacy point of sale system"
                    fill
                    sizes="(max-width: 800px) 100vw, 50vw"
                  />

                  <div className="project-real-overlay">
                    <span>
                      <Boxes size={22} />
                      Pharmacy Operations
                    </span>

                    <b>CASE STUDY / 02</b>
                  </div>
                </Link>
              ) : i === 3 ? (
                <Link
                  href="/projects/retail-pos"
                  className="project-real-visual"
                  aria-label="View Footwear and Bags Retail Management System case study"
                >
                  <Image
                    src="/images/retail-pos/01-dashboard.png"
                    alt="Footwear and Bags Retail Management System dashboard"
                    fill
                    sizes="(max-width: 800px) 100vw, 50vw"
                  />

                  <div className="project-real-overlay">
                    <span>
                      <Store size={22} />
                      Retail Operations
                    </span>

                    <b>CASE STUDY / 04</b>
                  </div>
                </Link>
              ) : (
                <div className={"visual " + a}>
                  <I size={32} />

                  <span>
                    CASE STUDY / {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="mock">
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
              )}

              <div className="body">
                <small>{k}</small>
                <h3>{t}</h3>
                <p>{d}</p>

                <div className="caps">
                  {c.map((x: string) => (
                    <span key={x}>
                      <CheckCircle2 size={13} />
                      {x}
                    </span>
                  ))}
                </div>

                {(i === 0 || i === 1 || i === 3) && (
                  <Link
                    href={
                      i === 0
                        ? "/projects/dialysis-management-system"
                        : i === 1
                          ? "/projects/pharmaos"
                          : "/projects/retail-pos"
                    }
                    className="case-study-link"
                  >
                    View Case Study
                    <ArrowUpRight size={15} />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="dark">
        <div className="shell">
          <small>CAPABILITIES</small>
          <h2>Engineering beyond the interface.</h2>

          <div className="skills">
            {[
              [
                "Backend Engineering",
                "Node.js · Express · TypeScript · REST APIs",
              ],
              [
                "Data & Persistence",
                "PostgreSQL · SQLite · schema design · migrations",
              ],
              [
                "Business Systems",
                "ERP workflows · POS · inventory · billing · operations",
              ],
              ["Security", "RBAC · JWT · audit trails · validation"],
              [
                "Healthcare",
                "Clinical workflows · laboratory · dialysis · medical centers",
              ],
              [
                "Delivery",
                "VPS deployment · operational architecture · maintainability",
              ],
            ].map((x, i) => (
              <div key={x[0]}>
                <span>0{i + 1}</span>
                <h3>{x[0]}</h3>
                <p>{x[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="shell section about">
        <div>
          <small>ABOUT</small>
          <h2>From requirements to working software.</h2>
        </div>

        <div>
          <p>
            I design and develop management platforms where multiple workflows,
            roles and datasets have to work together consistently.
          </p>

          <p>
            My project work spans healthcare operations, medical centers and
            clinics, laboratories, pharmacy, retail/POS, HR, occupational
            health & safety and enterprise system architecture.
          </p>
        </div>
      </section>

      <section id="contact" className="shell contact">
        <small>LET&apos;S BUILD</small>
        <h2>Have an operational problem that needs software?</h2>

        <p>
          Available to discuss management platforms, internal systems and
          full-stack web projects.
        </p>

        <div className="actions">
          <a className="primary" href="mailto:">
            <Mail size={17} /> Contact me
          </a>

          <a
            className="secondary"
            href="https://github.com/einestin7-hub"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={17} /> GitHub
          </a>
        </div>
      </section>

      <footer>
        <div className="shell">
          © 2026 Omar Nour
          <span>Full-Stack Software Engineer</span>
        </div>
      </footer>
    </main>
  );
}
