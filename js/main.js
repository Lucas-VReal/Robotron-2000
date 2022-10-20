const controle = document.querySelectorAll("[data-controle]")

const estatisticas = document.querySelectorAll("[data-estatisticas]");

const robotron = document.querySelector("#robotron");

var colors = ["img/amarelo.png", "img/vermelho.png", "img/rosa.png", "img/preto.png", "img/azul.png", "img/branco.png"];

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => { 
    elemento.addEventListener("click", (evento) => {
        var soma = manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca, soma);
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")
    if(operacao == "-" && peca.value > 0) {
        peca.value--;
        return false;
    } else if(operacao == "+") {
        peca.value++;
        return true;
    }
}

function atualizaEstatisticas(peca, soma){

    estatisticas.forEach( (elemento) => {
        if (soma == true){
          elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatisticas];
        } else if (soma == false){
        elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatisticas];
        }else{
            console.log("Não pode ser menor que 0");
        }
    })


}

function trocaImagem(cor){
    document.querySelector(".robo").src="img/" + cor + ".png";
 }
