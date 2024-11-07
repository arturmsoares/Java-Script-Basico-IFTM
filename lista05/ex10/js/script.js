
do{
    var numero = prompt("Informe um valor inteiro positivo maior ou igual 2");
} 
while (!Number.isInteger(Number(numero)) || Number(numero) < 2);



document.write(`        
    <table border="1" style="border-collapse: collapse; text-align:center">
        <tr>
            <th>Base Decimal</th>
            <th>Base Binária</th>
            <th>Base Hexadecimal</th>
        </tr>    
`)

for (var i = 0; i <= numero; i++){
    var numeroBinario = i.toString(2);
    var numeroHexa = i.toString(16).toUpperCase();
    document.write(`
        
            <tr>
                <td>${i}</td>
                <td>${numeroBinario}</td>
                <td>${numeroHexa}</td>
            </tr>            
    `)
  
}

document.write(`</table>`)






