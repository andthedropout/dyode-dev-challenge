import styles from './opt-in.module.scss'
import OptInForm from './optInForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function OptIn(optInMockData) {

    const headerText = optInMockData.data[0]
    const subHeaderText = optInMockData.data[1]
    const buttonText = optInMockData.data[2]

    return (
        <div className={styles.optInContainer}>
            <span>
                <FontAwesomeIcon icon={faEnvelope} />
                <h1>
                    {headerText}
                </h1>
            </span>
            <div>
                <p>
                    {subHeaderText}
                </p>
                <OptInForm buttonText={buttonText}></OptInForm>
            </div>
        </div>
    )
}