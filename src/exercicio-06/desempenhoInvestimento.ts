function solucao(resultados: number[]) {
  let lucro = 0
  let prejuizo = 0
  for (const valor of resultados) {
    if (valor > 0) {
      lucro += 1
    } else if (valor < 0) {
      prejuizo += 1
    }
  }
  if (lucro > prejuizo) {
    return 'POSITIVO'
  } else if (prejuizo > lucro) {
    return 'NEGATIVO'
  }
  return 'NEUTRO'
}
export default solucao;
