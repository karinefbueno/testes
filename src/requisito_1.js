let k = 0;
let soma = 0;
let index = 13;

const sum = () => {
    for (let i = 13; k < index; i += 1) {
        k = k + 1
        soma = soma + k
    }
    return soma;
}

console.log(sum())