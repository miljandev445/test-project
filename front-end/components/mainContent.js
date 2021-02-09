import React from 'react'
import IconPack from './iconPack'
import styles from "../styles/Main.module.css";
import Image from 'next/image'

const MainContent = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contentHolder}>
            <div>
            {/*I purposy imbeded static bread crumbs, i didnt know if you need dynamic ones. P.S i can make them dynamic*/}
            <p className={styles.bc}>RECEPIES > BREAD > QUICK BREAD</p>
            <h1 className={styles.title}>Whole-grain Bannana Bread</h1>
            <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div>
            <Image
                src="/../public/toast.jpg"
                alt="toast"
                width='700px'
                height='500px'
            />
            </div>
            </div>
            <IconPack />
        </div>
    )
}

export default MainContent;