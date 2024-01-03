import styles from './Switcher.module.css'

export default function Switcher({ size }) {
	
	function switcherON() {
		const switcher = document.querySelector('input[type="checkbox"]')
		if (switcher.checked) {
			console.log('on')
		} else {
			console.log('off')
		}
	}

	return (
		<label className={styles.switcher__container} style={{'--size': size}}>
			<input type="checkbox" className={styles.switcher__input} onClick={switcherON} />
			<span className={styles.switcher__slider}></span>
		</label>
	)
}
