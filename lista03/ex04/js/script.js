while(true){
    var N = parseInt(prompt("Informe um valor MÍNIMO para geração de numeros aleatórios:"));
    var M = parseInt(prompt("Informe um valor MÁXIMO para geração de numeros aleatórios:"));
    
    if (isNaN(M) || isNaN(N)) {
        alert("Valores inválidos! Tente novamente.");
    } else if (M <= N) {
        alert("O valor MÁXIMO deve ser maior que o valor MÍNIMO! Tente novamente.");
    } else {
        break;
    }
}
    var numeroAleatorio = parseInt((Math.random() * (M-N+1) +N));
    document.write(`<p style="font-size:50px; text-align:center; font-weight:bold">${numeroAleatorio}</p>`);

