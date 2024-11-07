var texto = prompt("Digite um texto qualquer:")

var palavraUm = prompt("Informe uma palavra contida no texto para ser substituída:");
var palavraDois = prompt("Informe uma palavra para substituir a palavra anteriormente escolhida:");

var novoTexto = texto.replaceAll(palavraUm, palavraDois);

alert(novoTexto);