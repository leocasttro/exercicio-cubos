const original = [5, 7, 13, 17, 26, 34, 118, 245];

let modificado = [];
for (let numero of original) {
  if (numero >= 10 && numero <= 20 ) {
    modificado.push(numero)
  } else if (numero >= 100) {
    modificado.push(numero)
  }
}

console.log(modificado)