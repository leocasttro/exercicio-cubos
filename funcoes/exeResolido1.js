const pessoa = {
  nome: 'Wanessa',
  idade: 22,
  profissao: 'Esteticista',
  altura: 1.63
}

function apresenta(pessoa) {
  let faixa = ''
  if (pessoa.idade < 25) {
    faixa = 'joven'
  }
  console.log(`Olá meu nome é ${pessoa.nome}, sou um(a) ${faixa}
  de ${pessoa.idade} anos, ${pessoa.altura}m e sou ${pessoa.profissao}`)
}

apresenta(pessoa)