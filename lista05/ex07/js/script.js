var texto = prompt("Digite um texto qualquer:");
var letra = prompt("Escolha uma letra:");



var palavrasTexto = texto.split(" ");
var palavrasSelecionadas = "";

for (var i in palavrasTexto){
    if (palavrasTexto[i].charAt(0).toLowerCase() === letra.toLowerCase()){
        palavrasSelecionadas += palavrasTexto[i] + " "; 
    }
}

palavrasSelecionadas = palavrasSelecionadas.trim() + "."

document.write("<p>" + palavrasSelecionadas + "</p>");

