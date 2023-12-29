import styles from './Explore.module.css'
import Card from '../../components/Card/Card'
import { useState } from 'react';

export default function Explore({ apps }) {
    const [appsSorted, setAppsSorted] = useState(apps.sort(
        (a, b) => {
            return a.downloadNumber > b.downloadNumber ? -1 : a.downloadNumber < b.downloadNumber ? 1 : 0;
        }
    ))

    return (
        <>
            <div className={styles.cardContainer}>
                {appsSorted.map(app => (
                    <Card key={app.id} app={app} />
                ))}
            </div>
        </>
    )
}
