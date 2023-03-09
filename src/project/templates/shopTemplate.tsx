import PageTitleBar from "../../modules/common/pageTitle/pageTitleBar";
import styles from "./shopTemplate.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "../../modules/common/button";
import FilterBlock from "../../modules/catalog/filterBlock";
import gridView from '../../../public/grid-view.svg'
import listView from '../../../public/view-list.svg'

const ShopTemplate: React.FC<{
  products: { title: string; description: string; price: number; id: string; imageUrl: string }[]; productsCount: number
}> = (props) => {
  const cartSubmitHandler = () => {};

  return (
    <>
      <PageTitleBar title="obchod" />
      <div className={`${styles.container} container`}>
        <div className={styles.containerLeft}>
          <FilterBlock />
        </div>
        <div className={styles.containerRight}>
          <div className={styles.controller}>
            <div className={styles.controllerWrapper}>
              <div className={styles.iconsContainer}>
                <Image src={gridView} alt='grid view' width='22px' height='22px'/>
                <Image src={listView} alt='grid view' width='22px' height='22px'/>
              </div>
              <p>{`Zobrazených 1-12 z ${props.productsCount} výsledkov`}</p>
            </div>
          </div>
          <div className={styles.shopContent}>
            {props.products.map((item) => (
              <div className={styles.item} key={item.id}>
                <Link href={`/product/${item.id}`}>
                  <div className={styles.imageContainer}>
                    <Image src={item.imageUrl} alt={item.title} className={styles.image} layout="fill" />
                  </div>
                </Link>
                <div className={styles.wrapper}>
                  <Link href={`/product/${item.id}`}>
                    <div>
                      <h3 className={styles.title}>{item.title}</h3>
                      <p className={styles.price}>
                        {`€${item.price}`}
                        <span className={styles.vat}>s DPH</span>
                      </p>
                    </div>
                  </Link>
                  <Button className={styles.button} onClick={cartSubmitHandler}>
                    pridať do košíka
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopTemplate;
