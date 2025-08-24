import styles from "../Hamburger/hamburger.module.css"

const Hamburger = () =>{
    return(
        <>
            <div className={styles.hamburger}>
                <div className={`${styles.burger} ${styles.burger1}`}></div>
                <div className={`${styles.burger} ${styles.burger2}`}></div>
                <div className={`${styles.burger} ${styles.burger3}`}></div>
            </div>
        </>
    );
}

export default Hamburger