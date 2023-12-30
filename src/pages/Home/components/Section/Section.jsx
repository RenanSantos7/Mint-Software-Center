import styles from './Section.module.css'
import Banner from '../Banner/Banner'
import Card from '../../../../components/Card/Card'

export default function Section({titulo, apps, cor1, cor2}) {
    
    return (
        <section className={styles.section}>
            <Banner
                titulo={titulo}
                cor1='#800080'
                cor2={cor1}
                apps={cor2}
            />

            <div className='cardContainer'>
                {apps.map(app => {
                    return <Card key={app.id} app={app} />
                })}
            </div>
        </section>
    )
}
