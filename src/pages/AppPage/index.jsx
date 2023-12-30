import styles from './AppPage.module.css'
import './embla.css'
import DefaultButton from '../../components/DefaultButton/DefaultButton'
import Erro404 from '../Erro404'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronLeft,
    faChevronRight,
    faCloudArrowDown,
    faDownload,
    faHardDrive,
    faLaptopCode
} from '@fortawesome/free-solid-svg-icons'
import useEmblaCarousel from 'embla-carousel-react'
import { useParams } from 'react-router-dom'
import { useCallback, useState } from 'react'
import Card from '../../components/Card/Card'

export default function AppPage({ apps }) {
    const parametros = useParams()

    const app = apps.find(app => {
        return app.id === Number(parametros.id)
    })

    if (!app) {
        return <Erro404 />
    }

    const description = { __html: app.description }
    const changelog = { __html: app.changelog }
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: false,
            skipSnaps: true
        }
    )

    const scrollPrev = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollPrev()
        }
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollNext()
        }
    }, [emblaApi])

    function filterSimilar(array) {
        for (let element of array) {
            if (app.categories.includes(element)) {
                return true;
            }
        }
        
        return false;
    }

    const [appsSimilar,setAppsSimilar] = useState(
        apps.filter(similar => filterSimilar(similar.categories)).slice(0,4)
    )

    return (
        <div className={styles.appContainer}>
            <header className={styles.app__header}>
                <div className={styles.app__header__icoInfo}>
                    <img className={styles.app__icon} src={app.icon} alt={`${app.name} icon`} />
                    <div className={styles.app__header__info}>
                        <h1 className={styles.app__name}>{app.name}</h1>
                        <p className={styles.app__developer}>{app.developer}</p>
                        <p className={styles.app__link}>
                            {app.link
                                ? <a href={app.link} target='blank'>Página do projeto</a>
                                : ''}
                        </p>
                    </div>
                </div>
                <DefaultButton>Instalar</DefaultButton>
            </header>

            <section className="embla" ref={emblaRef}>
                <div className='embla__viewport'>
                    <div className="embla__container">
                        {app.screenshots.map((screenshot, index) => {
                            return (
                                <img key={index} className='embla__slide' src={screenshot} alt={`${app.name} screenshot`} />
                            )
                        })}
                    </div>
                </div>
                <div className='embla__prev__wrapper'>
                    <button className="embla__prev" onClick={scrollPrev}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                </div>
                <div className='embla__next__wrapper'>
                    <button className="embla__next" onClick={scrollNext}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </section>

            <section className={styles.app__description} dangerouslySetInnerHTML={description}>
            </section>

            <section className={`${styles.app__changelog} ${styles.card}`}>
                <h3>Notas de versão</h3>
                <div dangerouslySetInnerHTML={changelog}></div>
            </section>

            <section className={`${styles.app__otherInfo} ${styles.card}`}>
                <h3>Outras informações</h3>
                <div className={styles.app__otherInfo__wrapper}>
                    <div className={styles.app__otherInfo__item}>
                        <FontAwesomeIcon className={styles.app__otherInfo__item__icon} icon={faHardDrive} />
                        <h4 className={styles.app__otherInfo__item__title}>Tamanho instalado</h4>
                        <p className={styles.app__otherInfo__item__text}>{app.installedSize}</p>
                    </div>

                    <div className={styles.app__otherInfo__item}>
                        <FontAwesomeIcon className={styles.app__otherInfo__item__icon} icon={faDownload} />
                        <h4 className={styles.app__otherInfo__item__title}>Tamanho do download</h4>
                        <p className={styles.app__otherInfo__item__text}>{app.downloadSize}</p>
                    </div>

                    <div className={styles.app__otherInfo__item}>
                        <FontAwesomeIcon className={styles.app__otherInfo__item__icon} icon={faLaptopCode} />
                        <h4 className={styles.app__otherInfo__item__title}>Arquiteturas disponíveis</h4>
                        <p className={styles.app__otherInfo__item__text}>{app.arch}</p>
                    </div>

                    <div className={styles.app__otherInfo__item}>
                        <FontAwesomeIcon className={styles.app__otherInfo__item__icon} icon={faCloudArrowDown} />
                        <h4 className={styles.app__otherInfo__item__title}>Número de instalaçãoes</h4>
                        <p className={styles.app__otherInfo__item__text}>{app.downloadNumber}</p>
                    </div>
                </div>
            </section>

            <section className={styles.otherApps}>
                <h3>Apps semelhantes</h3>
                <div className='cardContainer'>
                    {appsSimilar.map(
                        app => {
                            return <Card app={app} />
                        }
                    )}
                </div>
            </section>
        </div>
    )
}
