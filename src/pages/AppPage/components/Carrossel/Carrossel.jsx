import { useId } from 'react';
import styles from './Carrossel.module.css'
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'

register()

/**
 * @description Tutorial em https://www.youtube.com/watch?v=cux7yaycIzs
*/
export default function Carrossel({ app }) {

    return (
        <>
            <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                className={styles.swiper}
                loop={true}
            >
                {app.screenshots.map(item => (
                    <SwiperSlide
                        key={useId()}
                        className={styles.slide}
                    >
                        <img
                            src={item}
                            alt=''
                            className={styles.slide__item}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

//  `npm i swiper` para instalar
