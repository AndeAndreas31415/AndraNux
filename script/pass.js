var x = window.location.pathname;
var xa = x.split("/");
var existctf = false;

if (document.cookie == "") {
    console.log("Is this a CTF-Challange?");
    console.log("Show in the script/pass.js <- login()");
    if (xa[xa.length-1] != "lock.html") {
        aC("site",x,1/48);
    }
    npass();
} else {
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookie = decodedCookie.split('; ');
    if (xa[xa.length-1] != "lock.html") {
        for (let cil = 0; cil < cookie.length; cil++) {
            if (cookie[cil].startsWith('site')) {
                removeCookie('site');
            }
        }
        aC("site",x,1/48);
    }
    ctfcock();
}

function sitecock(){
    for (let cil = 0; cil < cookie.length; cil++) {
        if (cookie[cil].startsWith('site')) {
            var ca = cookie[cil].split('=');
            document.location = ca[1];
        }
    }
}

function ctfcock(){
    for (let cil = 0; cil < cookie.length; cil++) {
        if (cookie[cil].startsWith('ctf')) {
            existctf = true
            var ca = cookie[cil].split('=');
            if (ca[1] == "2049965476ab49cd5136578869ef-d0986fe9bb9eb0eb1") {
                if (xa[xa.length-1] == "lock.html") {
                    sitecock();
                }
            } else if (ca[1] == "") {
                npass();
            } else {
                alert("Wrong String");
                removeCookie('ctf');
                brutfuc(cookie);
                npass();
            }
        }
        if(cil == cookie.length-1 && !existctf) {
            npass();
        }
    }
}

function npass() {
    if (xa[xa.length-1] != "lock.html") {
        for (let diri = 0; diri < xa.length; diri++) {
            if (xa[diri] == "ctf") {
                diffdir = xa.length-diri-2;
            }
        }
        dir = "";
        for (let ddi = 0; ddi < diffdir; ddi++) {
            dir += "../";
        }
        dir += "lock.html";
        document.location = dir;
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
        aC("ctf",(l[0]+"ab"+s[1]+s[2]+"cd"+l[2]+"ef-"+s[5]+l[3]),30);
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
                aC("brutfa",bfac,(1/72));
                return;
            }
        } else {
            aC("brutfa","1",(1/72));
            return;
        }
    }
}

function aC(nc,scoo,ld) {
    var d = new Date();
    d.setTime(d.getTime() + (ld*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = nc+"="+scoo+"; "+expires+"; path=/; secure";
}

function removeCookie(sr) {
    document.cookie = sr+"=; expires=Thu, 01 Jan 1970; secure";
    console.log("removed cookie: "+sr);
}