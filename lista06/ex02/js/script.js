var mickeyBox = document.getElementById("mickeyBox");
var minnieBox = document.getElementById("minnieBox");
var plutoBox = document.getElementById("plutoBox");
var patetaBox = document.getElementById("patetaBox");

var mickeyImg = document.getElementById("mickeyImg");
var minnieImg = document.getElementById("minnieImg");
var plutoImg = document.getElementById("plutoImg");
var patetaImg = document.getElementById("patetaImg");

var votos = {
    mickeyImg: 0,
    minnieImg: 0,
    plutoImg: 0,
    patetaImg: 0
};


    function mudarCorFundo(elemento, cor) {
        elemento.style.backgroundColor = cor;
    }


    function incrementarVotos(elemento) {
        votos[elemento.id]++;
        
        if (elemento.id === "mickeyImg") {
            mickeyVotos.innerText = "Número de votos: " + votos.mickeyImg;
        } else if (elemento.id === "minnieImg") {
            minnieVotos.innerText = "Número de votos: " + votos.minnieImg;
        } else if (elemento.id === "plutoImg") {
            plutoVotos.innerText = "Número de votos: " + votos.plutoImg;
        } else if (elemento.id === "patetaImg") {
            patetaVotos.innerText = "Número de votos: " + votos.patetaImg;
        }

        destacarMaiorVotos();
    }


    [mickeyBox, minnieBox, plutoBox, patetaBox].forEach(function(elemento) {
        
        elemento.addEventListener("mouseenter", function() {
            mudarCorFundo(elemento, "green");
        });

        elemento.addEventListener("mouseleave", function() {
            destacarMaiorVotos();
        });

    });


    [mickeyImg, minnieImg, plutoImg, patetaImg].forEach(function(elemento){

        elemento.addEventListener("click", function(){
            incrementarVotos(elemento);
        })
    })


    function destacarMaiorVotos() {
        var maiorVotos = Math.max(votos.mickeyImg, votos.minnieImg, votos.plutoImg, votos.patetaImg);

        [mickeyBox, minnieBox, plutoBox, patetaBox].forEach(function(box) {
            box.style.backgroundColor = "lightgreen";
        });

        if (votos.mickeyImg === maiorVotos && votos.mickeyImg>0) {
            mickeyBox.style.backgroundColor = "gold";
        }
        if (votos.minnieImg === maiorVotos && votos.minnieImg>0) {
            minnieBox.style.backgroundColor = "gold";
        }
        if (votos.plutoImg === maiorVotos && votos.plutoImg>0) {
            plutoBox.style.backgroundColor = "gold";
        }
        if (votos.patetaImg === maiorVotos && votos.patetaImg>0) {
            patetaBox.style.backgroundColor = "gold";
        }
    }
