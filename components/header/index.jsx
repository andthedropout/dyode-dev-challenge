import styles from "./header.module.scss"
import { AnimatePresence, motion, useCycle } from "framer-motion";
import Image from 'next/image'
import logo from '../../images/header/logo.png'
import hamburger from '../../images/header/hamburger.svg'
import Banner from './banner'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'

const sideDrawerVariant = {
    closed: {
        x: -300,
    },
    open: {
        x: 0,
    }
};


export default function Header(headerData) {

    const bannerText = headerData.data[0]
    const headerLinks = headerData.data[1]
    const [open, cycleOpen] = useCycle(false, true);

    return (
        <>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {open && (
                    <motion.aside
                        initial={{ width: 0 }}
                        animate={{
                            width: 300
                        }}
                        exit={{
                            width: 0,
                        }}
                    >
                        <motion.div
                            className={styles.slideOut}
                            transition={"linear"}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={sideDrawerVariant}
                        >
                            <div className={styles.container}>
                                <motion.a whileHover={{ scale: 1.1 }} href="" className={styles.logo}>
                                    <Image
                                        src={logo}
                                        alt="Logo"
                                        width={60}
                                        height={40}
                                    />
                                </motion.a>
                                {headerLinks.map(({ name, to, id }) => (
                                    <motion.a
                                        key={id}
                                        href={to}
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        {name}
                                    </motion.a>
                                ))}
                            </div>
                            <a className={styles.mobileDrawerBtn} onClick={cycleOpen}>
                                <FontAwesomeIcon icon={faX} />
                            </a>
                        </motion.div>
                        <motion.div
                            onClick={cycleOpen}
                            transition={"linear"}
                            exit={{ x: "100vw" }}
                            initial={{ x: "100vw" }}
                            animate={{ x: 0 }}
                            className={styles.blackOut}>
                        </motion.div>
                    </motion.aside>
                )}
            </AnimatePresence>

            {/* Header */}
            <Banner bannerText={bannerText}></Banner>
            <div className={styles.header}>
                <div className={styles.container}>
                    <a className={styles.mobileDrawerBtn} onClick={cycleOpen}>
                        <Image
                            src={hamburger}
                            alt="Logo"
                            width={30}
                            height={30}
                        />
                    </a>
                    <motion.a whileHover={{ scale: 1.1 }} href="" className={styles.logo}>
                        <Image
                            src={logo}
                            alt="Logo"
                            width={60}
                            height={40}
                        />
                    </motion.a>
                </div>
                <div className={styles.headerLinks}>
                    {headerLinks.map(({ name, to, id }) => (
                        <motion.a
                            key={id}
                            href={to}
                            whileHover={{ scale: 1.1 }}
                        >
                            {name}
                        </motion.a>
                    ))}
                </div>
                <div className={styles.checkoutIcons}>
                    <a><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
                    <a><FontAwesomeIcon icon={faUser} /></a>
                    <a><FontAwesomeIcon icon={faCartShopping} /></a>
                </div>
            </div>
        </>
    )
}