const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamento = "17 mar 2028"

function countDown(){
    const dataLanc = new Date(lancamento)
    const hoje = new Date()

    const segTotal = (dataLanc - hoje)/1000;

    const finalDias = Math.floor(segTotal / 60 / 60 /24); //pega o número inteiro do número
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24; //% operador de módulo que permite trabalhar com o resto da divisão
    const finalMinutos = Math.floor(segTotal / 60 ) % 60;
    const finalSegundos = Math.floor(segTotal ) % 60;

    dia.innerHTML = finalDias
    hora.innerHTML = formatoTempo(finalHoras)
    minuto.innerHTML = formatoTempo(finalMinutos)
    segundo.innerHTML = formatoTempo(finalSegundos)

}

function formatoTempo (tempo) {
     return tempo < 10? `0${tempo}` : tempo;
}

countDown();
setInterval(countDown, 1000)

