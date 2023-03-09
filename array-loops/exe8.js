const numeros = [20, 4, 1, 8, 11, 7, 5];

let maior = numeros[0];
for (let numero of numeros) {
  if (numero > maior) {
    maior = numero
  }
}

console.log(maior);