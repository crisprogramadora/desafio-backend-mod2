type TDados = {
  pedido: string;
  quantidade: number;
  estimativaEntrega: number;
};

function solucao(dadosEntrega: TDados, diaAtual: number) {
  if (diaAtual > dadosEntrega.estimativaEntrega) {
    return 'ENTREGA ATRASADA';
  }
  return 'ENTREGA NAO ATRASADA';
}
export default solucao;