var monteCartas = [];


for (i = 1; i <= 27; i++) {
    monteCartas.push("carta" + i + ".png");
}

console.log(monteCartas);
console.log(monteCartas.length);

function sortearCartas(jogador) {

    document.write(`<div style="display: flex; align-items: center; margin-bottom: 10px;">`);
    document.write(`<h2 style="display: inline;">Cartas do ${jogador}</h2>`);

    for (i = 0; i < 3; i++) {
        var indice = parseInt(Math.random() * monteCartas.length+1);
        
        var carta = monteCartas[indice];
        
        document.write(`<img src="cartas/${carta}" style="margin-left: 10px">`);
        
        monteCartas.splice(indice, 1);
    }
    
    document.write(`</div>`);
}


sortearCartas("Jogador 01");
sortearCartas("Jogador 02");
sortearCartas("Jogador 03");
sortearCartas("Jogador 04");

console.log(monteCartas);
