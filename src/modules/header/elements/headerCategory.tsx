import styles from './headercategory.module.css';

const HeaderCategory = () => {
    return (
        <div className={styles.categories}>
            <p className={styles.catname}>kategórie</p>
            <ul className={styles.catlist}></ul>
        </div>
    )
}
export default HeaderCategory;