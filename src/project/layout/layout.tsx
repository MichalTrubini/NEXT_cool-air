import Footer from "./components/footer";
import Header from "./components/header";

const Layout = (props: any) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}

export default Layout;