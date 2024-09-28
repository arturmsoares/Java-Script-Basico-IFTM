nota1 = prompt("Digite a nota do primeiro bimestre");

nota2 = prompt("Digite a nota do segundo bimestre");

soma = parseFloat(nota1) + parseFloat(nota2); 

//parseFloat: altera a string para numero real

console.log(soma);

if (soma >= 60)
    alert("Você está APROVADO!")

else
    alert (`Você está REPROVADO. Falta(m) ${60-soma} ponto(s).`)