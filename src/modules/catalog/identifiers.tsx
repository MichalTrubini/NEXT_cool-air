import { ProductIdentifiers } from '../../types/types';
import styles from './identifiers.module.css';

const Identifiers:React.FC<ProductIdentifiers> = (props) => {
    return (
        <div>
            <p className={styles.text}><span className={styles.bold}>EAN: </span><span>{props.ean}</span></p>
            <p className={styles.text}><span className={styles.bold}>Katalógové číslo: </span><span>{props.sku}</span></p>
            <p className={styles.text}><span className={styles.bold}>Značka: </span><span>{props.brand}</span></p>
        </div>
    )
}

export default Identifiers;