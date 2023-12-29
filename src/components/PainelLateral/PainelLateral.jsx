import styles from './PainelLateral.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faCircleInfo, faCode, faGamepad, faGear, faStar, faWrench } from '@fortawesome/free-solid-svg-icons'
import { faComment, faCompass } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

export default function PainelLateral() {
    return (
        <aside className={styles.painelLateral}>
            <nav>
                <menu className={styles.menu}>
                    <li>
                        <Link to='/explore'>
                            <FontAwesomeIcon icon={faCompass} />
                            <span>Explorar</span>
                        </Link>
                    </li>
                    
                    <li>
                        <Link to='/'>
                            <FontAwesomeIcon icon={faStar} />
                            <span>Em Destaque</span>
                        </Link>
                    </li>
                    
                    <li>
                        <a>
                            <FontAwesomeIcon icon={faCode} />
                            <span>Desenvolvimento</span>
                        </a>
                    </li>
                    
                    <li>
                        <a>
                            <FontAwesomeIcon icon={faBriefcase} />
                            <span>Produtividade</span>
                        </a>
                    </li>
                    
                    <li>
                        <a>
                            <FontAwesomeIcon icon={faGamepad} />
                            <span>Jogos</span>
                        </a>
                    </li>
                    
                    <li>
                        <a>
                            <FontAwesomeIcon icon={faStar} />
                            <span>Criação</span>
                        </a>
                    </li>
                    
                    <li>
                        <a>
                            <FontAwesomeIcon icon={faComment} />
                            <span>Social</span>
                        </a>
                    </li>
                </menu>
            </nav>

            <nav className={styles.inferior}>
                <menu className={styles.menu}>
                    <li>
                        <a>
                            <FontAwesomeIcon icon={faCircleInfo} />
                            <span>Sobre</span>
                        </a>
                    </li>
                    
                    <li>
                        <a>
                            <FontAwesomeIcon icon={faGear}/>
                            <span>Configurações</span>
                        </a>
                    </li>
                    
                    <li>
                        <a>
                            <FontAwesomeIcon icon={faWrench} />
                            <span>Gerenciamento de apps</span>
                        </a>
                    </li>
                </menu>
            </nav>
        </aside>
    )
}
