const prova = {
  aluno: "João",
  materia: "Português",
  valor: 10,
  questoes: [
      {
          resposta: "a",
          correta: "b"
      },
      {
          resposta: "c",
          correta: "c"
      },
      {
          resposta: "e",
          correta: "b"
      },
      {
          resposta: "b",
          correta: "b"
      },
      {
          resposta: "c",
          correta: "c"
      }
  ]
}


function corrigirProva (prova) {
  let acertos = 0;
  prova.questoes.forEach((questao) => {
    if (questao.resposta === questao.correta) {
      acertos++;
    }
  });
  console.log(`O aluno ${prova.aluno} acertou ${acertos} questões.`);
}

corrigirProva(prova)