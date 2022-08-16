import Breadcrumbs from './breadcrumbs';
import PageTitle from './pageTitle';
import styles from './pageTitleBar.module.css';

const PageTitleBar = () => {
    return (
        <div className={styles.row}>
            <PageTitle />
            <Breadcrumbs />
        </div>
    )
}

export default PageTitleBar;