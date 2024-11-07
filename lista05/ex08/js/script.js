var texto = prompt("Digite um texto qualquer:");

var palavras = texto.split(" ");

var palavrasUnicas = [...new Set(palavras)];
// new Set(palavras): cria um Set a partir do array 'palavras', eliminando as palavras repetidas;
// ... : o spread operator converte o Set de volta para um array

var alfabetoUtilizado = [];

for (var i = 0; i < palavrasUnicas.length; i++) {
    var letraInicial = palavrasUnicas[i].charAt(0).toLowerCase();
    if (!alfabetoUtilizado.includes(letraInicial)) {
        alfabetoUtilizado.push(letraInicial);
    }
}

alfabetoUtilizado.sort(); // coloca o array em ordem alfabética

console.log(palavrasUnicas);
console.log(alfabetoUtilizado);


for (var i in alfabetoUtilizado) {
    document.write(`<p>Palavras iniciadas com a letra ${alfabetoUtilizado[i]}:</p>`);
    
    for (var j in palavrasUnicas) {
        if (palavrasUnicas[j].charAt(0).toLowerCase() === alfabetoUtilizado[i]) {
            document.write(`
                <ul>
                <li>${palavrasUnicas[j].toLowerCase()}</li>
                </ul>
            `);
        }

    }
}
