import styles from './Header.module.css'
import InputTexto from '../InputTexto/InputTexto'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import ThreeDotsMenu from '../ThreeDotsMenu/Menu'

export default function Header() {

    const [showMenu, setShowMenu] = useState(false)

    function menuShowed() {
        setShowMenu(!showMenu)
    }

    return (
        <header className={styles.barraSuperior}>
            <div className={styles.barraSuperior__wrapper}>
                <div className={styles.barraSuperior__meio}>
                    <InputTexto />
                </div>
                <div className={styles.menuThreeDots}>
                    <button onClick={menuShowed} className={styles.btnToggleMenu}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                    <ThreeDotsMenu shown={showMenu} />
                </div>
            </div>
        </header>
    )
}
