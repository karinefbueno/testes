const fs = require('fs');

const arquivo = 'data.json'; // Remova o caminho completo do arquivo

const data = fs.readFileSync(arquivo, 'utf8');

const dados = JSON.parse(data);
console.log(dados);

module.exports = dados;
