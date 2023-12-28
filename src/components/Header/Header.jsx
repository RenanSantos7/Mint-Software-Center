import styles from './Header.module.css'
import InputTexto from '../InputTexto/InputTexto'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faWindowMinimize, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faSquare } from '@fortawesome/free-regular-svg-icons'

export default function Header() {
    return (
        <header className={styles.barraSuperior}>
            <div className={styles.barraSuperior__esquerda}>
                <button>
                    <FontAwesomeIcon icon={faBars} className={`svg ${styles.botoes}`} />
                </button>
            </div>

            <div className={styles.barraSuperior__meio}>
                <InputTexto />
            </div>

            <div className={styles.barraSuperior__direita}>
                <FontAwesomeIcon icon={faWindowMinimize} className={`${styles.botoes} ${styles.janela}`} />
                <FontAwesomeIcon icon={faSquare} className={`${styles.botoes} ${styles.janela}`} />
                <FontAwesomeIcon icon={faXmark} className={`${styles.botoes} ${styles.janela} ${styles.fechar}`} />
            </div>
        </header>
    )
}
