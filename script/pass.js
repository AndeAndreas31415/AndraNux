var x = window.location.pathname;
var xa = x.split("/")

if (document.cookie == "") {
    console.log("Is this a CTF-Challange?");
    console.log("Show in the login()");
    npass();
} else {
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookie = decodedCookie.split('; ');
    for (let cil = 0; cil < cookie.length; cil++) {
        if (cookie[cil].startsWith('ctf')) {
            var ca = cookie[cil].split('=');
            if (ca[1] == "2049965476ab49cd5136578869ef-d0986fe9bb9eb0eb1") {
                if (xa[xa.length-1] == "inctf.html") {
                    document.getElementById("ipasswdiv").style.visibility = "hidden";
                    document.getElementById("pages").style.visibility = "visible";
                }
            } else if (ca[1] == "") {
                npass();
            } else {
                alert("Wrong String");
                removeCookie('ctf');
                brutfuc(cookie);
                npass();
            }
        } else {
            console.log("THE Cookie <- 404");
            npass();
        }
    }
}

function npass() {
    if (xa[xa.length-1] != "inctf.html") {
        for (let diri = 0; diri < xa.length; diri++) {
            if (xa[diri] == "ctf") {
                diffdir = xa.length-diri-2;
            }
        }
        dir = "";
        for (let ddi = 0; ddi < diffdir; ddi++) {
            dir += "../";
        }
        dir += "inctf.html";
        document.location = dir;
    } else {
        document.getElementById("ipasswdiv").style.visibility = "visible";
        document.getElementById("pages").style.visibility = "hidden";
    }
    const input = document.querySelector('input');
    input.addEventListener('input', login);
}

function login(e) {
    if(e.target.value.endsWith('-')) {
        var s = hex_sha256(e.target.value);
        var middle = Math.floor(s.length / 8);
        var sa=[s.substr(0, middle), 
                s.substr(middle*1 , middle),
                s.substr(middle*2 , middle),
                s.substr(middle*3 , middle),
                s.substr(middle*4 , middle),
                s.substr(middle*5 , middle),
                s.substr(middle*6 , middle),
                s.substr(middle*7 , middle)
            ];
        var l=[ parseInt(sa[7],16)^parseInt(sa[0],16),
                parseInt(sa[5],16)&parseInt(sa[1],16),
                parseInt(sa[3],16)+parseInt(sa[4],16),
                sa[1]+sa[6]
            ];
        
        console.log((l[0]+"ab"+s[1]+s[2]+"cd"+l[2]+"ef-"+s[5]+l[3]));
        aC("ctf",(l[0]+"ab"+s[1]+s[2]+"cd"+l[2]+"ef-"+s[5]+l[3]));
        window.location.reload(true);
    }
}

function brutfuc(cookie) {
    for (let cil = 0; cil < cookie.length; cil++) {
        if (cookie[cil].startsWith('brutfa')) {
            var ca = cookie[cil].split('=');
            if (parseInt(ca[1]) >= "3" & parseInt(ca[1]) < "5") {
                alert("The brute force protection is working.");
                window.location.replace("https://www.google.com/search?q=use+devtools+web+browser");
                return;
            } else {
                var bfac=parseInt(ca[1])+1;
                aC("brutfa",bfac);
                return;
            }
        } else {
            console.log("Fuck");
            aC("brutfa","1");
            return;
        }
    }
}

function aC(nc,scoo) {
    var d = new Date();
    var lifedays = 30;
    d.setTime(d.getTime() + (lifedays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = nc+"="+scoo+"; "+expires+"; secure";
}

function removeCookie(sr) {
    document.cookie = sr+"=; expires=Thu, 01 Jan 1970; secure";
    console.log("removed cookie: "+sr);
}