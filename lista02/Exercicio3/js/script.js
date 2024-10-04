        const codigo = ["P2", "AP", "POO1", "FBD", "JSB"];
        const disciplina = [
            "Projeto Sistema Web MVC e SQL", 
            "Algoritmos e Programação", 
            "Programação Orientada a Objetos 1", 
            "Fundamentos de Banco de Dados", 
            "JavaScript Básico"
        ];

        document.write("<table>");
        document.write("<tr><th>Código</th><th>Disciplina</th></tr>");

        // Loop for in - Para cada índice, uma linha da tabela é gerada.
        for (let i in codigo) {
            document.write("<tr>");
            document.write(`<td>${codigo[i]}</td>`);
            document.write(`<td>${disciplina[i]}</td>`);
            document.write("</tr>");
        }

        document.write("</table>");
