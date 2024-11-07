var texto = prompt("Digite um texto qualquer:");

palavrasTexto = texto.split(" ");

document.write(`<p>${palavrasTexto[0].concat(" ", palavrasTexto[palavrasTexto.length-1])}</p>`);