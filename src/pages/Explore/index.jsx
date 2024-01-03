import styles from './Explore.module.css'
import Card from '@/components/Card/Card'
import { useContext, useState } from 'react';
import { AppsContext } from '@/context/AppsContext';

export default function Explore() {

    const {apps,_} = useContext(AppsContext)

    const [appsSorted, setAppsSorted] = useState(apps.sort(
        (a, b) => {
            return a.downloadNumber > b.downloadNumber ? -1 : a.downloadNumber < b.downloadNumber ? 1 : 0;
        }
    ))

    return (
        <>
            <div className='cardContainer'>
                {appsSorted.map(app => (
                    <Card key={app.id} app={app} />
                ))}
            </div>
        </>
    )
}
