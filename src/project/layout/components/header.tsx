import HeaderBottom from "../../../modules/header/headerBottom";
import HeaderTop from "../../../modules/header/headerTop";
import TopBar from "../../../modules/header/topBar";
import { ScreenWidth } from "../../../utils/ScreenWidth";
import { Size } from "../../../types/enums";

const Header = () => {
    const screenWidth = ScreenWidth()

    return (
        <>
            <TopBar/>
            <HeaderTop/>
            {screenWidth < Size.tabletBreakpoint ? null : <HeaderBottom />}
        </>
    )
}

export default Header;