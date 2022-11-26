
let intrucoes = document.querySelector('#intrucoes')
let aviso = document.querySelector('#aviso')
let pontos = 0//pontos para o placar
let placar = 0//placar

//pergunta
let numQuestao = document.querySelector('#numQuestao')
let pergunta = document.querySelector('#pergunta')

//alternativas
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

//article com a class questoes

let articleQuestoes = document.querySelector('.questoes')
//ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

let q0 = {
    numQuestao: 0,
    pergunta: 'Pergunta',
    alternativaA: "Alternativa A",
    alternativaB: "Alternativa B",
    alternativaC: "Alternativa C",
    correcta: "0",

}
let q1 = {
    numQuestao: 1,
    pergunta: 'Os três mosqueteiros são: Athos, Porthos e ..',
    alternativaA: "Aramis",
    alternativaB: "Dumas",
    alternativaC: "D'Artagnan",
    correcta: "Aramis",

}
let q2 = {
    numQuestao: 2,
    pergunta: 'Qual o primeiro nome do personagem Indiana Jones?',
    alternativaA: "Walton",
    alternativaB: "Henry",
    alternativaC: "Jones",
    correcta: "Henry",

}
let q3 = {
    numQuestao: 3,
    pergunta: 'Qual é o nome da espada de He-Man?',
    alternativaA: "Espada do Poder",
    alternativaB: "Espada de Grayskull",
    alternativaC: "Espada Atlante",
    correcta: "Espada de Grayskull",

}
let q4 = {
    numQuestao: 4,
    pergunta: 'Em De Volta Para o Futuro, qual é a velocidade necessária para viajar no tempo?',
    alternativaA: "88 milhas/hora, ou 141 km/h",
    alternativaB: "124 milhas/hora, ou 200 km/h",
    alternativaC: "100 milhas/hora, ou 160 km/h",
    correcta: "88 milhas/hora, ou 141 km/h",

}
let q5 = {
    numQuestao: 5,
    pergunta: 'Qual é o carro usado por Dean Winchester em Supernatural?',
    alternativaA: "Chevrolet Impala 1966",
    alternativaB: "Chevrolet Impala 1968",
    alternativaC: "Chevrolet Impala 1967",
    correcta: "Chevrolet Impala 1967",

}

//array de objetos com as questões

const questoes = [q0, q1, q2, q3, q4, q5]

let numero = document.querySelector('#numero')
let total = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length) - 1
total.textContent = totalDeQuestoes

//montar a primeira questão p iniciar o quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

//configurar o value inicial da primeira questão
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

//PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao + 'A')
    b.setAttribute('value', nQuestao + 'B')
    c.setAttribute('value', nQuestao + 'C')
}
function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}
function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}
function verificarSeAcertou(nQuestao, resposta) {
    let numeroDaQuestao = nQuestao.value
    let respostaEscolhida = resposta.textContent
    let certa = questoes[numeroDaQuestao].correcta
    if (respostaEscolhida == certa) {
        pontos += 10
    } else {
    }

    //atualizar placar
    placar = pontos
    intrucoes.textContent = "Pontos " + placar

    //bloquear a escolha de opçoes

    bloquearAlternativas()

    setTimeout(function () {
        proxima = numeroDaQuestao + 1
        if (proxima > totalDeQuestoes) {
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()

}
function fimDoJogo() {
    intrucoes.textContent = 'Fim de Jogo'
    numQuestao.textContent = ''
    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent = 'Você conseguiu ' + pontos + ' ' + pont
    aviso.textContent = 'Você conseguiu ' + pontos + ' ' + pont

    a.textContent = ''
    b.textContent = ''
    c.textContent = ''

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    

    //ocultar o article da questão
    articleQuestoes.style.display = 'none'
    setTimeout(function () {
        pontos = 0
        location.reload()
    },2000)

}

