import styles from './opt-in.module.scss'

export default function ({ buttonText }) {

    var onSubmit = () => {
        alert("Go Check Your Email!")
    }

    return (
        <form onSubmit={onSubmit} className={styles.optInForm}>
            <input className={styles.textField} type="email" required placeholder="Enter Your Email Address" />
            <input className={styles.submit} value={buttonText} type="submit" />
        </form>
    );
}