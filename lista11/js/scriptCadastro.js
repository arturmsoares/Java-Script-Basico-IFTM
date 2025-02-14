var txtUser = document.getElementById("txtUser");
var txtPwd = document.getElementById("txtPwd");
var txtConfirmPwd = document.getElementById("txtConfirmPwd");
var btnCadastrar = document.getElementById("btnCadastrar");
var btnEntrar = document.getElementById("btnEntrar");
var introSound = document.getElementById("introSound");
var alertSound = document.getElementById("alertSound"); 

document.body.addEventListener("click", function () {
    introSound.play();
});

function checkUser(users, username) {
    return users.some(user => user.username === username);
}

btnCadastrar.addEventListener("click", function () {

    if (!txtUser.value) {
        alertWifi("Usuário em Branco! Informe um usuário", false, 5, "img/logo.png", 30, "");
        return;
    }

    var newUser = { username: txtUser.value, password: txtPwd.value };

    if (txtPwd.value.length < 4) {
        alertWifi("Senha inválida. Informe uma senha contendo pelo menos 4 caracteres.", false, 5, "img/logo.png", 30, "");
        return;
    } else if (txtPwd.value !== txtConfirmPwd.value) {
        alertWifi("Senha e Confirmar senha diferentes. Tente novamente", false, 5, "img/logo.png", 30, "");
        return;
    }

    var users = JSON.parse(localStorage.getItem("users")) || []; // Garante que seja um array

    if (checkUser(users, newUser.username)) {
        alertWifi("Usuário existente. Tente outro", false, 5, "img/logo.png", 30, "");
    } else {
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users)); // Salva corretamente a lista de usuários
        alertSound.play();
        alertWifi("Usuário cadastrado com sucesso!", false, 5, "img/logo.png", 30, "");
    }
});

btnEntrar.addEventListener("click", function () {
    window.location.href = "index.html";
});
