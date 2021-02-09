import styles from "../styles/icons.module.css";

const IconPack = () => {
    return (
        <div>
            <div className={styles.upperHalf}>
                <img src="https://img.icons8.com/pastel-glyph/64/000000/clock--v3.png"/>
                <div>
                    <p>Preps</p>
                    <h3>10 mins</h3>
                </div>
                <div>
                    <p>Bake</p>
                    <h3>1hr to 1hr 15mins</h3>
                </div>
                <div>
                    <p>Total</p>
                    <h3>1hr 10mins</h3>
                </div>
            </div>
            <div className={styles.lowerHalf}>
            <img src="https://img.icons8.com/ios/50/000000/circled.png"/>
                <div>
                    <p>Yield</p>
                    <h3>1 loaf 12 generous <br />servings</h3>
                </div>
                <div className={styles.buttonHolder}>
                    <button><img src="https://img.icons8.com/android/24/000000/plus.png"/> Save recepie</button>
                    <button><img src="https://img.icons8.com/ios/50/000000/printer-door-open.png"/> Print</button>
                </div>
            </div>
        </div>
    )
}

export default IconPack;