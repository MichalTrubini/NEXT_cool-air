import styles from "./pageTitle.module.css";

const PageTitle: React.FC<{ title: string }> = (props) => {
  return <h2 className={styles.title}>{props.title}</h2>;
};

export default PageTitle;
