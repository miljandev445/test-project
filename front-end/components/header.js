import styles from "../styles/Header.module.css"
import Link from "next/link";

const Header = () => {
    return (
        <header className={styles.header}>
            <img className = {styles.img} src="https://img.icons8.com/color/48/000000/gorilla.png"/>
            <nav>
                <ul className={styles.nav}>
                    <li>Shop</li>
                    <li>Recepies</li>
                    <li>Learn</li>
                    <li>About</li>
                    <li><Link href="/posts">Posts</Link></li>
                </ul>
            </nav>
            <div className={styles.subNav}>
                <ul className={styles.nav}>
                    <li>Categories</li>
                    <li>Collections</li>
                    <li>Resources</li>
                </ul>
            </div>
        </header>
    )
}

export default Header;