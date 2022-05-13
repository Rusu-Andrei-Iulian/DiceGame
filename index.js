var a;
var b;
var imagini = new Array();
imagini[0] = new Image();
imagini[0].src = "/dice1.png";

imagini[1] = new Image();
imagini[1].src = "dice2.png";

imagini[2] = new Image();
imagini[2].src = "dice3.png";

imagini[3] = new Image();
imagini[3].src = "dice4.png";

imagini[4] = new Image();
imagini[4].src = "dice5.png";

imagini[5] = new Image();
imagini[5].src = "dice6.png";

function zar(){
    a = Math.floor(Math.random() * 6) + 1;
    b = Math.floor(Math.random() * 6) + 1;
    document.getElementById("p").src = imagini[a].src;
    document.getElementById("p1").src = imagini[b].src;
    if(a == b) {
        document.querySelector("h1").innerHTML = "Egalitate";
    }
    else if(a > b) {
        document.querySelector("h1").innerHTML = "Jucatorul 1 a castigat";
    }
    else {
        document.querySelector("h1").innerHTML = "Jucatorul 2 a castigat";
    }
}


