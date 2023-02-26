import Breadcrumbs from './breadcrumbs';
import PageTitle from './pageTitle';
import styles from './pageTitleBar.module.css';

const PageTitleBar:React.FC<{title:string}> = (props) => {
    return (
        <div className={styles.row}>
            <PageTitle title={props.title}/>
            <Breadcrumbs />
        </div>
    )
}

export default PageTitleBar;