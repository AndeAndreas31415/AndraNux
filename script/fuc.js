function brain(){
	var back = document.getElementById("body").style.backgroundColor;
	console.log(back);
	if (back == "rgb(255, 255, 255)"){
		document.getElementById("body").style.backgroundColor = "#222";
		document.getElementById("main").style.background = "radial-gradient(white 0.5%,#222 72%)";
		document.getElementById("check").checked = false;
	}
	setTimeout(function(){
		document.location = "main.html";
	},1000);
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

