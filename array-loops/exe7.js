const nomes = ["Ana", "Joana", "Carlos", "amanda"];

let arr = [];
for (let nome of nomes) {
  if (nome[0] === "A" || nome[0] === "a") {
    arr.push(nome)
  }
}

console.log(arr)