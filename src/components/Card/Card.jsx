import styles from './Card.module.css'
import { Link } from 'react-router-dom'

export default function Card({ app }) {
    function limitString(string, size) {
        const limitedString = string.substring(0, size)
        const ellipsis = string.length >= size ? '...' : '' 
        return limitedString + ellipsis
    }

    return (
     <Link to={`/app/${app.id}`}>
            <article className={`quadrado trans-ease ${styles.appCard}`}>
                <img src={app.icon} alt='' aria-hidden="true" />
                <h3>{app.name}</h3>
                <p>{limitString(app.shortDescription, 50)}</p>
            </article>
     </Link>
    )
}
