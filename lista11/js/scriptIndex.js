window.addEventListener("DOMContentLoaded", function () {

    var txtUser = document.getElementById("txtUser");
    var txtPwd = document.getElementById("txtPwd");
    var btnLogin = document.getElementById("btnLogin");
    var btnCadastrar = document.getElementById("btnCadastrar");
    var introSound = document.getElementById("introSound");
    var alertSound = document.getElementById("alertSound");

    document.body.addEventListener("click", function () {
        introSound.play();
    });

    function checkUser(users, username) {
        for (var i = 0; i < users.length; i++) {
            if (username === users[i].username) {
                return true;
            }
        }
        return false;
    }

    // Verifica se a senha está correta para um usuário
    function checkPwd(users, password) {
        for (var i = 0; i < users.length; i++) {
            if (password === users[i].password) {
                return true;
            }
        }
        return false;
    }

    btnLogin.addEventListener("click", function () {

        if (!txtUser.value || !txtPwd.value) {
            alertSound.play();
            alertWifi("Preencha todos os campos!", false, 5, "img/logo.png", 30, "");
            return;
        }

        var cadUser = { username: txtUser.value, password: txtPwd.value };
        var users = localStorage.getItem("users");
        users = JSON.parse(users);

        if (!users || users.length === 0) {
            alertWifi("Usuário inexistente!", false, 5, "img/logo.png", 30, "");
            alertSound.play();
            return;
        }

        if (checkUser(users, cadUser.username)) {
            if (checkPwd(users, cadUser.password)) {
                window.location.href = "jogo.html";
            } else {
                alertWifi("Senha incorreta!", false, 5, "img/logo.png", 30, "");
                alertSound.play();
                return;
            }
        } else {
            alertWifi("Usuário inexistente!", false, 5, "img/logo.png", 30, "");
            alertSound.play();
            return;
        }
    });

    btnCadastrar.addEventListener("click", function () {
        window.location.href = "cadastro.html";
    });

});
