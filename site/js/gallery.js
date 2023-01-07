const files = []
let opened = false

const openPopup = (item) => {
	document.getElementById("popup-image").style.background = `url('${item}') center/contain no-repeat, #000`
	document.getElementById("popup").showModal()
	opened = true
}

const closePopup = () => {
	document.getElementById("popup").close()
	opened = false
}

window.onload = async () => {
	fetch("./gallery/files.txt")
	.then(res => res.text())
	.then(text => {
		files.push(...text.split("\n").filter(item => item !== "").map(item => item.slice(1)))
		files.forEach(item => {
			const imageContainer = document.createElement("div")
			imageContainer.className = "image-container"
			imageContainer.onclick = () => openPopup(item)
			imageContainer.style.background = `url('${item}') center/contain no-repeat`
			if (document.getElementById("gallery-container")) {
				document.getElementById("gallery-container").appendChild(imageContainer)
			}
		})
	})

	document.onclick = (e) => {
		const popup = document.getElementById("popup").getBoundingClientRect()
		if (opened) {
			if ((e.clientX < popup.x || e.clientX > (popup.x + popup.width)) || (e.clientY < popup.y || e.clientY > (popup.y + popup.height))) {
				closePopup()
			}
		}
	}
}