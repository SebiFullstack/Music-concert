import styles from './Footer.module.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id="footer" className={styles.footerWrapper}>
      <div className={styles.footer}>
        <div className={styles.left}>
          <div className={styles.logo}>Music.</div>
          <nav className={styles.nav}>
            <a href="#top">Home</a>
            <a href="">Company</a>
            <a href="#Blog">Blog</a>
            <a href="#footer">Contact Us</a>
            <a href="#top">Sitemap</a>
          </nav>
        </div>
        <div className={styles.socials}>
          <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F%3Flocale%3Duk_UA" target="_blank"><FaFacebookF /></a>
          <a href="https://x.com/" target="_blank"><FaTwitter /></a>
          <a href="https://www.linkedin.com/" target="_blank"><FaLinkedinIn /></a>
          <a href="https://www.instagram.com/patron_dsns/" target="_blank"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
}
