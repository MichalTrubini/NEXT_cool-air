import PageTitleBar from "../../modules/common/pageTitle/pageTitleBar";
import styles from "./shopTemplate.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "../../modules/common/button";

const ShopTemplate: React.FC<{
  products: { title: string; description: string; price: number; id: string; imageUrl: string }[];
}> = (props) => {
  const cartSubmitHandler = () => {};

  return (
    <>
      <PageTitleBar title="obchod" />
      <div className={`${styles.container} container`}>
        <div className={styles.containerLeft}></div>
        <div className={styles.containerRight}>
          <div className={styles.controller}></div>
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
