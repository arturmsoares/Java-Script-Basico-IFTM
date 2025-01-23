window.addEventListener("DOMContentLoaded", function () {

    // Função para validar
    function validar(input, padrao) {
        if (padrao.test(input.value))
            alert("válido");
        else
            alert("inválido");
    }

    //numero binário
    var numBin = document.getElementById("numBin");
    var btnNumBin = document.getElementById("btnNumBin");

    btnNumBin.addEventListener("click", function () {
        var padrao = /^[01]+$/;
        validar(numBin, padrao);
    });

    // numero hexa
    var numHexa = document.getElementById("numHexa");
    var btnNumHexa = document.getElementById("btnNumHexa");

    btnNumHexa.addEventListener("click", function () {
        var padrao = /^[0-9a-f]{1,}$/i;
        validar(numHexa, padrao);
    });

    // numero decimal
    var numDec = document.getElementById("numDec");
    var btnNumDec = document.getElementById("btnNumDec");

    btnNumDec.addEventListener("click", function () {
        var padrao = /^-?\d+$/; 
        validar(numDec, padrao);
    });

    // números reais
    var numReal = document.getElementById("numReal");
    var btnNumReal = document.getElementById("btnNumReal");

    btnNumReal.addEventListener("click", function () {
        var padrao = /^-?\d+(,|.)?\d{0,}$/
        validar(numReal, padrao);
    });

    // horario
    var hora = document.getElementById("hora");
    var btnHora = document.getElementById("btnHora");

    btnHora.addEventListener("click", function () {
        var padrao = /^([01]\d|2[0-3]):[0-5]\d:[0-5]\d$/;
        validar(hora, padrao);
    });

    // data de nascimento
    var dataNasc = document.getElementById("dataNasc");
    var btnDataNasc = document.getElementById("btnDataNasc");

    btnDataNasc.addEventListener("click", function () {
        var padrao = /^\d{2}\/\d{2}\/(\d{2}|\d{4})$/;
        validar(dataNasc, padrao);
    });

    // CEP
    var cep = document.getElementById("cep");
    var btnCep = document.getElementById("btnCep");

    btnCep.addEventListener("click", function () {
        var padrao = /^\d{2}\.\d{3}-\d{3}$/;
        validar(cep, padrao);
    });

    // CPF
    var cpf = document.getElementById("cpf");
    var btnCpf = document.getElementById("btnCpf");

    btnCpf.addEventListener("click", function () {
        var padrao = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        validar(cpf, padrao);
    });

    // CNPJ
    var cnpj = document.getElementById("cnpj");
    var btnCnpj = document.getElementById("btnCnpj");

    btnCnpj.addEventListener("click", function () {
        var padrao = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/; 
        validar(cnpj, padrao);
    });

    // nmeros entre parênteses
    var numParenteses = document.getElementById("numParenteses");
    var btnNumParenteses = document.getElementById("btnNumParenteses");

    btnNumParenteses.addEventListener("click", function () {
        var padrao = /^\(\d{1,}\)$/; 
        validar(numParenteses, padrao);
    });

    // Email
    var email = document.getElementById("email");
    var btnEmail = document.getElementById("btnEmail");

    btnEmail.addEventListener("click", function () {
        var padrao = /^\w{1,}@\w{1,}\.\w{2,3}$/; 
        validar(email, padrao);
    });

    // Endereço IP
    var endereco = document.getElementById("endereco");
    var btnEndereco = document.getElementById("btnEndereco");

    btnEndereco.addEventListener("click", function () {
        var padrao = ""; // Endereço IP
        validar(endereco, padrao);
    });

    // Altura de uma pessoa
    var altura = document.getElementById("altura");
    var btnAltura = document.getElementById("btnAltura");

    btnAltura.addEventListener("click", function () {
        var padrao = ""; // Altura
        validar(altura, padrao);
    });

    // Nome próprio
    var nome = document.getElementById("nome");
    var btnNome = document.getElementById("btnNome");

    btnNome.addEventListener("click", function () {
        var padrao = ""; // Nome próprio
        validar(nome, padrao);
    });

    // Telefone
    var telefone = document.getElementById("telefone");
    var btnTelefone = document.getElementById("btnTelefone");

    btnTelefone.addEventListener("click", function () {
        var padrao = ""; // Telefone
        validar(telefone, padrao);
    });

    // Número de 1 a 100
    var num100 = document.getElementById("num100");
    var btnNum100 = document.getElementById("btnNum100");

    btnNum100.addEventListener("click", function () {
        var padrao = ""; // Número de 1 a 100
        validar(num100, padrao);
    });

    // Placa de carro
    var placa = document.getElementById("placa");
    var btnPlaca = document.getElementById("btnPlaca");

    btnPlaca.addEventListener("click", function () {
        var padrao = ""; // Placa de carro
        validar(placa, padrao);
    });

    // Palavras com vogais e letras específicas
    var palavras = document.getElementById("palavras");
    var btnPalavras = document.getElementById("btnPalavras");

    btnPalavras.addEventListener("click", function () {
        var padrao = ""; // Palavras com vogais e letras específicas
        validar(palavras, padrao);
    });

    // Faturamento de empresa
    var faturamento = document.getElementById("faturamento");
    var btnFaturamento = document.getElementById("btnFaturamento");

    btnFaturamento.addEventListener("click", function () {
        var padrao = ""; // Faturamento de empresa
        validar(faturamento, padrao);
    });

    // Número de matrícula
    var matricula = document.getElementById("matricula");
    var btnMatricula = document.getElementById("btnMatricula");

    btnMatricula.addEventListener("click", function () {
        var padrao = ""; // Número de matrícula
        validar(matricula, padrao);
    });

    // Número de matrícula (formato 1)
    var matriculaFormat1 = document.getElementById("matriculaFormat1");
    var btnMatriculaFormat1 = document.getElementById("btnMatriculaFormat1");

    btnMatriculaFormat1.addEventListener("click", function () {
        var padrao = ""; // Número de matrícula (formato 1)
        validar(matriculaFormat1, padrao);
    });

    // Número de matrícula (formato 2)
    var matriculaFormat2 = document.getElementById("matriculaFormat2");
    var btnMatriculaFormat2 = document.getElementById("btnMatriculaFormat2");

    btnMatriculaFormat2.addEventListener("click", function () {
        var padrao = ""; // Número de matrícula (formato 2)
        validar(matriculaFormat2, padrao);
    });





})


// var padrao = /\d/; validar se tem digito em qq lugar
// var padrao = /^\d/; valida se há nro no inicio
// var padrao = /\d$/; valida se há nro no fim
// var padrao = /^\d$/; valida se há exatamento um nro
// var padrao = /^\d{5}-\d{4-5}$/; // valida nro telefone
// var padrao = /^\(\d{3}\)\d{4,5}-\d{4}$/; //valida nro telefone com (ddd)
// var padrao = /^\d{2}\/\d{2}\/\d{4}$/; valida data nascimento
// var padrao = /^\d{2}\.\d{3}-\d{3}$/; valida cep;
// var padrao = /^[IFTMiftm]{4}-\d{4,6}-(TSPI|LCO|MKT):\d[A-Z]$/ pode escolher 4 digitos dentro do colchete;
// var padrao = /^(I|i)(F|f)(T|t)(M|m)-\d{4,6}-(TSPI|LCO|MKT):\d[A-Z]$/ digitar IFTM maiusculo ou minusculo
// var padrao=/^[MFmf]$/
// var padrao=/^(M|F|Masculino|Feminino)$/
// var padrao=/^(M|F|Masculino|Feminino)$/i; ignora o sensitive case;
// var padrao = /^IFTM\s{1,3}TSPI$/ //até 3 espaços
// var padrao = /^IFTM\s{1,}TSPI$/ //no minimo 1 espaço
// var padrao = /^IFTM\s?TSPI$/ //no minimo 1 espaço
// var padrao = /^[abcde]{2,}$/
// var padrao = /^[0-9a-f]{1,}$/i // validar hexadecimal
// var padrao = /^[0-9a-f]+$/i // validar hexadecimal
// var padrao = /[^*+-]+$/ // tudo menos os elementos dentro do cochete após o ^
// var padrao = /^\d{2}:\d{2}$/ validar hora: dois pontos não é anotação de regex
// var padrao = /^[A-z]{4,}\d{2,4}\W{2}$/ 