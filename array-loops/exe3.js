const numeros = [15, 22, 14, 32, 10];

let posicao = -1;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === 10) {
    posicao = i;
  }
}

console.log(posicao);
