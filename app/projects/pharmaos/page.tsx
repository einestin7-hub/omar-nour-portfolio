import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  Boxes,
  CreditCard,
  Database,
  History,
  Layers3,
  PackageSearch,
  ReceiptText,
  ShieldCheck,
  ShoppingCart,
  Tags,
  Truck,
  WalletCards,
} from "lucide-react";
import styles from "./pharmaos-case-study.module.css";

const capabilities = [
  {
    icon: PackageSearch,
    title: "Product Master",
    text: "Structured product, package, SKU and barcode management designed around real pharmacy operations.",
  },
  {
    icon: Boxes,
    title: "Inventory Control",
    text: "Stock visibility, inventory movements and operational controls built around a centralized inventory boundary.",
  },
  {
    icon: Truck,
    title: "Purchasing",
    text: "Supplier purchasing workflows connect receiving activity with stock and operational records.",
  },
  {
    icon: Tags,
    title: "Pricing & Promotions",
    text: "Dedicated pricing workflows separate commercial pricing decisions from core product and inventory data.",
  },
  {
    icon: ShoppingCart,
    title: "POS & Sales",
    text: "A transactional point-of-sale workflow designed for fast daily pharmacy sales operations.",
  },
  {
    icon: WalletCards,
    title: "Cashbox Operations",
    text: "Cashbox and financial-shift workflows provide stronger operational control over daily transactions.",
  },
  {
    icon: BarChart3,
    title: "Reporting",
    text: "Operational reports turn purchasing, stock and sales records into useful management visibility.",
  },
  {
    icon: History,
    title: "Operational History",
    text: "Historical records preserve visibility across important product, pricing and transactional activity.",
  },
];

const gallery = [
  {
    src: "/images/pharmaos/01-pos-hero.png",
    title: "POS / Sales",
  },
  {
    src: "/images/pharmaos/02-inventory-ledger.png",
    title: "Inventory Ledger",
  },
  {
    src: "/images/pharmaos/03-product-master.png",
    title: "Product Master",
  },
  {
    src: "/images/pharmaos/04-purchasing.png",
    title: "Purchasing",
  },
  {
    src: "/images/pharmaos/05-pricing-promotions.png",
    title: "Pricing & Promotions",
  },
  {
    src: "/images/pharmaos/06-reports.png",
    title: "Reports",
  },
  {
    src: "/images/pharmaos/07-cashbox.png",
    title: "Cashbox",
  },
  {
    src: "/images/pharmaos/08-sales-history.png",
    title: "Sales History",
  },
];

export default function PharmaOSCaseStudy() {
  return (
    <main className={styles.page}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.back}>
          <ArrowLeft size={17} />
          Back to Portfolio
        </Link>

        <span className={styles.caseBadge}>Case Study</span>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.eyebrow}>
            PHARMACY OPERATIONS / CASE STUDY
          </div>

          <h1>PharmaOS</h1>

          <p className={styles.heroText}>
            A pharmacy operations platform built to connect product management,
            inventory, purchasing, pricing, sales, cashbox workflows and
            operational reporting in one structured system.
          </p>

          <div className={styles.badges}>
            <span>Local-First</span>
            <span>Product Master</span>
            <span>Inventory Control</span>
            <span>Purchasing</span>
            <span>POS & Sales</span>
            <span>Pricing</span>
            <span>Financial Operations</span>
          </div>

          <div className={styles.heroBrowser}>
            <div className={styles.browserTop}>
              <div className={styles.dots}>
                <i />
                <i />
                <i />
              </div>
              <div className={styles.browserUrl}>
                PharmaOS — Point of Sale
              </div>
            </div>

            <div className={styles.heroImage}>
              <Image
                src="/images/pharmaos/01-pos-hero.png"
                alt="PharmaOS point of sale interface"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 1200px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <span>THE OPERATIONAL CHALLENGE</span>
          <h2>Pharmacy workflows are deeply interconnected.</h2>
          <p>
            Daily pharmacy operations involve more than checkout. Products,
            stock, suppliers, receiving, pricing, sales and financial activity
            continuously affect one another. PharmaOS was structured to bring
            those workflows into a consistent operational model.
          </p>
        </div>

        <div className={styles.challengeGrid}>
          {[
            "Large product catalogs",
            "SKU & barcode management",
            "Stock movements",
            "Purchasing & receiving",
            "Supplier operations",
            "Pricing changes",
            "Point-of-sale transactions",
            "Cashbox activity",
            "Sales history",
            "Operational reporting",
            "Inventory visibility",
            "Transaction traceability",
          ].map((item) => (
            <div className={styles.challenge} key={item}>
              <span />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.softSection}`}>
        <div className={styles.sectionHead}>
          <span>THE SOLUTION</span>
          <h2>One operational platform instead of disconnected workflows.</h2>
          <p>
            PharmaOS organizes the major pharmacy workflows behind clear
            modules while preserving the relationships between products,
            inventory and transactions.
          </p>
        </div>

        <div className={styles.capabilityGrid}>
          {capabilities.map(({ icon: Icon, title, text }) => (
            <article className={styles.capability} key={title}>
              <div className={styles.iconBox}>
                <Icon size={22} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.feature}>
        <div className={styles.featureText}>
          <span>01 / PRODUCT & INVENTORY</span>
          <h2>A structured foundation for pharmacy stock.</h2>
          <p>
            Product management and inventory are treated as connected but
            distinct operational concerns. This makes it possible to maintain
            product identity while tracking the stock activity that happens
            around it.
          </p>

          <div className={styles.featurePoints}>
            <div>
              <PackageSearch size={18} />
              Product master and identifiers
            </div>
            <div>
              <Boxes size={18} />
              Inventory visibility
            </div>
            <div>
              <Database size={18} />
              Movement-oriented stock records
            </div>
          </div>
        </div>

        <div className={styles.featureShot}>
          <Image
            src="/images/pharmaos/02-inventory-ledger.png"
            alt="PharmaOS inventory ledger"
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
          />
        </div>
      </section>

      <section className={`${styles.feature} ${styles.featureReverse}`}>
        <div className={styles.featureText}>
          <span>02 / PRODUCT MASTER</span>
          <h2>Products modeled for operational use.</h2>
          <p>
            The product master provides a dedicated place for managing the
            commercial and operational identity of pharmacy products instead
            of embedding that information directly inside sales screens.
          </p>

          <div className={styles.featurePoints}>
            <div>
              <Layers3 size={18} />
              Structured product records
            </div>
            <div>
              <Tags size={18} />
              Pricing relationships
            </div>
            <div>
              <ShieldCheck size={18} />
              Controlled operational data
            </div>
          </div>
        </div>

        <div className={styles.featureShot}>
          <Image
            src="/images/pharmaos/03-product-master.png"
            alt="PharmaOS product master"
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
          />
        </div>
      </section>

      <section className={styles.feature}>
        <div className={styles.featureText}>
          <span>03 / PURCHASING</span>
          <h2>Purchasing connected to stock operations.</h2>
          <p>
            Purchasing workflows provide structured visibility into supplier
            activity and receiving, helping maintain a clear relationship
            between incoming goods and inventory records.
          </p>

          <div className={styles.featurePoints}>
            <div>
              <Truck size={18} />
              Supplier purchasing workflow
            </div>
            <div>
              <ReceiptText size={18} />
              Receiving records
            </div>
            <div>
              <Boxes size={18} />
              Inventory integration
            </div>
          </div>
        </div>

        <div className={styles.featureShot}>
          <Image
            src="/images/pharmaos/04-purchasing.png"
            alt="PharmaOS purchasing interface"
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
          />
        </div>
      </section>

      <section className={`${styles.feature} ${styles.featureReverse}`}>
        <div className={styles.featureText}>
          <span>04 / PRICING</span>
          <h2>Pricing managed as its own operational domain.</h2>
          <p>
            Pricing and promotions are separated from basic product records,
            providing a clearer foundation for commercial rules and historical
            pricing activity.
          </p>

          <div className={styles.featurePoints}>
            <div>
              <Tags size={18} />
              Pricing management
            </div>
            <div>
              <History size={18} />
              Historical visibility
            </div>
            <div>
              <ShoppingCart size={18} />
              Sales-facing pricing
            </div>
          </div>
        </div>

        <div className={styles.featureShot}>
          <Image
            src="/images/pharmaos/05-pricing-promotions.png"
            alt="PharmaOS pricing and promotions"
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
          />
        </div>
      </section>

      <section className={styles.darkSection}>
        <div className={styles.darkInner}>
          <div className={styles.sectionHeadDark}>
            <span>SYSTEM ARCHITECTURE</span>
            <h2>Designed around operational boundaries.</h2>
            <p>
              PharmaOS uses a modular backend architecture with SQLite
              persistence and a browser-based operational interface, designed
              for reliable local pharmacy workflows.
            </p>
          </div>

          <div className={styles.architecture}>
            <div className={styles.archBox}>
              <strong>Operational UI</strong>
              <small>POS · Inventory · Purchasing · Pricing · Reports</small>
            </div>

            <div className={styles.connector}>↓</div>

            <div className={styles.archBox}>
              <strong>Application Modules</strong>
              <small>Routes · Controllers · Services · Business Rules</small>
            </div>

            <div className={styles.connector}>↓</div>

            <div className={styles.archBox}>
              <strong>Persistence</strong>
              <small>SQLite · Migrations · Transactional Data</small>
            </div>
          </div>

          <div className={styles.stackGrid}>
            <div>
              <strong>Node.js</strong>
              <span>Application runtime</span>
            </div>
            <div>
              <strong>Express</strong>
              <span>Backend & REST APIs</span>
            </div>
            <div>
              <strong>SQLite</strong>
              <span>Local persistence</span>
            </div>
            <div>
              <strong>JavaScript</strong>
              <span>Operational frontend</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <span>ENGINEERING FOCUS</span>
          <h2>Built around business rules, not just screens.</h2>
        </div>

        <div className={styles.engineeringGrid}>
          <article>
            <Boxes size={25} />
            <h3>Inventory integrity</h3>
            <p>
              Stock-changing workflows are structured around controlled
              application boundaries rather than independent UI mutations.
            </p>
          </article>

          <article>
            <CreditCard size={25} />
            <h3>Transactional workflows</h3>
            <p>
              Purchasing, sales and financial operations require coordinated
              changes across multiple records and business rules.
            </p>
          </article>

          <article>
            <Database size={25} />
            <h3>Local operational reliability</h3>
            <p>
              The architecture supports local operation with application data
              persisted directly in SQLite.
            </p>
          </article>
        </div>
      </section>

      <section className={`${styles.section} ${styles.gallerySection}`}>
        <div className={styles.sectionHead}>
          <span>SYSTEM GALLERY</span>
          <h2>Operational interfaces</h2>
          <p>
            Screenshots below use a dedicated fictional demo environment
            prepared specifically for portfolio presentation.
          </p>
        </div>

        <div className={styles.galleryGrid}>
          {gallery.map((item, index) => (
            <figure className={styles.galleryItem} key={item.src}>
              <div className={styles.galleryImage}>
                <Image
                  src={item.src}
                  alt={`PharmaOS ${item.title}`}
                  fill
                  sizes="(max-width: 650px) 100vw, (max-width: 950px) 50vw, 33vw"
                />
              </div>
              <figcaption>
                {String(index + 1).padStart(2, "0")} / {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <div>
          <strong>PharmaOS</strong>
          <p>
            All screenshots use fictional demo data. No real pharmacy,
            customer, supplier, employee or financial information is shown.
          </p>
        </div>

        <Link href="/" className={styles.footerBack}>
          <ArrowLeft size={16} />
          Portfolio
        </Link>
      </footer>
    </main>
  );
}
