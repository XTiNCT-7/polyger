import Link from 'next/link';
import styles from './Header.module.css'; // Make sure this import is correct

const Header = () => {
  const cartItemCount:number = 6;
  return (
    <header className={styles.siteHeader}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logo}>
            Polyger
          </Link>
        </div>
        
        <div className={styles.searchContainer}>
          <input 
            type="text" 
            placeholder="Search products..." 
            className={styles.searchInput} 
          />
          <button className={styles.searchButton}>Search</button>
        </div>
        
        <nav className={styles.headerNav}>
          <Link href="/cart" className={styles.navLink}>
            Cart {cartItemCount}
          </Link>
          <Link href="/admin/dashboard" className={styles.navLink}>
            Admin
          </Link>
          <button className={styles.authButton}>Sign In</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;