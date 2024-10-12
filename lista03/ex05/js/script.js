var lista = [];

do {

    var passageiro = {
        nome: prompt("Informe o nome do passageiro"),
        idade: parseInt(prompt("Informe a idade do passageiro"))
    };

    lista.push(passageiro);

    var adicionarMais = prompt("Deseja adicionar outro passageiro? (s/n)").toLowerCase();
} while (adicionarMais === 's');

console.log(lista);

var totalIdade = 0;

for (var i=0; i < lista.length; i++){
        totalIdade += lista[i].idade;
    }

console.log(totalIdade);

var mediaIdade= totalIdade/ lista.length;

console.log(mediaIdade);

document.write(`<p style="text-align: center; font-size: 40px">A idade média dos passageiros é ${mediaIdade} anos. </p>`);

var indiceSorteado = parseInt(Math.random()*lista.length);
var nomeSorteado = lista[indiceSorteado].nome;

console.log(indiceSorteado);
console.log(nomeSorteado);

document.write(`<p style="text-align: center; font-size: 40px">O passageiro sorteado é ${nomeSorteado}</p>`);


