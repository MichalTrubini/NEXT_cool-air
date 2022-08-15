import styles from './cartAccountBlock.module.css';

const CartAccountBlock = () => {
    return (
        <div className={styles.block}>
            <div className={styles.flex}>
                <div className={`${styles.account} ${styles.icon}`}></div>
                <p className={styles.name}>účet</p>
            </div>
            <div className={styles.flex}>
                <div className={`${styles.cart} ${styles.icon}`}></div>
                <p className={styles.name}>košík</p>
            </div>
        </div>
    )
}
export default CartAccountBlock;