import CartAccountBlock from "./elements/cartAccountBlock";
import Logo from "./elements/logo";
import Searchbar from "./elements/searchbar";
import styles from './headertop.module.css';

const HeaderTop = () => {
    return (
        <div className={`container ${styles.headertop}`}>
            <Logo/>
            <Searchbar/>
            <CartAccountBlock />
        </div>
    )
}
export default HeaderTop;