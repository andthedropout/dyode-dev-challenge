import React, { useState, useRef, useEffect } from 'react'
import styles from "./footer.module.scss"
import useWindowSize from '../../utils/windowSize'
import { motion } from "framer-motion";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'


export default function Footer(footerData) {
    const footerLinksHeading = footerData.data[0]
    const footerLinks = footerData.data[1]
    const companyLinksHeading = footerData.data[2]
    const companyLinks = footerData.data[3]

    const [linksHide, setLinksHide] = useState(true);
    const [companyHide, setCompanyLinks] = useState(false);

    const size = useWindowSize().width
    var smScreenUp = false
    if (size > 576) {
        smScreenUp = true;
    }

    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerLeft}>
                <div>
                    <h1 className={styles.linksHeader} onClick={() => setLinksHide(prevCheck => !prevCheck)}>
                        {footerLinksHeading}
                        {linksHide ? <span>-</span> : <span>+</span>}
                    </h1>
                    <div className={styles.footerLinksContainer}>
                        {linksHide && !smScreenUp && <>{footerLinks.map(({ name, to, id }) => (
                            <motion.a
                                exit={{ height: 0 }}
                                initial={{ height: 0 }}
                                animate={{ height: 40 }}
                                transition={{ duration: .3 }}
                                key={id}
                                href={to}
                            >
                                {name}
                            </motion.a>
                        ))}
                        </>}
                        {smScreenUp && <>{footerLinks.map(({ name, to, id }) => (
                            <a
                                key={id}
                                href={to}
                            >
                                {name}
                            </a>
                        ))}
                        </>}
                    </div>
                </div>
                <div>
                    <h1 className={styles.linksHeader} onClick={() => setCompanyLinks(prevCheck => !prevCheck)}>
                        {companyLinksHeading}
                        {companyHide ? <span>-</span> : <span>+</span>}
                    </h1>
                    <div className={styles.footerLinksContainer}>
                        {companyHide && !smScreenUp && <>{companyLinks.map(({ name, to, id }) => (
                            <motion.a
                                exit={{ height: 0 }}
                                initial={{ height: 0 }}
                                animate={{ height: 40 }}
                                transition={{ duration: .3 }}
                                key={id}
                                href={to}
                            >
                                {name}
                            </motion.a>
                        ))}</>}
                        {smScreenUp && <>{companyLinks.map(({ name, to, id }) => (
                            <a
                                key={id}
                                href={to}
                            >
                                {name}
                            </a>
                        ))}
                        </>}
                    </div>
                </div>
            </div>
            <div className={styles.footerRight}>
                <h1>
                    Follow Us
                </h1>
                <div className={styles.footerSocialIcons}>
                    <a href=""><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                </div>
            </div>
        </div>
    )
}