import styles from './DefaultPage.module.css'
import PainelLateral from '../../components/PainelLateral/PainelLateral'
import { Outlet } from 'react-router-dom'

export default function DefaultPage() {
    return (
        <div className={styles.corpo}>
            <PainelLateral />
            <main>
                <Outlet />
            </main>
        </div>
    )
}
