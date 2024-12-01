var txtUser = document.getElementById("txtUser");
var txtPwd = document.getElementById("txtPwd");
var btnLogin = document.getElementById("btnLogin");

// retorno: true (exite o user) ou false (não existe)
function checkUser(users, username){
    for(var i = 0; i < users.length; i++){
        if (username === users[i].username)
            return true;
        return false;
    }
}

function checkPwd(users, password){
    for(var i = 0; i < users.length; i++){
        if (password === users[i].password)
            return true;
        return false;
    }
}

btnLogin.addEventListener("click", function(){   
    var cadUser = {username: txtUser.value, password: txtPwd.value};
    var users = localStorage.getItem("users");
    users = JSON.parse(users);//transforma para objeto
    if(checkUser(users, cadUser.username)){
        if(checkPwd(users, cadUser.password)){
            window.location.href = "tamagotchi.html";
        }else{
            alert("Usuário existente, porém senha inválida.");
        }
    }else{
        alert("Usuário inexistente. Tente outro usuário");
    }
});

btnCadastrar.addEventListener("click", function(){
    window.location.href = "cadastrar.html";

})


