if (document.cookie == "") {
  console.log("hey cookie doesn't exist");
} else {
  console.log("cookie! I love cookies");
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split('=');
}

var speach = "deu";

function langfuc(lang) {
  var site = "cocky_lang/"+lang+".html";
  speach=lang;
  document.getElementById('cookietxtjs').src = site;
}

function addCookie() {
  var d = new Date();
  var lifedays = 30;
  d.setTime(d.getTime() + (lifedays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = "cookie=accept; "+expires+"; secure"
}

function accept() {
  var window_text = "";
  if (speach === "deu") {
    window_text="Bist du dir sicher?";
  } else {
    window_text="Are you sure?";
  }
  if (window.confirm(window_text)) {
    addCookie();
    document.getElementById('cookieban').style.visibility = "hidden";
  }
}

function notaccept() {
  console.log("Oh yes");
  document.getElementById('cookieban').style.visibility = "hidden";
}
