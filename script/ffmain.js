function hidd() {
	document.getElementById("ai").style.visibility = "hidden";
	document.getElementById("wi").style.visibility = "hidden";
	document.getElementById("mi").style.visibility = "hidden";
    document.getElementById("ci").style.visibility = "hidden";
	document.getElementById("hi").style.visibility = "hidden";
	document.getElementById("si").style.visibility = "hidden";
}

function activb(s) {
	document.getElementById("ab").style.opacity = "1";
	document.getElementById("wb").style.opacity = "1";
	document.getElementById("mb").style.opacity = "1";
    document.getElementById("cb").style.opacity = "1";
	document.getElementById("hb").style.opacity = "1";
	document.getElementById("sb").style.opacity = "1";
    document.getElementById(s).style.opacity = "0";
}