window.onload = async () => {
	fetch("./gallery/files.txt")
	.then(res => res.text())
	.then(text => {
		console.log(text)
	})
}