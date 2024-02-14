const dados = require("./readFile")

const valores = dados
    .filter(({ valor }) => valor !== 0)
    .map(({ valor }) => valor);

const soma = valores.reduce((acc, valor) => {
    return (acc + valor)
}, 0)

const media = soma / valores.length;

const valoresMaioresMedia = valores.filter((valor) => {
    return valor > media
})

const valorMaximo = Math.max(...valores)
const valorMinimo = Math.min(...valores)

console.log(`Menor valor de faturamento ocorrido em um dia do mês = R$ ${valorMinimo}`)
console.log(`Maior valor de faturamento ocorrido em um dia do mês R$ ${valorMaximo}`)
console.log(`Número de dias no mês em que o valor de faturamento diário foi superior à média mensal = ${valoresMaioresMedia.length}`);