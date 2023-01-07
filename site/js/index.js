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

	document.onclick = (e) => {
		if (e.target.id !== "hamburger" && e.target.id !== "bars") {
			if (document.getElementById("mobile-menu") && document.getElementById("mobile-menu").style.maxHeight === "197.5px") {
				document.getElementById("mobile-menu").style.maxHeight = 0
			}
		}
	}
}