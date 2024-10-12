// Escreve as imagens iniciais
document.write(
    '<img src="img/neutro.png" style="margin: 10px;">' +
    '<img src="img/neutro.png" style="margin: 10px;">'
);

const jogo = ['pedra', 'papel', 'tesoura'];

function escolha(jogador, indice) {
    document.write(`<img src="img/${jogo[indice]}.png" style="margin: 10px;">`);
}

var indiceJogador1 = parseInt(Math.random() * 3); 
var indiceJogador2 = parseInt(Math.random() * 3);

escolhaJogador1 = jogo[indiceJogador1];
escolhaJogador2 = jogo[indiceJogador2];


escolha("Jogador 1", indiceJogador1);
escolha("Jogador 2", indiceJogador2);

document.write('<h2 style="font-size: 30px">Resultado:</h2>');

if (escolhaJogador1 === escolhaJogador2) {
    document.write('<p style="font-size: 30px">Empate!</p>');
} else if (
    (escolhaJogador1 === 'pedra' && escolhaJogador2 === 'tesoura') || // Pedra vence Tesoura
    (escolhaJogador1 === 'papel' && escolhaJogador2 === 'pedra') || // Papel vence Pedra
    (escolhaJogador1 === 'tesoura' && escolhaJogador2 === 'papel')   // Tesoura vence Papel
) {
    document.write('<p style="font-size: 30px">Jogador 1 vence! ' + escolhaJogador1 + ' vence ' + escolhaJogador2 + '.</p>');
} else {
    document.write('<p style="font-size: 30px">Jogador 2 vence! ' + escolhaJogador2 + ' vence ' + escolhaJogador1 + '.</p>');
}
