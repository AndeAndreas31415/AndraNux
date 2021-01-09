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

function eggover(){
	document.getElementById("egg").style.visibility = "visible";
	github();
	repo();
}

function egg(){
	document.getElementById("egg").style.visibility = "visible";
	console.log("please don't smash eggs");
	console.log(`%c
. . . . . . . . . . . . . . . . . . . . .
.                                       .
.                                       .
.                ████████               .
.              ██        ██             .
.            ██▒▒▒▒        ██           .
.          ██▒▒▒▒▒▒      ▒▒▒▒██         .
.          ██▒▒▒▒▒▒      ▒▒▒▒██         .
.        ██  ▒▒▒▒        ▒▒▒▒▒▒██       .
.        ██                ▒▒▒▒██       .
.      ██▒▒      ▒▒▒▒▒▒          ██     .
.      ██      ▒▒▒▒▒▒▒▒▒▒        ██     .
.      ██      ▒▒▒▒▒▒▒▒▒▒    ▒▒▒▒██     .
.      ██▒▒▒▒  ▒▒▒▒▒▒▒▒▒▒  ▒▒▒▒▒▒██     .
.        ██▒▒▒▒  ▒▒▒▒▒▒    ▒▒▒▒██       .
.        ██▒▒▒▒            ▒▒▒▒██       .
.          ██▒▒              ██         .
.            ████        ████           .
.                ████████               .
.                                       .
.                                       .
.        please don't smash eggs        .
. . . . . . . . . . . . . . . . . . . . .`,"color:#000000; background:#00ee00; font-family: monospace");
}
