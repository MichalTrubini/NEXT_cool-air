import styles from './descriptionShort.module.css';

const DescriptionShort: React.FC<{description:string}> = (props) => {
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.header}>Popis produktu</h3>
            <div className={styles.description}>
                <p className={styles.text}>{props.description}</p>
            </div>
        </div>
    )
}

export default DescriptionShort;