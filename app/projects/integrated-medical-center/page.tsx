import Image from "next/image";
import Link from "next/link";
import "./integrated-medical-center.css";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  CreditCard,
  LayoutDashboard,
  PackageSearch,
  Stethoscope,
  UsersRound,
} from "lucide-react";

const capabilities = [
  "Patient Administration",
  "Appointments",
  "Reception Workflow",
  "Billing & Invoices",
  "Day Surgery",
  "Inventory",
  "Operational Reporting",
];

const workflow = [
  {
    number: "01",
    title: "Patient Administration",
    text: "Centralized patient records give reception staff a structured starting point for registration, search and operational follow-up.",
  },
  {
    number: "02",
    title: "Appointments & Reception",
    text: "Appointments connect patients with doctors and departments, while reception workflows expose waiting and examination states across the medical center.",
  },
  {
    number: "03",
    title: "Service Delivery",
    text: "Operational modules coordinate services across outpatient clinics and day-surgery workflows instead of treating each department as an isolated system.",
  },
  {
    number: "04",
    title: "Billing & Collection",
    text: "Invoices connect delivered services with patient billing, payment status and daily financial activity.",
  },
  {
    number: "05",
    title: "Inventory & Supplies",
    text: "Medical supplies are tracked through stock quantities, categories, unit values, expiry dates and low-stock visibility.",
  },
  {
    number: "06",
    title: "Management Reporting",
    text: "Operational and financial information is consolidated into dashboards and reports for management-level visibility.",
  },
];

const engineering = [
  {
    icon: UsersRound,
    title: "Multi-Department Operations",
    text: "The platform brings patients, doctors, departments and administrative workflows into a shared operational environment.",
  },
  {
    icon: CalendarDays,
    title: "Appointment Coordination",
    text: "Structured appointment records connect patients, doctors, departments, dates, workflow status and reception activities.",
  },
  {
    icon: ClipboardList,
    title: "Reception & Queue Flow",
    text: "Waiting-state visibility helps reception coordinate patients across different clinics and examination stages.",
  },
  {
    icon: CreditCard,
    title: "Financial Workflow",
    text: "Patient services connect with invoices, collections, expenses and reporting to provide operational financial visibility.",
  },
  {
    icon: PackageSearch,
    title: "Supply Management",
    text: "Inventory records expose stock levels, classifications, values, expiry information and low-stock conditions.",
  },
  {
    icon: LayoutDashboard,
    title: "Cross-Module Reporting",
    text: "The reporting layer combines operational and financial indicators rather than limiting analytics to a single department.",
  },
];

const gallery = [
  {
    src: "/images/medical-center/02-patients.png",
    title: "Patient Administration",
    text: "Searchable patient registry with structured patient identifiers and administrative information.",
  },
  {
    src: "/images/medical-center/03-appointments.png",
    title: "Appointment Management",
    text: "Appointment coordination across patients, physicians, departments, dates and operational states.",
  },
  {
    src: "/images/medical-center/04-reception-queue.png",
    title: "Reception Queue",
    text: "Department-level waiting visibility for coordinating patient flow through the medical center.",
  },
  {
    src: "/images/medical-center/05-billing-invoices.png",
    title: "Billing & Invoices",
    text: "Patient invoice management with service, payment and document actions integrated into the workflow.",
  },
  {
    src: "/images/medical-center/06-day-surgery-operations.png",
    title: "Day-Surgery Operations",
    text: "Structured scheduling and operational tracking for surgical procedures.",
  },
  {
    src: "/images/medical-center/07-inventory-supplies.png",
    title: "Inventory & Medical Supplies",
    text: "Stock visibility across medical supplies, quantities, classifications, values and expiry dates.",
  },
  {
    src: "/images/medical-center/08-financial-reports.png",
    title: "Reports & Analytics",
    text: "Financial and operational reporting with date filters, summary indicators and management analytics.",
  },
];

export default function IntegratedMedicalCenterCaseStudy() {
  return (
    <main className="mc-page">
      <nav className="mc-nav">
        <Link href="/#work" className="mc-back">
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>

        <span>Case Study</span>
      </nav>

      <section className="mc-hero">
        <div className="mc-hero-inner">
          <div className="mc-eyebrow">
            MEDICAL CENTER OPERATIONS / CASE STUDY
          </div>

          <h1>Integrated Medical Center System</h1>

          <p className="mc-lead">
            An integrated operations platform connecting patient administration,
            appointments, reception workflows, medical services, billing,
            day-surgery operations, inventory and management reporting.
          </p>

          <div className="mc-tags">
            {capabilities.map((capability) => (
              <span key={capability}>{capability}</span>
            ))}
          </div>

          <div className="mc-browser">
            <div className="mc-browser-bar">
              <div className="mc-browser-dots">
                <i />
                <i />
                <i />
              </div>

              <span>Medical Center — Operational Dashboard</span>
            </div>

            <div className="mc-browser-image">
              <Image
                src="/images/medical-center/01-dashboard.png"
                alt="Integrated Medical Center operational dashboard"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 1200px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mc-section mc-intro">
        <div className="mc-section-label">THE OPERATIONAL CHALLENGE</div>

        <div className="mc-intro-grid">
          <h2>
            A medical center is not a single workflow.
          </h2>

          <div>
            <p>
              Daily operations span patient registration, physicians,
              departments, appointments, reception queues, service delivery,
              billing, surgical procedures, medical supplies and management
              reporting.
            </p>

            <p>
              Managing these processes independently fragments information and
              makes it harder to maintain a consistent operational view across
              the center.
            </p>
          </div>
        </div>
      </section>

      <section className="mc-section mc-solution">
        <div className="mc-section-label">THE SOLUTION</div>

        <div className="mc-solution-heading">
          <div>
            <h2>One operational layer across the medical center.</h2>
          </div>

          <p>
            The system organizes interconnected administrative, service and
            financial workflows around shared operational records, giving
            reception and management a more coherent view of daily activity.
          </p>
        </div>

        <div className="mc-workflow">
          {workflow.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mc-section">
        <div className="mc-section-label">ENGINEERING FOCUS</div>

        <div className="mc-section-heading">
          <h2>Designed around operational integration.</h2>

          <p>
            The engineering challenge is not simply storing records. It is
            keeping multiple medical-center workflows connected as patients
            move between administrative and service processes.
          </p>
        </div>

        <div className="mc-engineering">
          {engineering.map(({ icon: Icon, title, text }) => (
            <article key={title}>
              <div className="mc-icon">
                <Icon size={23} />
              </div>

              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mc-section mc-feature">
        <div className="mc-feature-copy">
          <div className="mc-section-label">PATIENT FLOW</div>

          <h2>From appointment to reception.</h2>

          <p>
            Appointment records associate patients with physicians,
            departments and scheduled times. Reception then provides a
            department-oriented view of patients moving through waiting and
            examination states.
          </p>

          <div className="mc-checks">
            <span>
              <CheckCircle2 size={16} />
              Patient and physician association
            </span>

            <span>
              <CheckCircle2 size={16} />
              Department-level scheduling
            </span>

            <span>
              <CheckCircle2 size={16} />
              Waiting-state visibility
            </span>

            <span>
              <CheckCircle2 size={16} />
              Reception workflow
            </span>
          </div>
        </div>

        <div className="mc-feature-image">
          <Image
            src="/images/medical-center/03-appointments.png"
            alt="Medical center appointment management workflow"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="mc-section mc-feature mc-feature-reverse">
        <div className="mc-feature-copy">
          <div className="mc-section-label">FINANCIAL OPERATIONS</div>

          <h2>Billing connected to service delivery.</h2>

          <p>
            The billing workspace maintains patient invoices, totals, payment
            status and service-related actions while management reporting
            consolidates collections and other financial indicators.
          </p>

          <div className="mc-checks">
            <span>
              <CheckCircle2 size={16} />
              Patient invoices
            </span>

            <span>
              <CheckCircle2 size={16} />
              Payment status
            </span>

            <span>
              <CheckCircle2 size={16} />
              Service-related billing actions
            </span>

            <span>
              <CheckCircle2 size={16} />
              Financial reporting
            </span>
          </div>
        </div>

        <div className="mc-feature-image">
          <Image
            src="/images/medical-center/05-billing-invoices.png"
            alt="Medical center billing and invoice management"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="mc-section">
        <div className="mc-section-label">SYSTEM WALKTHROUGH</div>

        <div className="mc-section-heading">
          <h2>Operational workflows in context.</h2>

          <p>
            These screens use demonstration data and show the major operational
            areas represented by the system.
          </p>
        </div>

        <div className="mc-gallery">
          {gallery.map((item) => (
            <article key={item.src}>
              <div className="mc-gallery-image">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                />
              </div>

              <div className="mc-gallery-copy">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mc-section mc-difference">
        <div className="mc-section-label">PORTFOLIO CONTEXT</div>

        <div className="mc-difference-grid">
          <div>
            <Stethoscope size={28} />
            <h2>More than a single-clinic workflow.</h2>
          </div>

          <div>
            <p>
              While a focused clinic system centers on longitudinal clinical
              encounters, this project demonstrates coordination across a
              broader medical-center operation.
            </p>

            <p>
              Its portfolio value comes from connecting reception,
              appointments, surgical operations, financial workflows,
              inventory and management reporting within the same operational
              environment.
            </p>
          </div>
        </div>
      </section>

      <section className="mc-section mc-summary">
        <div>
          <div className="mc-section-label">PROJECT OUTCOME</div>

          <h2>
            A unified operational view of a multi-department medical center.
          </h2>
        </div>

        <div className="mc-summary-copy">
          <p>
            The project demonstrates the design of software around real
            organizational workflows rather than isolated CRUD screens,
            connecting patient-facing processes with operational, inventory
            and financial management.
          </p>

          <Link href="/#work" className="mc-cta">
            Explore more projects
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      <footer className="mc-footer">
        <span>Integrated Medical Center System</span>
        <span>Portfolio Case Study · 2026</span>
      </footer>
    </main>
  );
}
