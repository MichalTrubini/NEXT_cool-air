import styles from './bottombar.module.css';

const BottomBar = () => {
  return (
    <div className={styles.bottombar}>
        <div className="container">
            <p className={styles.copyright}>Copyright © 2022 cool-air.sk</p>
        </div>
    </div>
  )
}

export default BottomBar;
