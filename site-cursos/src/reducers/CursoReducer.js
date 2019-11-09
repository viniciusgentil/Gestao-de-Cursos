const INICIAL_STATE = {
    codigo: '123',
    descricao: 'Vinicius',
    cargaHoraria: 20.2,
    preco: 150.50,
    categoria: 'INFORMATICA',
    textoBotao: 'Adicionar',
    lista: [{_id: '-1', codigo: 123, descricao: 'Curso teste'}]
}

export default (state = INICIAL_STATE, action) => {

    switch(action.type) {
        case 'ATUALIZA_CODIGO':
            return { ...state, codigo: action.info };
        case 'ATUALIZA_DESCRICAO':
            return { ...state, descricao: action.info };
        case 'ATUALIZA_CARGAHORARIA':
            return { ...state, cargaHoraria: action.info };
        case 'ATUALIZA_PRECO':
            return { ...state, preco: action.info };
        case 'ATUALIZA_CATEGORIA':
            return { ...state, categoria: action.info };
        case 'LISTA_CURSOS':
            return { ...state, lista: action.info };
        case 'BUSCA_CURSO':
            return { 
                ...state, 
                codigo: action.info.codigo,
                descricao: action.info.descricao,
                cargaHoraria: action.info.cargaHoraria,
                preco: action.info.preco,
                categoria: action.info.categoria,
                textoBotao: 'Editar'
            };
        case 'LIMPAR_FORM':
            return INICIAL_STATE;
        default:
            return state;
    }

}


