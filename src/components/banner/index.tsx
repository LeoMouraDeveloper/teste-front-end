import styles from "./banner.module.sass";
import Banners from "/src/assets/images/banner.svg";
import BannerShadow from "/src/assets/images/bannerShadow.svg";

export default function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerWrapper}>
        <img src={Banners} alt="Banner" className={styles.bannerImage} />
        <img
          src={BannerShadow}
          alt="Banner Shadow"
          className={styles.bannerShadow}
        />
        <div className={styles.textOverlay}>
          <h1>Venha conhecer nossas promoções</h1>
          <h2>50% Off nos produtos</h2>
          <button className={styles.ctaButton}>Ver produto</button>
        </div>
      </div>
    </div>
  );
}
