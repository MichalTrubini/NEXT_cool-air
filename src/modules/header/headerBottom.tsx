import HeaderCategory from './elements/headerCategory';
import HeaderNav from './elements/headerNav';
import styles from './headerbottom.module.css';

const HeaderBottom = () => {
    return (
        <div className={styles.headerbottom}>
            <div className={`container ${styles.flex}`}>
                <HeaderCategory />
                <HeaderNav />
            </div>
        </div>
    )
}
export default HeaderBottom;