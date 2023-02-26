import { ScreenWidth } from "../../../utils/ScreenWidth";
import styles from "./cartAccountBlock.module.css";
import {Size} from "../../../types/enums";

const CartAccountBlock = () => {
  const screenWidth = ScreenWidth();

  return (
    <div className={styles.block}>
      <div className={styles.flex}>
        <div className={`${styles.account} ${styles.icon}`}></div>
        {screenWidth < Size.tabletBreakpoint ? null : <p className={styles.name}>účet</p>}
      </div>
      <div className={styles.flex}>
        <div className={`${styles.cart} ${styles.icon}`}></div>
        {screenWidth < Size.tabletBreakpoint ? null : <p className={styles.name}>košík</p>}
      </div>
    </div>
  );
};
export default CartAccountBlock;
