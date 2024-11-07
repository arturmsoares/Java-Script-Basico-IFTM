var texto = prompt("Digite um texto qualquer:");

var textoInvertido="";

for (var i = texto.length-1; i>=0; i--){
    textoInvertido += texto.charAt(i);
}

if(textoInvertido.toLowerCase() === texto.toLowerCase()){
    alert("O texto é um palindromo");
}else{
    alert("O texto NÃO é um palindromo");
}


