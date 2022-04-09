function hidd(a,s) {
	minimize(a,"0")
    document.getElementById(s).style.opacity = "0.85";
}

function activb(a,s) {
	minimize(a,"0.9")
    document.getElementById(s).style.opacity = "0";
}

function minimize(a,io) {
	for (let i = 0; i < a.length; i++) {
		document.getElementById(a[i]).style.opacity = io;
	}
}

function heighf0 (a,s) {
	for (let i = 0; i < a.length; i++) {
		document.getElementById(a[i]).style.height = "0%";
	}
	document.getElementById(s).style.height = "100%";
}