var boy = document.getElementById("boy");
var textBoy = document.getElementById("textBoy");
var personagem = {
    alegre: {img:"img/alegre.png", msg:", seja bem-vindo!"},
    assustado: {img:"img/assustado.png", msg:"O que você quer?"},
    nervoso: {img:"img/nervoso.png", msg:"Não me faça perder o meu tempo!!!"},
    pensativo: {img:"img/pensativo.png", msg:"zzzzzzz!"}
}

function changeBoy(personagem){
    boy.src = personagem.img;
    textBoy.innerHTML = personagem.msg;
}

boy.addEventListener("mouseenter", function(){
    changeBoy(personagem.assustado);
})


boy.addEventListener("click", function(){
    
    var nome = prompt("Qual o seu nome?");

        if(!nome){
            changeBoy(personagem.nervoso);
            boy.classList.add("shake");

            boy.addEventListener("animationend", function() {
                boy.classList.remove("shake");
            }, { once: true });
        }
        else{
            personagem.alegre.msg = nome + personagem.alegre.msg;
            changeBoy(personagem.alegre);
            personagem.alegre.msg = ", seja bem-vindo!";

            boy.classList.add("approve");

            boy.addEventListener("animationend", function() {
                boy.classList.remove("approve");
            }, { once: true });

        }
                
})

boy.addEventListener("mouseout", function(){
    changeBoy(personagem.pensativo);
})


var btnSair = document.getElementById("btnSair");

btnSair.addEventListener("click", function(){
    var sair = confirm("Deseja realmente sair do jogo?");
    if(sair){
        window.location.href = "index.html"
    }
})
