import styles from './InputTexto.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


export default function InputTexto({ }) {
    return (
        <form className={styles.container}>
            <input type='text' placeholder='Pesquise aqui' className={styles.input} />
            <button type='submit' className={styles.button}>
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </form>
    )
}
