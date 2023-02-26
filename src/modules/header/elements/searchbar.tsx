import { ScreenWidth } from '../../../utils/ScreenWidth';
import styles from './searchbar.module.css';
import { Size } from '../../../types/enums';

const Searchbar = () => {
    const screenWidth = ScreenWidth();

    const searchSubmitHandler = (e:any) => {
        e.preventDefault();
    }

    return (
        <form className={styles.form}>
            {screenWidth < Size.tabletBreakpoint ? null : <input className={styles.searchbar} placeholder='hľadať produkty...'/>}
            <button type='submit' className={styles.button} onClick={searchSubmitHandler}/>
        </form>
    )
}
export default Searchbar;