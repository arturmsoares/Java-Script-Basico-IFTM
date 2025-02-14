window.addEventListener("DOMContentLoaded", function(){

    var txtUser = document.getElementById("txtUser");
    var txtPwd = document.getElementById("txtPwd");
    var btnLogin = document.getElementById("btnLogin");
    var btnCadastrar = document.getElementById("btnCadastrar");
    var introSound = document.getElementById("introSound");
    var alertSound = document.getElementById("alertSound");


    document.body.addEventListener("click", function() {
        introSound.play();
    });
    
    // retorno: true (exite o user) ou false (não existe)
    function checkUser(users, username) {
        for (var i = 0; i < users.length; i++) {
            if (username === users[i].username) {
                return true; 
            }
        }
        return false;
    }
    
    function checkPwd(users, password) {
        for (var i = 0; i < users.length; i++) {
            if (password === users[i].password) {
                return true; 
            }
        }
        return false;
    }
    
    btnLogin.addEventListener("click", function(){ 
        
        if (!txtUser.value || !txtPwd.value) {
            alertSound.play();
            alertWifi("Preencha todos os campos!", false, 5, "img/logo.png", 30, "");
            return;
        }

        var cadUser = {username: txtUser.value, password: txtPwd.value};
        var users = localStorage.getItem("users");
        users = JSON.parse(users);//transforma para objeto
        if(checkUser(users, cadUser.username)){
            if(checkPwd(users, cadUser.password)){
                window.location.href = "jogo.html";
            }else{
                alertSound.play();
                alertWifi("Senha incorreta!", false, 5, "img/logo.png", 30, "");
                return;

            }
        }else{
            alertSound.play();
            alertWifi("Usuário inexistente!", false, 5, "img/logo.png", 30, "");
            return;
        }
    });
    
    btnCadastrar.addEventListener("click", function(){
        window.location.href = "cadastro.html";
    
    })
    
    

})