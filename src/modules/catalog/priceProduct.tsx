import { ProductPrice } from '../../types/types';
import styles from './priceProduct.module.css';

const PriceProduct:React.FC<ProductPrice> = (props) => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.price}><span>€</span><span>{props.price}</span><span className={styles.vat}> s DPH</span></p>
        </div>
    )
}

export default PriceProduct;