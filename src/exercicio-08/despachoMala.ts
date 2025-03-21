type TDadosMala = {
  nome: string;
  pesoMala: number;
};

function solucao(dadosPassageiros: TDadosMala[]) {
  let listaPagantes: string[] = [];
  for (const pessoa of dadosPassageiros) {
    if (pessoa.pesoMala > 23) {
      listaPagantes.push(pessoa.nome);
    }
  }
  if (listaPagantes.length > 0) {
    return listaPagantes.join(" - ");
  }
  return "SEM PASSAGEIROS";
}
export default solucao;

