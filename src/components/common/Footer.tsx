import Link from 'next/link';
import styles from './Footer.module.css'; // Ensure this import is correct

const Footer = () => {
  return (
    <footer className={styles.siteFooter}>
      <div className={`${styles.footerContainer} ${styles.container}`}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>About Polyger</h3>
          <p className={styles.footerText}>
            Your one-stop shop for all your needs. Quality products at affordable prices.
          </p>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Quick Links</h3>
          <ul className={styles.footerLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className={styles.footerHeading}>Customer Service</h3>
          <ul className={styles.footerLinks}>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/shipping">Shipping Policy</Link></li>
            <li><Link href="/returns">Returns & Refunds</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Connect With Us</h3>
          <div className={styles.socialLinks}>
            <Link href="#" className={styles.socialIcon}>Facebook</Link>
            <Link href="#" className={styles.socialIcon}>Twitter</Link>
            <Link href="#" className={styles.socialIcon}>Instagram</Link>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Polyger. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;