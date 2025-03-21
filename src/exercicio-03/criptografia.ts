function solucao(senhaDigitada: string, senhaCriptografada: string) {
  if ("cubos" + senhaDigitada + "cubos" === senhaCriptografada) {
    return "LOGIN AUTORIZADO"
  }
  return "LOGIN NAO AUTORIZADO"
}
export default solucao;
