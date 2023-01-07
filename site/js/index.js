window.onload = () => {
	document.getElementById("hamburger").onclick = () => {
		if (document.getElementById("mobile-menu") && document.getElementById("mobile-menu").style.height === "0px") {
			document.getElementById("mobile-menu").style.height = "auto"
		}
		if (document.getElementById("mobile-menu") && document.getElementById("mobile-menu").style.height === "auto") {
			document.getElementById("mobile-menu").style.height = 0
		}
	}
}