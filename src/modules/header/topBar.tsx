import { ScreenWidth } from "../../utils/ScreenWidth";
import styles from "./topbar.module.css";
import { Size } from "../../types/enums";

const TopBar = () => {
  const screenWidth = ScreenWidth();

  return (
    <div className={styles.topbar}>
      <div className={`container ${styles.content}`}>
        <div className={styles.left}>
          <div className={styles.icon}></div>
          <p className={styles.text}>doprava nad 50 Eur zdarma</p>
        </div>
        {screenWidth < Size.tabletBreakpoint ? null : (
          <div className={styles.right}>
            <p className={styles.text}>kontaktujte nás: 0948 862 663</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default TopBar;
