import styles from "./collections.module.scss"
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ({ name, img, to }) {
    return (
        <motion.a whileHover={{ scale: 0.98 }} href={to} className={styles.collectionBlock}>
            <div className={styles.imageContainer}>
                <Image className={styles.image} src={img} layout={"responsive"} objectfit={"cover"}></Image>
            </div>
            <div className={styles.textContainer}>
                <h2>
                    {name}
                </h2>
            </div>
        </motion.a>);
}