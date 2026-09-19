import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Activity,
  Users,
  Stethoscope,
  HeartPulse,
  ClipboardList,
  Pill,
  FileText,
  Database,
  Server,
  CheckCircle2,
  BarChart3,
  History,
  Code2,
} from "lucide-react";

import styles from "./internal-medicine-clinic.module.css";

const capabilities = [
  "Patient Records",
  "Clinical Encounters",
  "ICD-10",
  "Chronic Disease Tracking",
  "Prescriptions",
  "Clinical History",
];

const challenges = [
  "Maintaining a longitudinal medical record across repeated outpatient visits",
  "Keeping vital signs, examination findings and diagnoses connected to each encounter",
  "Tracking chronic conditions such as CKD, hypertension and diabetes over time",
  "Organizing medications and prescriptions alongside the clinical history",
  "Providing fast access to previous visits during a new examination",
  "Representing diagnoses using structured ICD-10 codes",
  "Managing laboratory and investigation information within the patient workflow",
  "Producing useful clinic-level operational statistics and reports",
];

const solutionCards = [
  {
    icon: Users,
    title: "Patient Registry",
    text: "Centralized patient records with demographics, contact information, chronic conditions and rapid access to the clinical workflow.",
  },
  {
    icon: Stethoscope,
    title: "Structured Encounters",
    text: "Clinical encounters combine complaints, examination findings, vital signs, diagnoses and follow-up information in one workspace.",
  },
  {
    icon: HeartPulse,
    title: "Chronic Disease Tracking",
    text: "Domain-specific fields support longitudinal tracking of conditions including chronic kidney disease, hypertension and diabetes.",
  },
  {
    icon: ClipboardList,
    title: "Clinical History",
    text: "Previous visits remain accessible as a longitudinal timeline, helping preserve continuity between encounters.",
  },
  {
    icon: Pill,
    title: "Prescription Workflow",
    text: "Structured medication records feed into a printable bilingual prescription designed for outpatient clinical use.",
  },
  {
    icon: BarChart3,
    title: "Operational Reporting",
    text: "Clinic-level reporting summarizes patients, visits, common diagnoses and chronic disease distribution.",
  },
];

const gallery = [
  {
    src: "/images/internal-medicine-clinic/01-dashboard.png",
    label: "01 — Clinic Dashboard",
  },
  {
    src: "/images/internal-medicine-clinic/02-patients.png",
    label: "02 — Patient Registry",
  },
  {
    src: "/images/internal-medicine-clinic/03-clinical-encounter.png",
    label: "03 — Clinical Encounter",
  },
  {
    src: "/images/internal-medicine-clinic/04-patient-chronic-record.png",
    label: "04 — Chronic Disease Record",
  },
  {
    src: "/images/internal-medicine-clinic/04-visit-history-timeline.png",
    label: "05 — Visit History",
  },
  {
    src: "/images/internal-medicine-clinic/06-prescription-print.png",
    label: "06 — Prescription",
  },
  {
    src: "/images/internal-medicine-clinic/07-settings-chronic-diseases.png",
    label: "07 — Chronic Disease Configuration",
  },
  {
    src: "/images/internal-medicine-clinic/08-reports-analytics.png",
    label: "08 — Reports & Analytics",
  },
];

export default function InternalMedicineClinicCaseStudy() {
  return (
    <main className={styles.page}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <Link href="/" className={styles.backLink}>
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>

          <span className={styles.caseBadge}>Case Study</span>
        </div>
      </nav>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.eyebrow}>
            INTERNAL MEDICINE &amp; NEPHROLOGY / CASE STUDY
          </div>

          <h1>Internal Medicine &amp; Nephrology Clinic System</h1>

          <p className={styles.heroText}>
            A longitudinal clinical management platform built to connect
            patient records, structured clinical encounters, chronic disease
            tracking, investigations, prescriptions and operational reporting.
          </p>

          <div className={styles.badges}>
            {capabilities.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className={styles.browser}>
            <div className={styles.browserBar}>
              <div className={styles.browserDots}>
                <i />
                <i />
                <i />
              </div>

              <div className={styles.browserUrl}>
                Clinical Workspace — Internal Medicine &amp; Nephrology
              </div>
            </div>

            <div className={styles.heroImage}>
              <Image
                src="/images/internal-medicine-clinic/03-clinical-encounter.png"
                alt="Internal medicine and nephrology structured clinical encounter"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 1200px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.sectionLabel}>THE PROBLEM</span>
              <h2>Clinical information grows across every visit.</h2>
            </div>

            <p>
              Outpatient internal medicine requires more than storing patient
              names. Each visit adds observations, diagnoses, medications,
              chronic-disease information and follow-up context that must remain
              connected to the patient over time.
            </p>
          </div>

          <div className={styles.challengeGrid}>
            {challenges.map((item, index) => (
              <div className={styles.challengeItem} key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className={`${styles.section} ${styles.softSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.sectionLabel}>THE SOLUTION</span>
              <h2>One workflow around the patient record.</h2>
            </div>

            <p>
              The system organizes outpatient clinical work around a
              longitudinal patient record, connecting each new encounter with
              the information recorded during previous visits.
            </p>
          </div>

          <div className={styles.solutionGrid}>
            {solutionCards.map(({ icon: Icon, title, text }) => (
              <article className={styles.solutionCard} key={title}>
                <div className={styles.iconBox}>
                  <Icon size={23} />
                </div>

                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Feature 01 */}
      <section className={styles.feature}>
        <div className={styles.container}>
          <div className={styles.featureGrid}>
            <div className={styles.featureCopy}>
              <span className={styles.featureNumber}>FEATURE / 01</span>
              <h2>Patient management built for repeated care.</h2>

              <p>
                The patient registry provides a searchable operational view of
                the clinic population while keeping chronic conditions visible
                before entering the examination workflow.
              </p>

              <div className={styles.featurePoints}>
                <span>
                  <CheckCircle2 size={16} /> Patient file numbers
                </span>
                <span>
                  <CheckCircle2 size={16} /> Demographic information
                </span>
                <span>
                  <CheckCircle2 size={16} /> Chronic disease indicators
                </span>
                <span>
                  <CheckCircle2 size={16} /> Search and patient access
                </span>
              </div>
            </div>

            <div className={styles.featureImage}>
              <Image
                src="/images/internal-medicine-clinic/02-patients.png"
                alt="Patient management registry"
                fill
                sizes="(max-width: 900px) 100vw, 55vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 02 */}
      <section className={`${styles.feature} ${styles.clinicalFeature}`}>
        <div className={styles.container}>
          <div className={styles.featureGridReverse}>
            <div className={styles.featureImage}>
              <Image
                src="/images/internal-medicine-clinic/03-clinical-encounter.png"
                alt="Structured clinical encounter"
                fill
                sizes="(max-width: 900px) 100vw, 55vw"
              />
            </div>

            <div className={styles.featureCopy}>
              <span className={styles.featureNumber}>FEATURE / 02</span>
              <h2>A structured clinical encounter workspace.</h2>

              <p>
                Each examination brings the essential clinical context into a
                single screen: vital signs, chief complaint, examination,
                diagnosis and ICD-10 coding alongside the patient&apos;s
                existing medical record.
              </p>

              <div className={styles.workflow}>
                <div>
                  <b>01</b>
                  <span>Vitals</span>
                </div>
                <i />
                <div>
                  <b>02</b>
                  <span>Examination</span>
                </div>
                <i />
                <div>
                  <b>03</b>
                  <span>Diagnosis</span>
                </div>
                <i />
                <div>
                  <b>04</b>
                  <span>Follow-up</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 03 */}
      <section className={styles.feature}>
        <div className={styles.container}>
          <div className={styles.featureGrid}>
            <div className={styles.featureCopy}>
              <span className={styles.featureNumber}>FEATURE / 03</span>
              <h2>Chronic disease data becomes part of the encounter.</h2>

              <p>
                Instead of reducing chronic disease history to free-text notes,
                the workflow provides structured disease-specific information.
                For nephrology patients, this includes CKD stage, recent
                creatinine, eGFR and underlying cause where recorded.
              </p>

              <div className={styles.featurePoints}>
                <span>
                  <CheckCircle2 size={16} /> Chronic kidney disease
                </span>
                <span>
                  <CheckCircle2 size={16} /> Hypertension
                </span>
                <span>
                  <CheckCircle2 size={16} /> Diabetes mellitus
                </span>
                <span>
                  <CheckCircle2 size={16} /> Disease-specific fields
                </span>
              </div>
            </div>

            <div className={styles.featureImage}>
              <Image
                src="/images/internal-medicine-clinic/04-patient-chronic-record.png"
                alt="Structured chronic disease tracking"
                fill
                sizes="(max-width: 900px) 100vw, 55vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 04 */}
      <section className={`${styles.feature} ${styles.softSection}`}>
        <div className={styles.container}>
          <div className={styles.featureGridReverse}>
            <div className={styles.featureImage}>
              <Image
                src="/images/internal-medicine-clinic/04-visit-history-timeline.png"
                alt="Longitudinal patient visit history"
                fill
                sizes="(max-width: 900px) 100vw, 55vw"
              />
            </div>

            <div className={styles.featureCopy}>
              <span className={styles.featureNumber}>FEATURE / 04</span>
              <h2>Longitudinal history stays within reach.</h2>

              <p>
                Previous encounters remain attached to the patient record,
                allowing clinicians to move between the current examination and
                earlier visits without fragmenting the clinical history.
              </p>

              <div className={styles.featurePoints}>
                <span>
                  <History size={16} /> Visit timeline
                </span>
                <span>
                  <ClipboardList size={16} /> Previous clinical records
                </span>
                <span>
                  <Pill size={16} /> Medication history
                </span>
                <span>
                  <Activity size={16} /> Clinical continuity
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 05 */}
      <section className={styles.feature}>
        <div className={styles.container}>
          <div className={styles.featureGrid}>
            <div className={styles.featureCopy}>
              <span className={styles.featureNumber}>FEATURE / 05</span>
              <h2>From structured medication data to a printable Rx.</h2>

              <p>
                Prescribed medications are presented in a dedicated printable
                prescription layout containing patient information, vital
                measurements, medication instructions and clinic information.
              </p>

              <div className={styles.featurePoints}>
                <span>
                  <CheckCircle2 size={16} /> Medication name
                </span>
                <span>
                  <CheckCircle2 size={16} /> Frequency and duration
                </span>
                <span>
                  <CheckCircle2 size={16} /> Prescription notes
                </span>
                <span>
                  <CheckCircle2 size={16} /> Print-ready document
                </span>
              </div>
            </div>

            <div className={`${styles.featureImage} ${styles.prescriptionImage}`}>
              <Image
                src="/images/internal-medicine-clinic/06-prescription-print.png"
                alt="Printable medical prescription"
                fill
                sizes="(max-width: 900px) 100vw, 55vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Analytics */}
      <section className={`${styles.feature} ${styles.softSection}`}>
        <div className={styles.container}>
          <div className={styles.featureGridReverse}>
            <div className={styles.featureImage}>
              <Image
                src="/images/internal-medicine-clinic/08-reports-analytics.png"
                alt="Clinic reports and analytics"
                fill
                sizes="(max-width: 900px) 100vw, 55vw"
              />
            </div>

            <div className={styles.featureCopy}>
              <span className={styles.featureNumber}>FEATURE / 06</span>
              <h2>Operational visibility beyond individual visits.</h2>

              <p>
                Reporting turns accumulated clinic data into an operational
                overview covering patient counts, visit activity, common
                diagnoses and chronic disease distribution.
              </p>

              <div className={styles.featurePoints}>
                <span>
                  <CheckCircle2 size={16} /> Patient statistics
                </span>
                <span>
                  <CheckCircle2 size={16} /> Visit activity
                </span>
                <span>
                  <CheckCircle2 size={16} /> Diagnosis distribution
                </span>
                <span>
                  <CheckCircle2 size={16} /> Chronic disease reporting
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className={styles.architecture}>
        <div className={styles.container}>
          <div className={styles.archHeading}>
            <span>ENGINEERING</span>
            <h2>Designed as a focused local clinical platform.</h2>
            <p>
              A lightweight web architecture keeps the application practical
              for local outpatient operations while maintaining clear
              separation between interface, server logic and persistent
              clinical data.
            </p>
          </div>

          <div className={styles.archDiagram}>
            <div>
              <Code2 size={25} />
              <b>Clinical Interface</b>
              <span>HTML · CSS · JavaScript</span>
            </div>

            <strong>→</strong>

            <div>
              <Server size={25} />
              <b>Application Server</b>
              <span>Node.js · Express</span>
            </div>

            <strong>→</strong>

            <div>
              <Database size={25} />
              <b>Clinical Data</b>
              <span>SQLite</span>
            </div>
          </div>

          <div className={styles.archCards}>
            <article>
              <span>01</span>
              <h3>Patient-Centered Model</h3>
              <p>
                Encounters, chronic conditions, investigations and
                prescriptions remain connected to the longitudinal patient
                record.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Domain-Specific Workflow</h3>
              <p>
                The interface reflects outpatient internal medicine and
                nephrology workflows rather than a generic CRUD administration
                pattern.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Local Data Architecture</h3>
              <p>
                SQLite provides lightweight local persistence suited to the
                current clinic deployment model.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Engineering challenges */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.sectionLabel}>ENGINEERING CHALLENGES</span>
              <h2>More than a digital patient list.</h2>
            </div>

            <p>
              The core engineering challenge is preserving clinical context
              while keeping repeated outpatient workflows fast enough for
              everyday use.
            </p>
          </div>

          <div className={styles.engineeringGrid}>
            <article>
              <span>01</span>
              <h3>Longitudinal data modeling</h3>
              <p>
                Patient information has to remain stable while new visits,
                diagnoses and treatment information continue to accumulate.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Structured vs. free-text data</h3>
              <p>
                Clinical documentation requires flexibility for narrative
                examination notes while preserving structured values where they
                support tracking and reporting.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Clinical workflow density</h3>
              <p>
                Vital signs, history, diagnosis, disease-specific information
                and treatment need to coexist without forcing the user through
                disconnected screens.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className={`${styles.section} ${styles.gallerySection}`}>
        <div className={styles.container}>
          <div className={styles.galleryHeading}>
            <span className={styles.sectionLabel}>SYSTEM GALLERY</span>
            <h2>Clinical workflows in context.</h2>
          </div>

          <div className={styles.galleryGrid}>
            {gallery.map((item) => (
              <figure className={styles.galleryItem} key={item.src}>
                <div className={styles.galleryImage}>
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    sizes="(max-width: 650px) 100vw, (max-width: 1000px) 50vw, 33vw"
                  />
                </div>

                <figcaption>{item.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div>
            <b>Internal Medicine &amp; Nephrology Clinic System</b>
            <span>Clinical Management Case Study</span>
          </div>

          <p>
            Portfolio screenshots use fictional demonstration data. No real
            patient information is displayed.
          </p>
        </div>
      </footer>
    </main>
  );
}
