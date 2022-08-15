import styles from './searchbar.module.css';

const Searchbar = () => {

    const searchSubmitHandler = (e:any) => {
        e.preventDefault();
    }

    return (
        <form className={styles.form}>
            <input className={styles.searchbar} placeholder='hľadať produkty...'/>
            <button type='submit' className={styles.button} onClick={searchSubmitHandler}/>
        </form>
    )
}
export default Searchbar;