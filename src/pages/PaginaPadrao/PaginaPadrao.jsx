import styles from './PaginaPadrao.module.css'
import PainelLateral from '../../components/PainelLateral/PainelLateral'

export default function PaginaPadrao() {
    return (
        <div className={styles.corpo}>
            <PainelLateral />
        </div>
    )
}
