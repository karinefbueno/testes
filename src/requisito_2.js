let num = 96;

const isFibonacci = (numero) => {
    let numA = 0;
    let numB = 1;
    if (numero === 0) return true;
    for (let i = 0; numB <= numero; i++) {
        if (numB === numero) {
            return true;
        }
        let temp = numB;
        numB = numA + numB;
        numA = temp;
    }
    return false;
};

if (isFibonacci(num)) {
    console.log(`O número ${num} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${num} não pertence à sequência de Fibonacci.`);
};
