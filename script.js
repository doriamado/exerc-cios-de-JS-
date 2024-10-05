// declaracao de variavel
let texto = window.prompt("digite o seu nome: ");

// Adicionar conteudo dentro de um html
document.getElementById("titulo").innerHTML = "Meu nome é "+texto;

// instansia o objeto botao
const btnTrocaCor = document.getElementById("trocaCor");
let caixaTexto = document.getElementById('caixa');

// evento de clique
btnTrocaCor.addEventListener("click", () => {
    // captura o nome do conteudo
    let caixaTexto = document.getElementById('caixa');

    // valida o nome da cor
    if( caixaTexto.className === "azul" ){
        caixaTexto.classList.add('vermelho');
        caixaTexto.classList.remove('azul');
    }else{
        caixaTexto.classList.add('azul');
        caixaTexto.classList.remove('vermelho');
    }

    // exibe no console
    console.log(caixaTexto.className);
});

// troca texto
const btnTrocaTexto = document.getElementById("trocaTexto");
btnTrocaTexto.addEventListener("click", () => {
    if( caixaTexto.innerText === "Abacaxi" ){
        document.getElementById("caixa").innerHTML = "Maçã";
    }else{
        document.getElementById("caixa").innerHTML = "Abacaxi";
    }
});

// soma os valores
const btnSoma = document.getElementById("somar");
btnSoma.addEventListener("click", () => {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let soma = parseInt(numero1) + parseInt(numero2);
    console.log(soma);
});    

// adiciona bolinhas
const btnBolinhas = document.getElementById("addBolinhas");
let total = 0; // contador de bolinhas
let bolinhas = ""; // conteudo das bolinhas
let bola = '<div class="bolinha"></div>'; // conteudo para adicionar

// acao de clique
btnBolinhas.addEventListener("click", () => {
    total = total +1;
    bolinhas = "";
    for (let index = 0; index < total; index++) {
        bolinhas = bolinhas+bola;
    }
    document.getElementById("agrupaBolinhas").innerHTML = bolinhas;
});

//localiza
const btnlocalizar = document.getElementById("localiza");
btnlocalizar.addEventListener("click", () => {
// funcao para exibir a posicao
function showPosition(position) {
let latitude = position.coords.latitude;
let longitude = position.coords.longitude;
 
console.log( "Latitude: " + latitude + "longitude: " + longitude);
}
let coordenadas = navigator.geolocation.getCurrentPosition(showPosition);
});