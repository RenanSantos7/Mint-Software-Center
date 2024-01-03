import styles from './Home.module.css'
import Section from './components/Section/Section';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AppsContext } from '@/context/AppsContext';

export default function Home() {

    const {apps,_} = useContext(AppsContext)

    /* useEffect(() => {
        console.log(apps)
    }, []) */

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
 
    return (
        <div className='pageContainer'>
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

            <section className={styles.categories}>
                <h2 className={styles.categoriesTitle}>Categorias</h2>

                <div className='cardContainer'>
                    <Link to='category/education' className={styles.categoryLnk}>Educação</Link>
                    <Link to='category/create' className={styles.categoryLnk}>Criação</Link>
                    <Link to='category/productivity' className={styles.categoryLnk}>Produtividade</Link>
                    <Link to='category/development' className={styles.categoryLnk}>Desenvolvimento</Link>
                    <Link to='category/comunication' className={styles.categoryLnk}>Comunicação</Link>
                    <Link to='category/game' className={styles.categoryLnk}>Jogos</Link>
                    <Link to='category/web' className={styles.categoryLnk}>Web</Link>
                    <Link to='category/office' className={styles.categoryLnk}>Escritório</Link>
                    <Link to='category/finances' className={styles.categoryLnk}>Finanças</Link>
                    <Link to='category/comunication' className={styles.categoryLnk}>Comunicação</Link>
                </div>
            </section>
        </div>
    )
}
