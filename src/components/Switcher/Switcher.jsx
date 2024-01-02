import styles from './Switcher.module.css'

export default function Switcher({size}) {
	return (
		<label className={styles.switcher__container} style={{'--size': size}}>
			<input type="checkbox" className={styles.switcher__input} />
			<span className={styles.switcher__slider}></span>
		</label>
	)
}
