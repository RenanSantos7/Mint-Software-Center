import styles from './CategoryPage.module.css'
import Card from '@/components/Card/Card'
import { AppsContext } from '@/context/AppsContext'
import { useLocation, useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'

export default function CategoryPage() {

    const { apps, setApps } = useContext(AppsContext)
    const location = useLocation()
    const param = useParams()
    let category = param.category

    function translate(name) {
        const en = ['game', 'create', 'development', 'office', 'productivity']
        const ptbr = ['jogos', 'criação', 'desenvolvimento', 'escritório', 'produtividade']

        if (en.includes(name)) {
            const index = en.indexOf(name)
            name = ptbr[index]
        }

        return name
    }
    
    const [thisCategoryApps, setThisCategoryApps] = useState([])
    const [categoryTranslated, setCategoryTranslated ] = useState('')

    useEffect(() => {
        setThisCategoryApps(
            apps.filter(
                appsFiltered => appsFiltered.categories.includes(param.category)
            )
        )
        
        setCategoryTranslated(translate(category))
    }, [location.pathname])

    return (
        <div className='pageContainer'>
            <h1 className={styles.title}>{categoryTranslated}</h1>
            <div className='cardContainer'>
                {thisCategoryApps.map(
                    app => <Card key={app.id} app={app} />
                )}
            </div>
        </div>
    )
}
