
var txtNome = document.getElementById("txtNome");
var numIdade = document.getElementById("numIdade");
var btnCarros = document.getElementById("btnCarros");
var btnLimpar = document.getElementById("btnLimpar");
var passatempo = document.getElementById("passatempo");

btnCarros.addEventListener("click", function(){
    validaForm();
});


btnLimpar.addEventListener("click", function(){
    txtNome.value="";
    numIdade.value="";
    passatempo.value="Selecione";
});



function validaForm(){
    if (txtNome.value.trim() ===""){
        alert("digite um nome válido!");
    }
    else if(numIdade.value < 1 || numIdade.value >130){
        alert("idade inválida!");
    }
    else if(passatempo.value === "Selecione"){
        alert("Selecione uma opcao válida");
    }
    else{
        var perfil = {
            nome:txtNome.value, 
            idade:numIdade.value, 
            passatempo:passatempo.value};

        localStorage.setItem("perfil", JSON.stringify(perfil));
        window.location.href="aguarde.html";

    }
}

