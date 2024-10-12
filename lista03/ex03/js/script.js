
while(true){
    
    var numero = parseInt(prompt("Informe um valor máximo para geração de numeros aleatórios:"));

    if(isNaN(numero) || numero<=0){
        alert("Número invalido! Tente novamente!");
    }
    else{
        break;
    }
    
}

    var numeroAleatorio = parseInt(Math.random() * numero + 1);
    document.write(`<p style="font-size:50px; text-align:center; font-weight:bold">${numeroAleatorio}</p>`);

