var aguarde = document.getElementById("aguarde");
var contagem = parseInt(Math.random()*(10 - 5 + 1))+5;
var cronometro = contagem * 1000;

function regressiva(){
    
    console.log(contagem);

    aguarde.innerHTML=`Processando. Aguarde ${contagem} segundos.`;

    if(contagem <= 3){   
        aguarde.innerHTML = `Processando. 
        Aguarde <span style="color: red;">${contagem}</span> segundos.`;    
    }
    
    if(contagem === 0){
        window.location.href="verVeiculo.html";
    }

    contagem--;

}

setInterval(regressiva, 1000);






