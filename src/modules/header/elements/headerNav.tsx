import styles from './headernav.module.css';
import Link from 'next/link';

const HeaderNav = () => {
    return (
        <div className={styles.nav}>
            <ul className={styles.catlist}>
                <Link href='/'><li className={styles.listitem}>domov</li></Link>
                <Link href='/'><li className={styles.listitem}>obchod</li></Link>
                <Link href='/'><li className={styles.listitem}>blog a poradňa</li></Link>
                <Link href='/'><li className={styles.listitem}>obchodné podmienky</li></Link>
                <Link href='/'><li className={styles.listitem}>kontaktujte nás</li></Link>
            </ul>
        </div>
    )
}
export default HeaderNav;