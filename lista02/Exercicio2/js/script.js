const codigo = ["P2", "AP", "POO1", "FBD", "JSB"];
const disciplina = [
    "Projeto Sistema Web MVC e SQL", 
    "Algoritmos e Programação", 
    "Programação Orientada a Objetos 1", 
    "Fundamentos de Banco de Dados", 
    "JavaScript Básico"
];

document.write(`
    <table>
    <tr>
        <th>Código</th>
        <th>Disciplina</th>
    </tr>
    <tr>
        <td>${codigo[0]}</td>
        <td>${disciplina[0]}</td>
    </tr>
    <tr>
        <td>${codigo[1]}</td>
        <td>${disciplina[1]}</td>
    </tr>
    <tr>
        <td>${codigo[2]}</td>
        <td>${disciplina[2]}</td>
    </tr>
    <tr>
        <td>${codigo[3]}</td>
        <td>${disciplina[3]}</td>
    </tr>
    <tr>
        <td>${codigo[4]}</td>
        <td>${disciplina[4]}</td>
    </tr>
</table>

`)