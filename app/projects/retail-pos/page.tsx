import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  Boxes,
  Building2,
  CreditCard,
  History,
  PackageCheck,
  ReceiptText,
  RefreshCcw,
  ScanBarcode,
  ShieldCheck,
  ShoppingCart,
  Store,
  Tags,
  Truck,
  WalletCards,
} from "lucide-react";
import styles from "./retail-pos-case-study.module.css";

const capabilities = [
  {
    icon: ShoppingCart,
    title: "Point of Sale",
    text: "A retail checkout workflow designed around products, variants, payments and day-to-day sales operations.",
  },
  {
    icon: ScanBarcode,
    title: "Product Variants",
    text: "Products can be represented through operational variants such as size, color, SKU and barcode.",
  },
  {
    icon: Boxes,
    title: "Inventory Control",
    text: "Stock is managed through inventory records and movements instead of being treated as a simple quantity field.",
  },
  {
    icon: Building2,
    title: "Branches & Warehouses",
    text: "The system models stock and operations across branches and warehouse locations.",
  },
  {
    icon: Truck,
    title: "Purchasing",
    text: "Supplier purchasing workflows connect incoming goods with inventory operations.",
  },
  {
    icon: RefreshCcw,
    title: "Returns",
    text: "Sales and return workflows preserve the relationship between transactions, stock and financial activity.",
  },
  {
    icon: WalletCards,
    title: "Cashbox & Shifts",
    text: "Cashbox and shift workflows provide operational control over daily retail financial activity.",
  },
  {
    icon: BarChart3,
    title: "Reporting",
    text: "Operational reports provide visibility across sales, inventory and related business activity.",
  },
];

const gallery = [
  {
    src: "/images/retail-pos/01-dashboard.png",
    title: "Operations Dashboard",
  },
  {
    src: "/images/retail-pos/02-pos-checkout.png",
    title: "POS Checkout",
  },
  {
    src: "/images/retail-pos/03-product-variants.png",
    title: "Product Variants",
  },
  {
    src: "/images/retail-pos/04-inventory.png",
    title: "Inventory",
  },
  {
    src: "/images/retail-pos/05-purchasing.png",
    title: "Purchasing",
  },
  {
    src: "/images/retail-pos/06-cashbox-shift.png",
    title: "Cashbox & Shift",
  },
  {
    src: "/images/retail-pos/07-returns.png",
    title: "Returns",
  },
  {
    src: "/images/retail-pos/08-reports.png",
    title: "Reports",
  },
];

export default function RetailPOSCaseStudy() {
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
            RETAIL OPERATIONS / CASE STUDY
          </div>

          <h1>Footwear &amp; Bags Retail Management System</h1>

          <p className={styles.heroText}>
            A multi-branch retail operations platform built to connect
            point-of-sale, product variants, inventory, purchasing, returns,
            cash control and reporting in one operational system.
          </p>

          <div className={styles.badges}>
            <span>Multi-Branch</span>
            <span>POS</span>
            <span>Product Variants</span>
            <span>Inventory</span>
            <span>Purchasing</span>
            <span>Returns</span>
            <span>Cashbox &amp; Shifts</span>
          </div>

          <div className={styles.heroBrowser}>
            <div className={styles.browserTop}>
              <div className={styles.dots}>
                <i />
                <i />
                <i />
              </div>

              <div className={styles.browserUrl}>
                Retail Operations — Management Dashboard
              </div>
            </div>

            <div className={styles.heroImage}>
              <Image
                src="/images/retail-pos/01-dashboard.png"
                alt="Footwear and bags retail management dashboard"
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

          <h2>Retail operations extend far beyond checkout.</h2>

          <p>
            A footwear and bags business has to coordinate products with
            multiple variants, stock locations, purchasing, sales, returns,
            financial shifts and reporting. These workflows become increasingly
            difficult to control when they are handled independently.
          </p>
        </div>

        <div className={styles.challengeGrid}>
          {[
            "Product variants",
            "Sizes & colors",
            "SKU & barcode workflows",
            "Branch operations",
            "Warehouse stock",
            "Inventory movements",
            "Supplier purchasing",
            "Point-of-sale transactions",
            "Sales returns",
            "Cashbox control",
            "Financial shifts",
            "Operational reporting",
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

          <h2>One system connecting the retail operation.</h2>

          <p>
            The platform brings the main retail workflows together while
            preserving clear operational boundaries between products,
            inventory, transactions and financial activity.
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
          <span>01 / PRODUCT MODEL</span>

          <h2>Retail products modeled through real variants.</h2>

          <p>
            Footwear and bags require more than a single product record.
            Operational variants allow the system to distinguish sizes, colors,
            SKUs and barcodes while keeping them connected to the underlying
            product.
          </p>

          <div className={styles.featurePoints}>
            <div>
              <Tags size={18} />
              Product and variant structure
            </div>

            <div>
              <ScanBarcode size={18} />
              SKU and barcode workflows
            </div>

            <div>
              <PackageCheck size={18} />
              Variant-level operational records
            </div>
          </div>
        </div>

        <div className={styles.featureShot}>
          <Image
            src="/images/retail-pos/03-product-variants.png"
            alt="Retail product variants management"
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
          />
        </div>
      </section>

      <section className={`${styles.feature} ${styles.featureReverse}`}>
        <div className={styles.featureText}>
          <span>02 / POINT OF SALE</span>

          <h2>Checkout connected to the rest of the operation.</h2>

          <p>
            The POS is part of the broader retail workflow rather than an
            isolated sales screen, connecting transactions with products,
            inventory and financial activity.
          </p>

          <div className={styles.featurePoints}>
            <div>
              <ShoppingCart size={18} />
              Sales workflow
            </div>

            <div>
              <CreditCard size={18} />
              Transaction handling
            </div>

            <div>
              <ReceiptText size={18} />
              Sales records
            </div>
          </div>
        </div>

        <div className={styles.featureShot}>
          <Image
            src="/images/retail-pos/02-pos-checkout.png"
            alt="Retail point of sale checkout"
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
          />
        </div>
      </section>

      <section className={styles.feature}>
        <div className={styles.featureText}>
          <span>03 / INVENTORY</span>

          <h2>Stock represented as operational movement.</h2>

          <p>
            Inventory workflows provide visibility into stock across the retail
            operation while maintaining the movement history needed for stronger
            traceability and control.
          </p>

          <div className={styles.featurePoints}>
            <div>
              <Boxes size={18} />
              Inventory visibility
            </div>

            <div>
              <Building2 size={18} />
              Warehouse and branch context
            </div>

            <div>
              <History size={18} />
              Movement history
            </div>
          </div>
        </div>

        <div className={styles.featureShot}>
          <Image
            src="/images/retail-pos/04-inventory.png"
            alt="Retail inventory management"
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
          />
        </div>
      </section>

      <section className={`${styles.feature} ${styles.featureReverse}`}>
        <div className={styles.featureText}>
          <span>04 / CASH CONTROL</span>

          <h2>Financial activity organized around shifts.</h2>

          <p>
            Cashbox and shift workflows provide a clearer operational boundary
            around daily sales, cash movements and shift-level financial
            activity.
          </p>

          <div className={styles.featurePoints}>
            <div>
              <WalletCards size={18} />
              Cashbox operations
            </div>

            <div>
              <History size={18} />
              Shift activity
            </div>

            <div>
              <ShieldCheck size={18} />
              Controlled financial workflow
            </div>
          </div>
        </div>

        <div className={styles.featureShot}>
          <Image
            src="/images/retail-pos/06-cashbox-shift.png"
            alt="Retail cashbox and shift management"
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
          />
        </div>
      </section>

      <section className={styles.darkSection}>
        <div className={styles.darkInner}>
          <div className={styles.sectionHeadDark}>
            <span>SYSTEM DESIGN</span>

            <h2>Designed around transactional retail workflows.</h2>

            <p>
              The application separates operational modules while maintaining
              the relationships required between products, stock, sales,
              purchasing, returns and financial activity.
            </p>
          </div>

          <div className={styles.architecture}>
            <div className={styles.archBox}>
              <strong>Retail Interface</strong>
              <small>
                POS · Products · Inventory · Purchasing · Returns · Reports
              </small>
            </div>

            <div className={styles.connector}>↓</div>

            <div className={styles.archBox}>
              <strong>Business Modules</strong>
              <small>
                Sales · Inventory · Purchasing · Cashbox · Promotions
              </small>
            </div>

            <div className={styles.connector}>↓</div>

            <div className={styles.archBox}>
              <strong>Operational Data</strong>
              <small>
                Products · Variants · Stock · Transactions · Financial Records
              </small>
            </div>
          </div>

          <div className={styles.stackGrid}>
            <div>
              <strong>Node.js</strong>
              <span>Application runtime</span>
            </div>

            <div>
              <strong>Express</strong>
              <span>Backend APIs</span>
            </div>

            <div>
              <strong>SQLite</strong>
              <span>Operational persistence</span>
            </div>

            <div>
              <strong>JavaScript</strong>
              <span>Browser interface</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <span>ENGINEERING FOCUS</span>

          <h2>More than a basic POS implementation.</h2>
        </div>

        <div className={styles.engineeringGrid}>
          <article>
            <Boxes size={25} />

            <h3>Inventory integrity</h3>

            <p>
              Sales, purchasing and returns all interact with stock, requiring
              controlled inventory-changing workflows rather than independent
              quantity edits.
            </p>
          </article>

          <article>
            <ScanBarcode size={25} />

            <h3>Variant complexity</h3>

            <p>
              Footwear requires operational handling of size and color variants
              while maintaining unique SKU and barcode identities.
            </p>
          </article>

          <article>
            <WalletCards size={25} />

            <h3>Financial control</h3>

            <p>
              Cashbox, shift and transaction records provide structure around
              daily retail financial activity and its relationship to sales and
              returns.
            </p>
          </article>
        </div>
      </section>

      <section className={`${styles.section} ${styles.gallerySection}`}>
        <div className={styles.sectionHead}>
          <span>SYSTEM GALLERY</span>

          <h2>Retail operations in practice.</h2>

          <p>
            All interfaces below use a dedicated fictional demo environment
            prepared specifically for portfolio presentation.
          </p>
        </div>

        <div className={styles.galleryGrid}>
          {gallery.map((item, index) => (
            <figure className={styles.galleryItem} key={item.src}>
              <div className={styles.galleryImage}>
                <Image
                  src={item.src}
                  alt={`Retail system ${item.title}`}
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
          <strong>Footwear &amp; Bags Retail Management System</strong>

          <p>
            All screenshots use fictional demo data. No real customer,
            supplier, employee, sales, inventory or financial information is
            shown.
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
