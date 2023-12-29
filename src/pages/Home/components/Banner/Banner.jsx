import styles from './Banner.module.css'
import DefaultButton from '../../../../components/DefaultButton/DefaultButton'

export default function Banner({titulo, cor1, cor2}) {
    return (
        <div className={styles.banner} style={{background: `'linearGradient(145deg, ${cor1}, ${cor2})'`}}>
            <h2>{titulo}</h2>
            <DefaultButton>Mais</DefaultButton>
        </div>
    )
}
