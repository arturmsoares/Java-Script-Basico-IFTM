window.addEventListener("DOMContentLoaded", function () {

    var nivel = document.getElementById("nivel");
    var cronometro = document.getElementById("cronometro");
    var iniciar = document.getElementById("iniciar");
    var pausar = document.getElementById("pausar");
    var parar = document.getElementById("parar");
    var sair = document.getElementById("sair");
    var numAleatorio = document.getElementById("numAleatorio");
    var pares = document.getElementById("pares");
    var erros = document.getElementById("erros");
    var acertos = document.getElementById("acertos");
    var percentualAcertos = document.getElementById("percentualAcertos");
    var alertSound = document.getElementById("alertSound");
    var acertoSound = document.getElementById("acertoSound");
    var erroSound = document.getElementById("erroSound");
    var iniciarSound = document.getElementById("iniciarSound");
    var pausarSound = document.getElementById("pausarSound");
    var gameSound = document.getElementById("gameSound");


    var idSorteio; 
    var tempoAtual;
    var idCronometro; 
    var contadorPares = 0;
    var contadorErros = 0;
    var contadorAcertos = 0;
    var numeroProcessado = false;



    //Configurações é definida como um objeto com 3 chaves
    var configuracoes = {
        1: { tempo: 105, intervalo: 1000 }, // fácil
        2: { tempo: 60, intervalo: 700 },   // médio
        3: { tempo: 30, intervalo: 450 }    // difícil
    };

    var nivelSelecionado = configuracoes[nivel.selectedIndex];
    


    // Mudança de nível
    nivel.addEventListener("change", function () {

        nivelSelecionado = configuracoes[nivel.selectedIndex];

        if (nivel.selectedIndex === 0) {
            cronometro.innerHTML = "00:00";
        } else {
            tempoAtual = nivelSelecionado.tempo;
            cronometro.innerHTML = formatarTempo(tempoAtual);
            // iniciar.disabled = false;
        }
    }
    )



    // Configuações ao cliar em "iniciar"
    iniciar.addEventListener("click", function () {

        if(nivel.selectedIndex===0){
            alertSound.play();
            alertWifi("Selecione um nivel para inicial", false, 5, "img/logo.png", 30, "");
            return;
        }

        iniciarSound.play();
        gameSound.play();


        nivel.disabled = true;
        iniciar.disabled = true;
        pausar.disabled = false;
        parar.disabled = false;


        
        dispararCronometro();
        sortearNumero(nivelSelecionado.intervalo);
    });



    //A função recebe o parâmetro de tempos conforme nível selecionado
    function dispararCronometro() {
            idCronometro = setInterval(function () {
            cronometro.innerHTML = formatarTempo(tempoAtual);
    
            if (tempoAtual === 0) {
                fimJogo();
            } else {
                tempoAtual--;
            }
        }, 1000);
    }

    function sortearNumero(intervalo) {
        idSorteio = setInterval(function () {
            var numero = Math.floor(Math.random() * 100) + 1;
            numAleatorio.innerHTML = numero;
            numAleatorio.classList.remove("par", "impar");

            numeroProcessado = false;
            
            
            if (numero % 2 === 0) {
                contadorPares++;
                pares.innerHTML = contadorPares;
                atualizarPercentualAcertos();
            }
        }, intervalo);
        
    }

    numAleatorio.addEventListener("click", function () {
        
        if (numAleatorio.innerHTML === "Fim!" 
            || numeroProcessado 
            || numAleatorio.innerHTML === "-") {
            return; 
        }
    
        var numero = parseInt(numAleatorio.innerHTML);
        
        alterarCor(numAleatorio, numero);
    
        if (numero % 2 != 0) {
            erroSound.play();
            if(!erroSound.paused){
                erroSound.currentTime = 0;
            }
            contadorErros++;
            erros.innerHTML = contadorErros;
        } else{
            acertoSound.play();
            if(!acertoSound.paused){
                acertoSound.currentTime = 0;
            }
            contadorAcertos++;
            acertos.innerHTML = contadorAcertos;
        }

        atualizarPercentualAcertos();
        numeroProcessado = true; // Marca o número como processado para evitar múltiplas atualizações  

    });
    
    function atualizarPercentualAcertos() {
        var percentual = contadorPares === 0 ? 0 : (contadorAcertos / contadorPares) * 100;
        percentualAcertos.innerHTML = `${percentual.toFixed(1)}%`;
    }
    

    function alterarCor(numAleatorio, numero) {
        numAleatorio.classList.remove("par", "impar"); 
        if (numero % 2 === 0) {
            numAleatorio.classList.add("par");
             
        } else {
            numAleatorio.classList.add("impar"); 
        }
    }

    pausar.addEventListener("click", function(){
        pausarSound.play();
        pausar.disabled = true;
        iniciar.disabled = false;
        parar.disabled = false;
        sair.disable = false;
        clearInterval(idCronometro);
        clearInterval(idSorteio); 
    })

    parar.addEventListener("click", function () {
        pausarSound.play();
        resetarJogo();
    });

    sair.addEventListener("click", function(){
        window.location.href = "index.html";
    })

    function fimJogo() {

        clearInterval(idCronometro);
        clearInterval(idSorteio);
        gameSound.paused;
        
        // controles
        nivel.disabled = false;
        nivel.selectedIndex = 0;
        iniciar.disabled = false;
        pausar.disabled = true;
        parar.disabled = true;
        sair.disable = false;

        // Resetar número aleatório
        numAleatorio.innerHTML = "Fim!";

        setTimeout(resetarJogo, 5000);
    }

    
    function resetarJogo() {

        clearInterval(idCronometro);
        clearInterval(idSorteio);
        gameSound.paused;
        
        // controles
        nivel.disabled = false;
        nivel.selectedIndex = 0;
        iniciar.disabled = false;
        pausar.disabled = true;
        parar.disabled = true;
        sair.disable = false;
    
    
        //contadores
        contadorPares = 0;
        contadorErros = 0;
        contadorAcertos = 0;
        percentual = 0;
        pares.innerHTML = "0";
        erros.innerHTML = "0";
        acertos.innerHTML = "0";
        cronometro.innerHTML = "00:00";
        percentualAcertos.innerHTML = "00.0%"

    
        // Resetar número aleatório
        numAleatorio.innerHTML = "-";
    }
    
    //Formata o tempo em segundos para exibição na página
    function formatarTempo(segundos) {
        var minutos = Math.floor(segundos / 60);
        var segundosRestantes = segundos % 60;
        return "0" + minutos + ":" +
            (segundosRestantes < 10 ? "0" : "") + segundosRestantes;
    }



})