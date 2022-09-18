function search(term) {
    let input = document.getElementById('searchid').value.toLowerCase();
    let x=document.getElementsByClassName(term);
    for (i = 0; i < x.length; i++) { 
        if (!x[i].children[0].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
            x[0].style.display="block";
        }
        else {
            x[i].style.display="block";
        }
    }
}