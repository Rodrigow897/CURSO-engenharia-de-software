var setaDireita = document.getElementById('seta-direita')
var setaEsquerda = document.getElementById('seta-esquerda')
var leonardo = document.getElementById('leonardo')
var samanta = document.getElementById('samanta')
var bruna = document.getElementById('bruna')

function RolarParaDireita() {
    leonardo.style = "display: none"
    bruna.style = "display:flex"
    setaEsquerda.style = "display:flex"
    setaDireita.style = "display:none"

}