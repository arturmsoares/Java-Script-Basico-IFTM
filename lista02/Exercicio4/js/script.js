var passageirosHomens = [];
var passageirosMulheres = [];
var sexo, nome;

const totalPassageiros = prompt("Quantos passageiros vão entrar no onibus?");

for (var i = 1; i<= totalPassageiros; i++){
    //leitura do sexo
    sexo = prompt(`Qual o sexo do passageiro ${i} (H ou M):`);
    //leitura do nome de cada passageiro
    nome = prompt(`Qual o nome do passageiro ${i}?`);
    if (sexo == "H")
        passageirosHomens.push(nome); // add nome ao array dos homens
    else if(sexo == "M")
        passageirosMulheres.push(nome); // add nome ao array das mulheres

}

passageirosHomens.sort();
passageirosMulheres.sort();

var nroInteracoes;

if(passageirosHomens.length > passageirosMulheres.length)
nroInteracoes = passageirosHomens.length;
else nroInteracoes = passageirosMulheres.length;

console.log(passageirosHomens);

document.write("<table border = '1'>");

for (i = 0; i<nroInteracoes; i++ ) {
    document.write("<tr>");
    document.write(`<td>${passageirosHomens[i]  || ""}</td>`);
    document.write(`<td>${passageirosMulheres[i]  || ""}</td>`);
    document.write("</tr>");
}

document.write("</table>");





