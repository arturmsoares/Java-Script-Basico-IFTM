var nomeCompleto = prompt("Qual o seu nome completo?");

var partesNome = nomeCompleto.split(" ");

var nomeFormatado = partesNome[0].toUpperCase();

for (var i = 1; i < partesNome.length; i++) {
    nomeFormatado += " " + partesNome[i].toLowerCase();
}

alert(nomeFormatado);