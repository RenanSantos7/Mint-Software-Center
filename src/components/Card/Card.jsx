import styles from './Card.module.css'
import { useState } from 'react'

export default function Card({app}) {
    return (
        <article className={`quadrado trans-ease ${styles.appCard}`}>
            <img src={app.icon} alt='' aria-hidden="true" />
            <h3>{app.name}</h3>
            <p>{app.shortDescription}</p>
        </article>
    )
}
