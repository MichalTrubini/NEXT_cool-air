import styles from './logo.module.css';
import Image from 'next/image';
import logo from '../../../../public/CA.png';
import Link from 'next/link';
import mobileLogo from '../../../../public/CA_mobile.png';
import { ScreenWidth } from '../../../utils/ScreenWidth';
import { Size } from '../../../types/enums';

const Logo = () => {
    const screenWidth = ScreenWidth();
    return (
        <div className={styles.logo}>
            <Link href='/'><a><Image src={screenWidth < Size.tabletBreakpoint ? mobileLogo : logo} alt='cool-air' layout='intrinsic'/></a></Link>
        </div>
    )
}
export default Logo;