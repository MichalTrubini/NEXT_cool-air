import PageTitleBar from "../../modules/common/pageTitle/pageTitleBar";
import Footer from "./components/footer";
import Header from "./components/header";

const Layout = (props: any) => {
  return (
    <>
      <Header />
        <main>
            <PageTitleBar />
            {props.children}
        </main>
      <Footer />
    </>
  );
};

export default Layout;
