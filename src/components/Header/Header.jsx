import styles from './Header.module.css'
import InputTexto from '../InputTexto/InputTexto'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
        <header className={styles.barraSuperior}>
            <div className={styles.barraSuperior__wrapper}>
                <div className={styles.barraSuperior__meio}>
                    <InputTexto />
                </div>
                <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
        </header>
    )
}
