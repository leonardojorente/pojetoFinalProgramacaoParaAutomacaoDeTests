
function geradorDeTagsDeIdentificacao(nomedeDoAnimal){
    return nomedeDoAnimal.toUpperCase()
}

function verificarSePodeSerAdotado(idadeDoAnimal, porteDoAnimal, idadeMinimaParaAdocao = 1){
    let podeSerAdotado

    switch (porteDoAnimal) {
        case 'P':
            //pequeno porte, pode ser adotado independente da idade
            podeSerAdotado = true
            break
        case 'M':
        case 'G':
            podeSerAdotado = idadeDoAnimal >= idadeMinimaParaAdocao ? true : false
            break 
        default:
            //porte invalido
            podeSerAdotado = false
    }

    return podeSerAdotado
}

function calcularConsumoDeRacao(nomdeDoAnimal, numeroDeDias, pesoDoAnimal){
    const gramasPorDia = pesoDoAnimal * 300
    const consumo = gramasPorDia * numeroDeDias
    console.log(`Nome do animal: ${nomdeDoAnimal}`)

    return consumo
}

function decidirTipoDeAtividadePorPorte(porte){
let atividade

switch (porte) {
  case 'pequeno':
    atividade = 'brincar dentro de casa'
    break
  case 'médio':
    atividade = 'caminhada no quarteirão'
    break 
  case 'grande':
    atividade = 'correr no parque'
    break 
  default:
    atividade = 'porte inválido'
}

return atividade
}

async function buscarDadoAsync(){
    return 'Pipoca'
}

export{
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}