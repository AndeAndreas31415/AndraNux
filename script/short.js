function enter(event) {
    if (event.key == "Enter" || event.keyCode == 13) {
        shortfun(document.getElementById("shortinpu").value);
    }
}

function shortfun(shortvar) {
    if (shortvar) {
        shortnam(shortvar)
    }
}

function shortnam(s) {
    var sfirst = String(Array.from(s)[0])
    switch (sfirst) {
        case "A":
            window.location.replace("weeb/anime.html");
            break;
        case "M":
            window.location.replace("weeb/manga.html");
            break;
        case "c":
            ctf(s);
            break;
        case "d":
            window.location.replace("relevant/support.html");
            break;
        case "h":
            window.location.replace("hardware/hi.html");
            break;
        case "i":
            window.location.replace("index.html");
            break;
        case "m":
            window.location.replace("main.html");
            break;
        case "s":
            window.location.replace("software/si.html");
            break;
        default:
            alert("not a valide option");
            console.log(String(s)+" no no");
            break;
    }
}

function ctf(s) {
    var s = String(s).substring(2);
    switch (s) {
        case "cl":
            window.location.replace("ctf/ctflearn/i.html");
            break;
        case "cmd":
            window.location.replace("ctf/cmdchallenge.html");
            break;
        case "cwg":
            window.location.replace("ctf/ctf_withgoogle.html");
            break;
        case "fd":
            window.location.replace("ctf/Youtube/fd/i.html");
            break;
        case "htb":
            window.location.replace("ctf/hackthebox/i.html");
            break;
        case "m":
            window.location.replace("ctf/more_url.html");
            break;
        case "pl":
            window.location.replace("ctf/Pandora_lab-m23.html");
            break;
        case "try":
            window.location.replace("ctf/tryhackme/index.html");
            break;
        case "xss":
            window.location.replace("ctf/xss-game.html");
            break;
        default:
            window.location.replace("ctf/inctf.html");
            break;
    }
}
