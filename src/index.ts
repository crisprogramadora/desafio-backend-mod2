type TDadosMala = {
    nome: string;
    pesoMala: number;
};
const pagante: number = 23
let listaPagantes: string[] = ['']
function solucao(dadosPassageiros: TDadosMala[]) {
    for (let pessoa of dadosPassageiros) {
        if (pessoa.pesoMala < pagante) {
            return "SEM PASSAGEIROS"
        } else {
            listaPagantes = [`${pessoa.nome[0]} - ${pessoa.nome[1]}`]
        }
        return listaPagantes
    }
}
export default solucao;
