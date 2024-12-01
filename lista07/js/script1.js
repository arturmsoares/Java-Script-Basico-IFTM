var txtUser = document.getElementById("txtUser");
var txtPwd = document.getElementById("txtPwd");
var btnCadastrar = document.getElementById("btnCadastrar");
var btnLimpar = document.getElementById("btnLimpar")

// retorno: true (exite o user) ou false (não existe)
function checkUser(users, username){
    for(var i = 0; i < users.length; i++){
        if (username === users[i].username)
            return true;
        return false;
    }
}


btnCadastrar.addEventListener("click", function(){
    var newUser = {username: txtUser.value, password: txtPwd.value};
    
    if (txtPwd.value.length < 5) {
        alert("Senha inválida. Informe uma senha contendo pelo menos 5 caracteres.");
        return; // Interrompe a execução
    }
    
    var users = localStorage.getItem("users");
    if (!users){
        localStorage.setItem("users", JSON.stringify([newUser]));
        alert("Usuário cadastrado com sucesso!")

    }
    else{
        users = JSON.parse(users);//transforma para objeto
        if(checkUser(users, newUser.username)){
            alert("Usuário existente.Tente outro")
        }
        else{
            users.push(newUser); //capta o newUser para o vetor de objetos
            alert("Usuário cadastrado com sucesso!")
            localStorage.setItem("users", JSON.stringify(users)); //transforma novamente para string    
        }
    }
})


btnLimpar.addEventListener("click", function(){
    txtUser.value = "";
    txtPwd.value = "";
})

