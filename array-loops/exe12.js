const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];


for (let i = 5; i > filaDeDentro.length; ) {
  filaDeDentro.push(filaDeFora[0]);
  filaDeFora.shift()
}

console.log(filaDeDentro)
console.log(filaDeFora)