/**
 * Dialysis Operations Management System — Portfolio Case Study
 *
 * Route: /projects/dialysis-management-system
 * File:  app/projects/dialysis-management-system/page.tsx
 *
 * Screenshots must be placed at:
 *   public/images/dialysis/01-dashboard-hero.png
 *   public/images/dialysis/02-session-management.png
 *   public/images/dialysis/03-ai-clinical-assistant.png
 *   public/images/dialysis/04-medical-recommendations.png
 *   public/images/dialysis/05-ro-water-quality.png
 *   public/images/dialysis/06-machine-management.png
 *
 * No extra npm packages required.
 * Uses Next.js built-in <Image> for optimised delivery.
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./dialysis-case-study.module.css";

/* ─── Metadata ──────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Dialysis Operations Management System — Case Study",
  description:
    "A domain-specific operational platform built to coordinate the complex daily workflow of a hemodialysis unit.",
  openGraph: {
    title: "Dialysis Operations Management System — Case Study",
    description:
      "An offline-first platform for coordinating patients, dialysis sessions, scheduling, machines, clinical monitoring, billing, supplies and operational reporting.",
    images: ["/images/dialysis/01-dashboard-hero.png"],
  },
};

/* ─── Data ───────────────────────────────────────────────── */
const CHALLENGES = [
  {
    name: "Recurring patients",
    icon: "👤",
  },
  { name: "Daily sessions", icon: "📅" },
  { name: "Multiple shifts", icon: "🔄" },
  { name: "Machines & wards", icon: "🏥" },
  { name: "Referral tracking", icon: "📋" },
  { name: "Clinical measurements", icon: "💉" },
  { name: "Laboratory monitoring", icon: "🔬" },
  { name: "Medical supplies", icon: "📦" },
  { name: "Billing", icon: "🧾" },
  { name: "Staff coordination", icon: "👥" },
  { name: "Equipment maintenance", icon: "🔧" },
  { name: "Operational reporting", icon: "📊" },
];

const CAPABILITIES = [
  { icon: "👤", bg: "#eff6ff", title: "Patient Management", desc: "Clinical profiles, referral tracking, virus status, and medical records." },
  { icon: "📅", bg: "#def7ec", title: "Daily Session Management", desc: "Start, track, and complete dialysis sessions with pre/post vitals." },
  { icon: "🔄", bg: "#fef3c7", title: "Shift Scheduling", desc: "Patient-to-machine assignments across multiple daily shifts." },
  { icon: "🔧", bg: "#ffe4e6", title: "Machines & Wards", desc: "Asset inventory, operational status, and maintenance lifecycle." },
  { icon: "💧", bg: "#e6fafa", title: "RO Water Monitoring", desc: "Chlorine, hardness, pH, and conductivity historical logging." },
  { icon: "🔬", bg: "#fdf4ff", title: "Medical Recommendations", desc: "Laboratory result tracking and clinical decision support workflows." },
  { icon: "🧾", bg: "#eff6ff", title: "Billing", desc: "Invoice generation and financial tracking per session or patient." },
  { icon: "📦", bg: "#fef3c7", title: "Supplies & Inventory", desc: "Medical consumable tracking with low-stock alerting." },
  { icon: "📊", bg: "#def7ec", title: "Analytics & Reporting", desc: "Operational statistics, session trends, and shift-level reporting." },
];

const TECH_STACK = [
  { icon: "🟢", name: "Node.js + Express", desc: "REST API backend with JWT authentication middleware" },
  { icon: "🗄️", name: "SQLite", desc: "Single-file relational persistence, file-based offline storage" },
  { icon: "🌐", name: "HTML / CSS / JavaScript", desc: "Vanilla frontend — no framework dependency, RTL Arabic layout" },
  { icon: "🔐", name: "JWT Authentication", desc: "Token-based role-aware access control per operational interface" },
  { icon: "🤖", name: "Arabic NLP Parser", desc: "Custom intent extraction from free-form Arabic clinical text" },
];

const NLP_STEPS = [
  "Find patient",
  "Select context",
  "Start session",
  "Record weight & BP",
  "Confirm entry",
];

const ARCH_MODULES = ["Scheduling", "Clinical", "Billing", "Inventory", "Machines", "Reporting"];

const GALLERY = [
  { src: "/images/dialysis/01-dashboard-hero.png", alt: "Dashboard — KPIs and operational analytics", label: "01 — Dashboard" },
  { src: "/images/dialysis/02-session-management.png", alt: "Daily dialysis session management", label: "02 — Session Management" },
  { src: "/images/dialysis/03-ai-clinical-assistant.png", alt: "Arabic NLP clinical assistant", label: "03 — Clinical Assistant" },
  { src: "/images/dialysis/04-medical-recommendations.png", alt: "Medical recommendations workflow", label: "04 — Medical Recommendations" },
  { src: "/images/dialysis/05-ro-water-quality.png", alt: "RO water quality monitoring", label: "05 — RO Water Quality" },
  { src: "/images/dialysis/06-machine-management.png", alt: "Machine and maintenance management", label: "06 — Machine Management" },
];

/* ─── Page Component ─────────────────────────────────────── */
export default function DialysisCaseStudy() {
  return (
    <>
      {/* ── NAV ────────────────────────────────────────────── */}
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <Link href="/" className={styles.navBack}>
            ← Back to Portfolio
          </Link>
          <span className={styles.navBadge}>Case Study</span>
        </div>
      </nav>

      {/* ── HERO ───────────────────────────────────────────── */}
      <header className={styles.hero}>
        <div className={styles.container}>
          <p className={styles.heroEyebrow}>Healthcare Operations / Case Study</p>
          <h1 className={styles.heroH1}>
            Dialysis Operations<br />Management System
          </h1>
          <p className={styles.heroSub}>
            A domain-specific operational platform built to coordinate the complex daily workflow of a hemodialysis unit.
          </p>
          <div className={styles.badgeRow}>
            {["Offline-First", "Session Scheduling", "Clinical Workflow", "Machine Management", "Operational Analytics", "Arabic NLP Assistant"].map((b) => (
              <span key={b} className={styles.badge}>{b}</span>
            ))}
          </div>
        </div>

        {/* Browser frame */}
        <div className={styles.container}>
          <div className={styles.browserFrame}>
            <div className={styles.browserBar}>
              <div className={styles.browserDots}>
                <div className={`${styles.browserDot} ${styles.dotRed}`} />
                <div className={`${styles.browserDot} ${styles.dotYellow}`} />
                <div className={`${styles.browserDot} ${styles.dotGreen}`} />
              </div>
              <div className={styles.browserUrl}>
                localhost:3000/statistics.html — Dashboard
              </div>
            </div>
            <Image
              src="/images/dialysis/01-dashboard-hero.png"
              alt="Dialysis unit operational dashboard showing session KPIs and clinical analytics"
              width={1440}
              height={900}
              priority
              className={styles.heroImg}
            />
          </div>
        </div>
      </header>

      <hr className={styles.divider} />

      {/* ── THE PROBLEM ────────────────────────────────────── */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.containerNarrow}>
          <span className={styles.sectionLabel}>The Operational Challenge</span>
          <h2 className={styles.sectionTitle}>
            Managing a hemodialysis unit across multiple moving parts
          </h2>
          <p className={styles.sectionBody}>
            Dialysis operations require tight coordination across a wide range of concurrent workflows — all happening daily, across multiple shifts, with direct clinical implications.
          </p>
        </div>
        <div className={styles.container}>
          <div className={styles.challengeGrid}>
            {CHALLENGES.map((c) => (
              <div key={c.name} className={styles.challengeItem}>
                <span className={styles.challengeIcon}>{c.icon}</span>
                {c.name}
              </div>
            ))}
          </div>
          <p className={styles.problemNote}>
            The objective was to consolidate these workflows into a single operational system — replacing fragmented manual processes with structured, domain-specific software.
          </p>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* ── SOLUTION ───────────────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.containerNarrow}>
          <span className={styles.sectionLabel}>The Solution</span>
          <h2 className={styles.sectionTitle}>One system for the dialysis workflow</h2>
          <p className={styles.sectionBody}>
            The platform consolidates every operational domain into a single, authenticated, offline-first application — purpose-built for the specific language and logic of a hemodialysis unit.
          </p>
        </div>
        <div className={styles.container}>
          <div className={styles.capGrid}>
            {CAPABILITIES.map((c) => (
              <div key={c.title} className={styles.capCard}>
                <div className={styles.capIcon} style={{ background: c.bg }}>{c.icon}</div>
                <h4 className={styles.capTitle}>{c.title}</h4>
                <p className={styles.capDesc}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* ── FEATURE 01: Sessions ───────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.featureInner}>
            <div className={styles.featureText}>
              <span className={styles.sectionLabel}>Feature 01</span>
              <h2 className={styles.featureH2}>Daily Session Operations</h2>
              <p className={styles.featureP}>
                A centralized workflow for coordinating scheduled dialysis patients, distributing them across shifts and machines, and tracking each session&apos;s status throughout the operational day.
              </p>
              <ul className={styles.featureList}>
                <li>Daily patient roster and shift assignment</li>
                <li>Shift-based operational groups</li>
                <li>Patient search and filter by unit, virus status, shift</li>
                <li>Session status tracking: scheduled → started → completed</li>
              </ul>
            </div>
            <div className={styles.featureImgWrap}>
              <Image
                src="/images/dialysis/02-session-management.png"
                alt="Daily dialysis session management showing patients distributed across shifts"
                width={1440}
                height={900}
                className={styles.featureImg}
              />
            </div>
          </div>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* ── FEATURE 02: NLP Assistant ──────────────────────── */}
      <section className={`${styles.section} ${styles.featureHighlight}`}>
        <div className={styles.container}>
          <div className={`${styles.featureInner} ${styles.featureReverse}`}>
            <div className={styles.featureText}>
              <span className={styles.sectionLabel}>Feature 02 — Key Capability</span>
              <h2 className={styles.featureH2}>
                Natural-Language<br />Clinical Assistant
              </h2>
              <p className={styles.featureP}>
                An Arabic-language conversational interface that converts operational clinical instructions into structured dialysis session data. Clinical staff input observations naturally in Arabic; the NLP parser extracts intent and records structured values.
              </p>
              <div className={styles.nlpFlow}>
                {NLP_STEPS.map((step, i) => (
                  <span key={step}>
                    <span className={styles.nlpStep}>{step}</span>
                    {i < NLP_STEPS.length - 1 && (
                      <span className={styles.nlpArrow}>→</span>
                    )}
                  </span>
                ))}
              </div>
              <ul className={styles.featureList}>
                <li>Arabic-language intent parsing</li>
                <li>Extracts weight, blood pressure, pulse from free text</li>
                <li>Operates on real session context in the database</li>
                <li>Confirmation-driven structured recording</li>
              </ul>
            </div>
            <div className={`${styles.featureImgWrap} ${styles.featureImgNlp}`}>
              <Image
                src="/images/dialysis/03-ai-clinical-assistant.png"
                alt="Arabic NLP clinical assistant showing patient context, conversation and parsed vitals"
                width={1440}
                height={900}
                className={styles.featureImg}
              />
            </div>
          </div>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* ── FEATURE 03: Machines ───────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.featureInner}>
            <div className={styles.featureText}>
              <span className={styles.sectionLabel}>Feature 03</span>
              <h2 className={styles.featureH2}>Machine &amp; Maintenance Management</h2>
              <p className={styles.featureP}>
                Centralized visibility into the dialysis machine fleet — tracking inventory, ward assignments, operational status, and the full maintenance lifecycle including preventive and corrective records.
              </p>
              <ul className={styles.featureList}>
                <li>Machine inventory by manufacturer and model</li>
                <li>Ward and unit assignment</li>
                <li>Active / maintenance status tracking</li>
                <li>Preventive and corrective maintenance logs</li>
              </ul>
            </div>
            <div className={styles.featureImgWrap}>
              <Image
                src="/images/dialysis/06-machine-management.png"
                alt="Dialysis machine management showing fleet inventory, statuses and maintenance records"
                width={1440}
                height={900}
                className={styles.featureImg}
              />
            </div>
          </div>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* ── FEATURE 04: RO Water ───────────────────────────── */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.featureSmInner}>
            <div className={styles.featureText}>
              <span className={styles.sectionLabel}>Feature 04</span>
              <h2 className={styles.featureSmH2}>Domain-Specific Monitoring</h2>
              <p className={styles.featureP}>
                Dialysis operations extend beyond patient records. Water quality is a clinical safety requirement — the system provides structured logging of RO water parameters and historical trend visibility.
              </p>
              <ul className={styles.featureList}>
                <li>Chlorine levels (pre- and post-treatment)</li>
                <li>Water hardness</li>
                <li>pH readings</li>
                <li>Conductivity measurements</li>
              </ul>
            </div>
            <div className={styles.featureSmImg}>
              <Image
                src="/images/dialysis/05-ro-water-quality.png"
                alt="RO water quality monitoring showing historical chlorine, pH and conductivity readings"
                width={1440}
                height={900}
                className={styles.featureImg}
              />
            </div>
          </div>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* ── FEATURE 05: Medical Recommendations ────────────── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={`${styles.featureSmInner} ${styles.featureSmReverse}`}>
            <div className={styles.featureText}>
              <span className={styles.sectionLabel}>Feature 05</span>
              <h2 className={styles.featureSmH2}>Clinical Monitoring &amp; Recommendations</h2>
              <p className={styles.featureP}>
                Laboratory result tracking surfaces actionable decision-support prompts for clinical review. The system flags values outside reference ranges and presents them as a structured recommendation workflow — not autonomous diagnosis.
              </p>
              <ul className={styles.featureList}>
                <li>Hemoglobin and albumin monitoring</li>
                <li>Laboratory result history per patient</li>
                <li>Clinical threshold flagging</li>
                <li>Decision-support prompt workflow</li>
              </ul>
            </div>
            <div className={styles.featureSmImg}>
              <Image
                src="/images/dialysis/04-medical-recommendations.png"
                alt="Medical recommendations showing lab results and clinical decision support prompts"
                width={1440}
                height={900}
                className={styles.featureImg}
              />
            </div>
          </div>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* ── ARCHITECTURE ───────────────────────────────────── */}
      <section className={styles.arch}>
        <div className={styles.container}>
          <span className={`${styles.sectionLabel} ${styles.sectionLabelDark}`}>
            Engineering Approach
          </span>
          <h2 className={`${styles.sectionTitle} ${styles.sectionTitleLight}`}>
            Built for local, offline-first operational use
          </h2>
          <p className={`${styles.sectionBody} ${styles.sectionBodyMuted}`}>
            A monolithic but well-structured web application, designed to run on local infrastructure within a clinical environment without internet dependency.
          </p>
          <div className={styles.archGrid}>
            {/* Diagram */}
            <div className={styles.archDiagram}>
              <div className={`${styles.archLayer} ${styles.archLayerBlue}`}>
                🖥️ &nbsp;Operational UI (HTML / CSS / JS)
              </div>
              <div className={styles.archArrow}>↓</div>
              <div className={styles.archLayer}>⚡ REST API &nbsp;/&nbsp; Express.js</div>
              <div className={styles.archArrow}>↓</div>
              <div className={styles.archLayer}>🧩 Domain Services</div>
              <div className={styles.archArrow}>↓</div>
              <div className={`${styles.archLayer} ${styles.archLayerGreen}`}>
                🗄️ SQLite Database
              </div>
              <div className={styles.archModules}>
                {ARCH_MODULES.map((m) => (
                  <div key={m} className={styles.archModule}>{m}</div>
                ))}
              </div>
            </div>

            {/* Tech stack */}
            <div className={styles.techStack}>
              {TECH_STACK.map((t) => (
                <div key={t.name} className={styles.techItem}>
                  <div className={styles.techIcon}>{t.icon}</div>
                  <div>
                    <div className={styles.techName}>{t.name}</div>
                    <div className={styles.techDesc}>{t.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* ── CHALLENGES ─────────────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.containerNarrow}>
          <span className={styles.sectionLabel}>Selected Engineering Challenges</span>
          <h2 className={styles.sectionTitle}>Where the complexity lives</h2>
        </div>
        <div className={styles.container}>
          <div className={styles.challengesGrid}>
            <div className={styles.challengeCard}>
              <div className={styles.challengeNum}>01</div>
              <h3 className={styles.challengeCardH3}>Complex Scheduling</h3>
              <p className={styles.challengeCardP}>
                Modeling recurring dialysis schedules, daily sessions, multiple shifts, machines, and the operational constraints between them — while keeping the UI usable for non-technical clinical staff.
              </p>
            </div>
            <div className={styles.challengeCard}>
              <div className={styles.challengeNum}>02</div>
              <h3 className={styles.challengeCardH3}>Offline-First Operations</h3>
              <p className={styles.challengeCardP}>
                The platform is designed to remain fully operational on a local Windows environment without any internet connection — a hard requirement for the clinic environment it targets.
              </p>
            </div>
            <div className={styles.challengeCard}>
              <div className={styles.challengeNum}>03</div>
              <h3 className={styles.challengeCardH3}>Domain-Specific Workflows</h3>
              <p className={styles.challengeCardP}>
                Translating real dialysis-unit processes into structured software — including clinical vocabulary, Arabic NLP parsing, and RO water monitoring — required deep domain understanding beyond standard CRUD patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* ── GALLERY ────────────────────────────────────────── */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.containerNarrow}>
          <span className={styles.sectionLabel}>System Gallery</span>
          <h2 className={styles.sectionTitle}>All interfaces</h2>
        </div>
        <div className={styles.container}>
          <div className={styles.galleryGrid}>
            {GALLERY.map((g) => (
              <div key={g.src} className={styles.galleryItem}>
                <Image
                  src={g.src}
                  alt={g.alt}
                  width={720}
                  height={450}
                  className={styles.galleryImg}
                />
                <div className={styles.galleryCaption}>{g.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────── */}
      <footer className={styles.caseFooter}>
        <div className={styles.container}>
          <p className={styles.footerLine}>
            Dialysis Operations Management System &mdash; Healthcare Operations Platform
          </p>
          <p className={styles.privacyNote}>
            Portfolio screenshots use fictional demo data. No real patient information is displayed.
          </p>
        </div>
      </footer>
    </>
  );
}
