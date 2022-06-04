import styles from './products.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ({ to, img, title, subtitle, price }) {
    return (<a href={to} className={styles.productBlock}>
        <motion.div whileHover={{ scale: 0.98 }} className={styles.imageContainer}>
            <Image className={styles.image} src={img} objectfit={"fit"}></Image>
        </motion.div>
        <motion.div whileHover={{ scale: 0.98 }} className={styles.textContainer}>
            <p className={styles.title}>
                {title}
            </p>
            <p className={styles.subtitle}>
                {subtitle}
            </p>
            <p className={styles.price}>
                <span>$</span>
                {price}
            </p>
        </motion.div>
    </a>);
}