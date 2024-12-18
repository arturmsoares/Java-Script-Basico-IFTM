window.addEventListener("DOMContentLoaded", function(){

    var btnPerfil = document.getElementById("btnPerfil");
    var instrucao = document.getElementById("instrucao");
    var imgCarro = this.document.getElementById("imgCarro");
    var perfil = JSON.parse(localStorage.getItem("perfil"));
    var carros = {
        "shopping": [
            {nome: "Civic", fabricante: "Honda", potencia: "150 cv", garantia: "3 anos", consumo: "9,7 km/l", imagem: "civic.jpg"},
            {nome: "Corolla", fabricante: "Toyota", potencia: "144 cv", garantia: "3 anos", consumo: "10,6 km/l", imagem: "corolla.jpg"}
        ],
        "natureza": [
            {nome: "Troller", fabricante: "Ford", potencia: "200 cv", garantia: "3 anos", consumo: "7,7 km/l", imagem: "troller.jpg"},
            {nome: "Wrangler", fabricante: "Jeep", potencia: "199 cv", garantia: "2 anos", consumo: "3,1 km/l", imagem: "wrangler.jpg" }
        ]
    };
    
    
    instrucao.innerHTML=`${perfil.nome}, veja as opções para seu perfil:`
    
    // function slideShow (){
    //     imgCarro.src = 
    // }

    btnPerfil.addEventListener("click", function(){
        window.location.href="index.html";  
    })
    

  


    })





