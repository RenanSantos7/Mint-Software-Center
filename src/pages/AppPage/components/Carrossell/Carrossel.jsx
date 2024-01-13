import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronLeft,
    faChevronRight
} from '@fortawesome/free-solid-svg-icons'
import styles from './Carrossel.module.css'

export default function Carrossel({app}) {

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: false,
            active: true
        }
    )

    const scrollPrev = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollPrev({jump:true})
        }
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollNext({jump:true})
        }
    }, [emblaApi])

    return (
        <section className={styles.embla} ref={emblaRef}>
            <div className={styles.embla__viewport}>
                <div className={styles.embla__container}>
                    {app.screenshots.map((screenshot, index) => {
                        return (
                            <img key={index} className={styles.embla__slide} src={screenshot} alt={`${app.name} screenshot`} />
                        )
                    })}
                </div>
            </div>
            <div className={styles.embla__prev__wrapper}>
                <button className={styles.embla__prev} onClick={scrollPrev}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
            </div>
            <div className={styles.embla__next__wrapper}>
                <button className={styles.embla__next} onClick={scrollNext}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </section>
    )
}
