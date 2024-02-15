const sp = 67836.43;
const rj = 36678.66;
const mg = 29229.88;
const es = 27165.48;
const outros = 19849.53;
const total = sp + rj + mg + es + outros;

const percentualPorEstado = () => {
    return `
 **** Percentual de representação por estado **********   
 São Paulo = ${(sp / total * 100).toFixed(2)} %
 Rio de Janeiro = ${(rj / total * 100).toFixed(2)} %
 Minas Gerais = ${(mg / total * 100).toFixed(2)} %
 Espirito Santo = ${(es / total * 100).toFixed(2)} %
 Outros = ${(outros / total * 100).toFixed(2)} %
`
};

console.log(percentualPorEstado())