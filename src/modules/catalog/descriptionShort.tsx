import styles from './descriptionShort.module.css';

const DescriptionShort = () => {
    return (
        <div>
            <h3 className={styles.header}>Popis produktu</h3>
            <div className={styles.description}>
                <p className={styles.text}>Predstavujeme Bayside Calypso, ventilátor v cenovo priateľskej hladine s čistými líniami a jednoduchosťou. Ventilátor sa dodáva v čiernej a bielej farbe.</p>
                <p className={styles.text}>Je vhodný pre vnútorné aj vonkajšie použitie, avšak ventilátor musí byť krytý minimálne jednou stenou a nemôže byť vystavený vode a prachu. Ventilátor môže byť ovládateľný aj diaľkovo (ovládanie je možné zakúpiť samostatne).</p>
                <p className={styles.text}>Vzdialenosť stropu od lopatiek je 30 cm. Zimná a letná prevádzka je riadená pomocou posuvného spínača na tele ventilátora.</p>
                <p className={styles.text}>Balenie obsahuje nástenný vypínač: 3 rýchlosti + vypínač. Vhodné pre montáž na stropoch so sklonom do 18 stupňov.</p>
                <p className={styles.text}>Pre čierny model Bayside Calypso nie je k dispozícii osvetlenie.</p>
            </div>
        </div>
    )
}

export default DescriptionShort;