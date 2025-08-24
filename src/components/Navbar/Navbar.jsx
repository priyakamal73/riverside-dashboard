import styles from "../Navbar/navbar.module.css"
import Hamburger from "../Hamburger/Hamburger"
import { useState } from "react"


const Navbar = () => {
    const[hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = ()=>{
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
        <>
            <div className={styles.navigation}>

                <div className={styles.hamburger} onClick={toggleHamburger}>
                    <Hamburger />
                </div>

                <ul className={styles.menu} style={{display: `${hamburgerOpen ? 'inline' : 'none'}`}}>
                    <li>Dashboard</li>
                    <li>Forms</li>
                    <li>Tables</li>
                    <li>Analytics</li>
                    <li>Cloud</li>
                    <li>Shop</li>
                    <li>Calendar</li>
                </ul>
            </div>
        </>
    );
}

export default Navbar