import styles from './CategoryPage.module.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'

export default function CategoryPage({apps}) {
    const param = useParams()

    let category = param.category

    if (category === 'game') {
        category = 'games'
    }

    if (category === 'create') {
        category = 'creation'
    }

    const [thisCategoryApps, setThisCategoryApps] = useState([])

    useEffect(() => {
        setThisCategoryApps(
            apps.filter(
                appsFiltered => appsFiltered.categories.includes(param.category)
            )
        )
    }, [])

    return (
        <div className='pageContainer'>
            <h1 className={styles.title}>{category}</h1>
            <div className='cardContainer'>
                {thisCategoryApps.map(
                    app => <Card key={app.id} app={app} />
                )}
            </div>
        </div>
    )
}
