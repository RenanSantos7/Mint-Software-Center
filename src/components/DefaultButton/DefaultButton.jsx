import styles from './DefaultButton.module.css'

export default function DefaultButton({children, style}) {
    return (
        <button
            className={styles.defaultButton}
            style={style}
        >
            {children}
        </button>
    )
}
