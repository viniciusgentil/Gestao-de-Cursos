import axios from 'axios';
const URL = "http://localhost:3200/api/curso";


export const adicionarCurso = (e) => {

    e.preventDefault();

    return (dispatch) => {
        console.log('curso');

        return {
            type: 'LIMPAR_FORM'
        }
       
    }
}

export const consultarCurso = (curso) => {
    return {
        type: 'BUSCA_CURSO',
        info: curso
    }
}

export const removerCurso = e => {
    return {
        type: 'REMOVE_CURSO',
        info: e.target.value
    }
}

export const listarCursos = () => {

    return (dispatch) => {

        return axios.get(URL)
            .then(response => {
                
                dispatch ({
                    type: 'LISTA_CURSOS',
                    info: response.data
                });

            },
            (err) => {
                console.log(err);
            }
        )
    }
        
}


export const alteraCodigo = e => {
    return {
        type: 'ATUALIZA_CODIGO',
        info: e.target.value
    }
}

export const alteraDescricao = e => {
    return {
        type: 'ATUALIZA_DESCRICAO',
        info: e.target.value
    }
}

export const alteraCargaHoraria = e => {
    return {
        type: 'ATUALIZA_CARGAHORARIA',
        info: e.target.value
    }
}

export const alteraPreco = e => {
    return {
        type: 'ATUALIZA_PRECO',
        info: e.target.value
    }
}

export const alteraCategoria = e => {
    return {
        type: 'ATUALIZA_CATEGORIA',
        info: e.target.value
    }
}
