var megaSena = [];

for(var i = 1; i <= 60; i++){
    megaSena.push(i);
}

var jogo = [];
var numeroSorteado;

for (var j = 0; j < 6; j++){
    numeroSorteado = parseInt((Math.random()*megaSena.length+1));
    megaSena.splice(i,1);
    jogo.push(numeroSorteado);
}

document.write(`<p style="text-align:center; font-size:40px">Os numeros da Mega Sena são: ${jogo.join(', ')}.`)
