const montante = 90000
const capitalIni = 60000
const meses = 24 

let taxJuros = Math.pow(montante / capitalIni, (1/meses)) - 1

console.log(taxJuros)