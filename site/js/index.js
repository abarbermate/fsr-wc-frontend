window.onload = () => {
	if (document.getElementById("hamburger")) {
		document.getElementById("hamburger").onclick = () => {
			if (document.getElementById("mobile-menu") && document.getElementById("mobile-menu").style.maxHeight === "0px") {
				document.getElementById("mobile-menu").style.maxHeight = "197.5px"
			}
			else if (document.getElementById("mobile-menu") && document.getElementById("mobile-menu").style.maxHeight === "197.5px") {
				document.getElementById("mobile-menu").style.maxHeight = 0
			}
		}
	}
}