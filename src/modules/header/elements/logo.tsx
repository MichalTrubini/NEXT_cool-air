import styles from './logo.module.css';
import Image from 'next/image';
import logo from '../../../../public/CA.png';
import Link from 'next/link';

const Logo = () => {
    return (
        <div className={styles.logo}>
            <Link href='/'><a><Image src={logo} alt='cool-air' layout='intrinsic'/></a></Link>
        </div>
    )
}
export default Logo;