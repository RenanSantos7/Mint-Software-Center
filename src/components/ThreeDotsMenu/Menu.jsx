import styles from './ThreeDotsMenu.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Switcher from '@/components/Switcher/Switcher'
import { faArrowsSpin, faCircleInfo, faGear, faShapes, faWrench } from '@fortawesome/free-solid-svg-icons'

export default function ThreeDotsMenu({shown}) {
    return (
        <menu className={`${styles.menu} ${shown ? styles.shown : ''}`}>
            <li className={styles.menu__item}>
                <FontAwesomeIcon icon={faShapes} />
                <span>Gerenciar aplicativos instalados</span>
            </li>

            <hr />

            <li className={styles.menu__item}>
                <Switcher size='1rem' />
                <span>Pesquisar no resumo dos pacotes (pesquisa lenta)</span>
            </li>

            <li className={styles.menu__item}>
                <Switcher size='1rem' />
                <span>Pesquisar na descrição dos pacotes (pesquisa mais lenta ainda)</span>
            </li>

            <hr />

            <li>
                <a className={styles.menu__item}>
                    <FontAwesomeIcon icon={faArrowsSpin} />
                    <span>Atualizar lista de pacotes</span>
                </a>
            </li>
            <li>
                <a className={styles.menu__item}>
                    <FontAwesomeIcon icon={faCircleInfo} />
                    <span>Sobre</span>
                </a>
            </li>

            <li>
                <a className={styles.menu__item}>
                    <FontAwesomeIcon icon={faGear} />
                    <span>Configurações</span>
                </a>
            </li>

            <li>
                <a className={styles.menu__item}>
                    <FontAwesomeIcon icon={faWrench} />
                    <span>Gerenciamento de apps</span>
                </a>
            </li>
        </menu>
    )
}
