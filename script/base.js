function brain(){
	document.location = "main.html"
}

function github(){
	document.getElementById("gh").style.visibility = "visible";
	document.getElementById("gh").animate([
		{left: "50%"},
		{left: "0%"},
		{left: "10%"},
		{left: "5%"}
	],{
		duration: 5000,
	});
}

function repo(){
	document.getElementById("gp").style.visibility = "visible";
	document.getElementById("gp").animate([
		{left: "50%"},
		{left: "5%"},
		{left: "15%"},
		{left: "5%"}
	],{
		duration: 5000,
	});
}

function myswitch(){
	var cb = document.getElementById("check");
	if (cb.checked == true){
		document.getElementById("body").style.backgroundColor = "#fff";
		document.getElementById("main").style.background = "#fff";
	}else{
		document.getElementById("body").style.backgroundColor = "#222";
		document.getElementById("main").style.background = "radial-gradient(white 0.5%,#222 72%)";
	}
}

function eggover(){
	document.getElementById("egg").style.visibility = "visible";
	github();
	repo();
}

function egg(){
	document.getElementById("egg").style.visibility = "visible";
	console.log("please don't smash eggs");
}
