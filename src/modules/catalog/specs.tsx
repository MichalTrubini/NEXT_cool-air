import styles from "./specs.module.css";

const Specs: React.FC<{ productSpecsData: { attributeName: string; attributeValue: string }[] }> = (props) => {
  const specsData = props.productSpecsData;
  return (
    <div className="container">
      <div className={styles.tabsContainer}>
        <p className={styles.accent}>Ďalšie informácie</p>
      </div>
      <div className={styles.tableContainer}>
        <div className={styles.table}>
          {specsData.map((item, idx) => (
            <div className={styles.tableRow} key={idx}>
              <p className={styles.tableHeader}>{item.attributeName}</p>
              <p className={styles.tableValue}>{item.attributeValue}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specs;
