import styles from "./footerMain.module.css";
import logo from "../../../public/CA_light.png";
import Image from "next/image";
import Link from "next/link";

const FooterMain = () => {
  return (
    <div className={styles.footermain}>
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.block}>
          <div className={styles.logocontainer}>
            <Image src={logo} alt="cool-air.sk" />
          </div>
          <p>
            Ponúkame široký sortiment stropných ventilátorov viacerých značiek a
            typov, v rôznych farebných prevedeniach za výhodné ceny. Ponúkame
            taktiež zdarma poradenstvo pri výbere stropného ventilátora.
          </p>
        </div>
        <div className={styles.block}>
          <h3 className={styles.header}>Informácie</h3>
          <ul className={styles.list}>
            <Link href="/">
              <li className={`${styles.listitem} ${styles.arrow}`}>Obchodné podmienky</li>
            </Link>
            <Link href="/">
              <li className={`${styles.listitem} ${styles.arrow}`}>Reklamačný poriadok</li>
            </Link>
            <Link href="/">
              <li className={`${styles.listitem} ${styles.arrow}`}>Ochrana osobných údajov</li>
            </Link>
            <Link href="/">
              <li className={`${styles.listitem} ${styles.arrow}`}>Formulár na odstúpenie od zmluvy</li>
            </Link>
            <Link href="/">
              <li className={`${styles.listitem} ${styles.arrow}`}>Reklamačný formulár</li>
            </Link>
          </ul>
        </div>

        <div className={styles.block}>
          <h3 className={styles.header}>Poradňa</h3>
          <ul className={styles.list}>
            <Link href="/">
              <li className={`${styles.listitem} ${styles.arrow}`}>Ako vybrať správny ventilátor?</li>
            </Link>
            <Link href="/">
              <li className={`${styles.listitem} ${styles.arrow}`}>Náklady na prevádzku ventilátora</li>
            </Link>
            <Link href="/">
              <li className={`${styles.listitem} ${styles.arrow}`}>O koľko stupňov ventilátor ochladzuje?</li>
            </Link>
            <Link href="/">
              <li className={`${styles.listitem} ${styles.arrow}`}>Ventilátory s nízkym profilom</li>
            </Link>
            <Link href="/">
              <li className={`${styles.listitem} ${styles.arrow}`}>Záleží na počte lopatiek?</li>
            </Link>
          </ul>
        </div>

        <div className={styles.block}>
          <h3 className={styles.header}>Kontaktujte nás</h3>
          <ul className={styles.list}>
            <Link href="/">
              <li className={`${styles.listitem} ${styles.location}`}>TTD Solutions s. r. o. Lermontovova 911/3 81105 Bratislava</li>
            </Link>
            <Link href="/">
              <li className={`${styles.listitem} ${styles.phone}`}>0948 862 663</li>
            </Link>
            <Link href="/">
              <li className={`${styles.listitem} ${styles.email}`}>info@cool-air.sk</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterMain;
