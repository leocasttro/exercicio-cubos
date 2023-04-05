const carrinho = {
  nomeDoCliente: "Guido Bernal",
  produtos: [
      {
          id: 1,
          nome: "Camisa",
          qtd: 3,
          precoUnit: 3000
      },
      {
          id: 2,
          nome: "Bermuda",
          qtd: 2,
          precoUnit: 5000
      }
  ]
}

function imprimirResumoDoCarrinho(carrinho) {
  let total = 0
  carrinho.produtos.forEach((produto) => {
    if (produto.qtd > 0) {
      produto.qtd
    }
  })
  console.log(total)
}

imprimirResumoDoCarrinho(carrinho)