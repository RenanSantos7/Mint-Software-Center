import styles from './Erro404.module.css'
import emoji from '../../assets/emoji-triste.svg'

export default function Erro404() {
    return (
        <div className={styles.erro404}>
            <img src={emoji} alt='sad face' className={styles.erro404__emoji} />
            <h2 className={styles.erro404__title}>Algo deu errado...</h2>
            <p className={styles.erro404__text}>Não foi possível encontrar essa página</p>
        </div>
    )
}
