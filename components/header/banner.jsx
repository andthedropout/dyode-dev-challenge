import styles from "./header.module.scss"

export default function ({ bannerText }) {
    return (
        <div className={styles.bannerContainer}>
            <p>
                {bannerText}
            </p>
        </div>)
}