import DescriptionShort from "../../modules/catalog/descriptionShort";
import styles from "./productTemplate.module.css";
import Image from "next/image";
import PriceProduct from "../../modules/catalog/priceProduct";
import CartForm from "../../modules/catalog/cartForm";
import Identifiers from "../../modules/catalog/identifiers";
import PageTitleBar from "../../modules/common/pageTitle/pageTitleBar";
import Specs from "../../modules/catalog/specs";

const ProductSingle = ({ ...product }) => {
  console.log('product', product)
  return (
    <>
      <PageTitleBar title={product[0].title} />
      <div className={`container ${styles.content}`}>
        <div className={styles.content_left}>
          <div className={styles.image}>
            <Image src={product[0].imageUrl} alt="produkt" layout='fill' className="imageObjectFitCover"/>
          </div>
        </div>
        <div className={styles.content_right}>
          <DescriptionShort description={product[0].description} />
          <PriceProduct price={product[0].price} />
          <CartForm />
          <Identifiers ean={product[0].ean} sku={product[0].sku} brand={product[0].brand} />
        </div>
      </div>
      <Specs productSpecsData={product[0].specs}/>
    </>
  );
};

export default ProductSingle;
