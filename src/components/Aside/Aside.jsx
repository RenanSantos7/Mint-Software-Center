import styles from './Aside.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBriefcase, faCircleInfo, faCode, faGamepad, faGear, faHouse, faStar, faWrench } from '@fortawesome/free-solid-svg-icons'
import { faComment, faCompass } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

export default function PainelLateral({asideShow}) {
    return (
        <aside className={`
            ${styles.painelLateral}
            ${asideShow ? styles.shown : ''}
        `}>
            <nav>
                <menu className={styles.menu}>
                    <li>
                        <Link to='/'>
                            <FontAwesomeIcon icon={faHouse} />
                            <span>Início</span>
                        </Link>
                    </li>

                    <li>
                        <Link to='/explore'>
                            <FontAwesomeIcon icon={faCompass} />
                            <span>Explorar</span>
                        </Link>
                    </li>

                    <li>
                        <Link to='/category/development'>
                            <FontAwesomeIcon icon={faCode} />
                            <span>Desenvolvimento</span>
                        </Link>
                    </li>

                    <li>
                        <Link to='/category/productivity'>
                            <FontAwesomeIcon icon={faBriefcase} />
                            <span>Produtividade</span>
                        </Link>
                    </li>

                    <li>
                        <Link to='/category/game'>
                            <FontAwesomeIcon icon={faGamepad} />
                            <span>Jogos</span>
                        </Link>
                    </li>

                    <li>
                        <Link to='/category/create'>
                            <FontAwesomeIcon icon={faStar} />
                            <span>Criação</span>
                        </Link>
                    </li>

                    <li>
                        <Link to='/category/comunication'>
                            <FontAwesomeIcon icon={faComment} />
                            <span>Social</span>
                        </Link>
                    </li>
                </menu>
            </nav>
        </aside>
    )
}
