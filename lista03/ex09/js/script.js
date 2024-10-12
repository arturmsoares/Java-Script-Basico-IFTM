var qtde = prompt("Quantas pessoas vão apresentar?");

var grupo = [];
var nome;

for (i = 0; i < qtde; i++){
   nome = prompt("Informe o nome da componente do grupo");
   grupo.push(nome);
}
    console.log(grupo);

    document.write("<h1>Ordem de Apresentação do Grupo</h1>")

  
    document.write("<ol>")

for (j = 0; j < qtde; j++){
    var indiceSorteado = parseInt(Math.random()*grupo.length);
    document.write(`<li>${grupo[indiceSorteado]}</li>`);
    grupo.splice(indiceSorteado, 1);
}

document.write("</ol>")
