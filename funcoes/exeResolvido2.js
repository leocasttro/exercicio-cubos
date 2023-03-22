function faixaEtaria(idade) {
  if (idade <= 21) {
    return 'Jovem'
  } else if (idade >= 22 && idade <= 65) {
    return 'Adulto'
  } else {
    return 'Idoso'
  }
}

console.log(faixaEtaria(21));