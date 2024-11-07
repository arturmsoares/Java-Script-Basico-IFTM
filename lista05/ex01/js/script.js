var nome = prompt("Qual o seu primeiro nome?");

var sobrenome = prompt("Qual o seu sobrenome?");

var qtde = parseInt(prompt("Digite quantas vezes o nome deve aperecer:"));

var corAlternada = prompt("Digite a cor que deseja utilizar alternadamente (red, blue, etc):");

for ( var i=1; i<=qtde; i++){
    var corAtual = (i % 2 === 0) ? corAlternada : "black";
    document.write(`<p style="color:${corAtual};"> ${i} - ${nome.concat(" ", sobrenome)}</p>`);
}

