/* eslint-disable no-unused-vars */

class App {
	id = ''
	constructor(name, developer, icon, screenshots, shortDescription, description, changelog, downloadSize, installedSize, arch, downloadNumber, tags, categories) {
		this.name = name
		this.developer = developer
		this.icon = icon
		this.screenshots = [...screenshots]
		this.shortDescription = shortDescription
		this.description = description
		this.changelog = changelog
		this.downloadSize = downloadSize
		this.installedSize = installedSize
		this.arch = arch
		this.downloadNumber = downloadNumber
		this.tags = [...tags]
		this.categories = [...categories]
	}
}

(function pegaInfosApp() {
	const elname = document.querySelector('h1')
	const name = elname ? elname.textContent : ''

	const eldeveloper = document.querySelector('.col-start-2 .font-light')
	const developer = eldeveloper ? eldeveloper.textContent.substring(3) : ''

	const elicon = document.querySelector('.relative.m-2 img')
	const icon = elicon ? elicon.src : ''

	const elscreenshots = document.querySelector('.yarl__slide_image')
	const screenshots = elscreenshots
		? elscreenshots.srcset
				.split(', ')
				.map(img => img.replace(/ \d{3,4}w/, ''))
				.map(img => `${img}`)
		: ''

	const eldescription = document.querySelector('.col-start-2.flex.flex-col.gap-6 > div')
	const description = eldescription
		? eldescription.innerHTML
				.toString()
				.replaceAll(/ class="[^"]*"/g, '')
				.replaceAll(/"/g, '&quot;')
		: ''
	const shortDescription = eldescription ? eldescription.querySelector('h2').textContent : ''

	const elchangelog = document.querySelector('.rounded-xl ul')
	const changelog = elchangelog
		? elchangelog.innerHTML
				.toString()
				.replaceAll(/ class=".*"/g, '')
				.replaceAll('"', '&quot;')
		: ''

	const elinfo = document.querySelectorAll('.block.text-ellipsis')
	const installedSize = elinfo ? elinfo[0].textContent : ''
	const downloadSize = elinfo ? elinfo[1].textContent : ''
	const arch = elinfo ? elinfo[2].textContent : ''
	const downloadNumber = elinfo ? Number(elinfo[3].textContent.replaceAll('.', '')) : 0

	const eltags = document.querySelectorAll('.flex.gap-2.text-sm a')
	const tags = eltags
		? Array.from(eltags)
				.map(el => el.textContent)
				.map(el => `${el}`)
		: ''

	const result = new App(name, developer, icon, screenshots, shortDescription, description, changelog, downloadSize, installedSize, arch, downloadNumber, tags, [])
	
	return result
})()
