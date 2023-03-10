//Preload
const preload = document.querySelector('.preload'); 
const cabeçalho = document.querySelector('.cabeçalho'); 
const contatos  = document.querySelector('.contatos'); 
const container1 = document.querySelector('.container1'); 

function getPreload () {

    cabeçalho.style.display = "none"; 
    contatos.style.display = "none"; 
    container1.style.display = "none"; 

    setTimeout(() => {
        preload.style.display = "none"; 
        cabeçalho.style.display = "block";
        contatos.style.display = "block";
        container1.style.display = "block"; 
    },0); 
}

getPreload(); 
