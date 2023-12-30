import styles from './Home.module.css'
import Section from './components/Section/Section';
import { useEffect, useState } from 'react';

export default function Home({ apps }) {
    const [appsSorted, setAppsSorted] = useState(apps.sort(
        (a, b) => {
            return a.downloadNumber > b.downloadNumber ? -1 : a.downloadNumber < b.downloadNumber ? 1 : 0;
        })
    )

    const [appsMostDownloaded, setAppsMostDownloaded] = useState(appsSorted
        .splice(0,8)
    )

    const [appsEditorsChoice, setEditorsChoice] = useState(
        apps.filter(app => app.categories.includes('editor'))
    )

    useEffect(() => {
        console.log(appsEditorsChoice)
    }, [])

    return (
        <div className={styles.homeContainer}>
            <Section
                key='maisBaixados'
                titulo='Mais baixados'
                apps={appsMostDownloaded}
                cor1={'#800080'}
                cor2={'#008000'}
            />

            <Section
                key='editor'
                titulo='Escolhas do editor'
                apps={appsEditorsChoice}
                cor1={'#352163'}
                cor2={'#256987'}
            />
        </div>
    )
}
