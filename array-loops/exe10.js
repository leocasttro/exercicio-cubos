const numeros = [8, 11, 4, 1];

let maiorDiferenca = 0;

for (let i = 0; i < numeros.length; i++) {
  for (let j = i + 1; j < numeros.length; j++) {
    let diferenca = numeros[i] - numeros[j];
    if (diferenca > maiorDiferenca) {
      maiorDiferenca = diferenca;
    }
  }
}

console.log(maiorDiferenca)