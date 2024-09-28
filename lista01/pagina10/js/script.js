qtde = prompt("Digite quantas vezes seu nome deve aparecer");

nome = prompt("Informe seu nome completo");

for(i=0; i < qtde; i++)
    document.write(`<p>${nome}<p>`);
