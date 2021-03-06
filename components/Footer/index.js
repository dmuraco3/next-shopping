import styles from "./footer.module.scss";

import {FaFacebookF, FaInstagram, FaPinterestP, FaTwitter} from 'react-icons/fa'


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <div className={styles.siteInfo}>
            <div className={styles.siteInfoNameContainer}>
              <h1 className={styles.siteInfoName}>HAPPY DAYS</h1>
              <h1 className={styles.siteInfoName}>CLOTHING</h1>
            </div>
            <h1 className={styles.siteInfoEmail}>info@mysite.com</h1>
            <h1 className={styles.siteInfoPhone}>123-456-7890</h1>
          </div>
        </div>
        <div className={styles.topRight}>
          <div className={styles.Navigation}>
            <div className={styles.NavigationContainer}>
              <span className={styles.NavigationHeader}>Shop</span>

              <span className={styles.NavigationComponent}>New</span>
              <span className={styles.NavigationComponent}>Men</span>
              <span className={styles.NavigationComponent}>Women</span>
            </div>
            <div className={styles.NavigationContainer}>
              <span className={styles.NavigationHeader}>Our Store</span>
              <span className={styles.NavigationComponent}>About Us</span>
              <span className={styles.NavigationComponent}>Subscribe</span>
              <span className={styles.NavigationComponent}>FAQ</span>
            </div>
            <div className={styles.NavigationContainer}>
              <span className={styles.NavigationHeader}>
                Terms & Conditions
              </span>
              <span className={styles.NavigationComponent}>Store Policy</span>
              <span className={styles.NavigationComponent}>
                Shipping & Returns
              </span>
              <span className={styles.NavigationComponent}>
                Payment Methods
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomLeft}>
          <div className={styles.socials}>
            <FaFacebookF className={styles.socialIcon} size={25} />
            <FaInstagram className={styles.socialIcon} size={25} />
            <FaPinterestP className={styles.socialIcon} size={25} />
            <FaTwitter className={styles.socialIcon} size={25} />
          </div>
        </div>
        <div className={styles.bottomRight}>
          <div className={styles.copyright}>

            <span className={styles.copyrightText}>?? 2021 by Happy Days LLC.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
