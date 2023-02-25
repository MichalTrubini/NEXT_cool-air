import DescriptionShort from '../../modules/catalog/descriptionShort';
import styles from './productSingle.module.css';
import calypso from '../../../public/213017_1.png';
import Image from 'next/image';
import PriceProduct from '../../modules/catalog/priceProduct';
import CartForm from '../../modules/catalog/cartForm';
import Identifiers from '../../modules/catalog/identifiers';

const ProductSingle = ({...product}) => {
console.log(product)
    return (
        <div className={`container ${styles.content}`}>
            <div className={styles.content_left}>
                <div className={styles.image}>
                    <Image src={calypso} alt='produkt' />
                </div>
            </div>
            <div className={styles.content_right}>
                <DescriptionShort description={product[0].description}/>
                <PriceProduct price={product[0].price}/>
                <CartForm />
                <Identifiers ean={product[0].ean} sku={product[0].sku} brand={product[0].brand}/>
            </div>
        </div>
    )
}

export default ProductSingle;