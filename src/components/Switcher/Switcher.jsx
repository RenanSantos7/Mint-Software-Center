import styles from './Switcher.module.css'

export default function Switcher({size}) {
	return (
		<label className='styles.switcherContainer' style={{'--size': size}}>
			<input type="checkbox" className={styles.switcherInput} />
			<span className={styles.switcherSlider}>
				<span className={styles.switcherInner}></span>
			</span>
		</label>
	)
}