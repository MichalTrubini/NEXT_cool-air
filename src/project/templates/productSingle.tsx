import DescriptionShort from '../../modules/catalog/descriptionShort';
import styles from './productSingle.module.css';
import calypso from '../../../public/213017_1.png';
import Image from 'next/image';

const ProductSingle = () => {
    return (
        <div className={`container ${styles.content}`}>
            <div className={styles.content_left}>
                <div className={styles.image}>
                    <Image src={calypso} alt='produkt' />
                </div>
            </div>
            <div className={styles.content_right}>
                <DescriptionShort />
            </div>
        </div>
    )
}

export default ProductSingle;