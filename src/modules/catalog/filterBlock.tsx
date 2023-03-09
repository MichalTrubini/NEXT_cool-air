import styles from "./filterBlock.module.css";

const FilterBlock = () => {

const dummyCategories = [
    {
        id: 1,
        cat: 'Čističky vzduchu'
    },
    {
        id: 2,
        cat: 'Nástenné ventilátory'
    },
    {
        id: 3,
        cat: 'Príslušenstvo'
    },
    {
        id: 4,
        cat: 'Podlahové ventilátory'
    },
    {
        id: 5,
        cat: 'Stojanové ventilátory'
    },
    {
        id: 6,
        cat: 'Stolové ventilátory'
    },
    {
        id: 7,
        cat: 'Stropné ventilátory'
    },
]

  return (
    <div>
      <div className={styles.categories}>
        <div className={styles.headerContainer}>
          <h3 className={styles.title}>Kategórie</h3>
        </div>
        <ul className={styles.list}>
            {dummyCategories.map(item => <li key={item.id} className={styles.listItem}>{item.cat}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default FilterBlock;
