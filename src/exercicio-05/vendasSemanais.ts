function solucao(vendasDiarias: number[]) {
  let contador = 0
  for (let valor of vendasDiarias) {
    contador += valor
  }
  return contador
}
export default solucao;
