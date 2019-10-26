import axios from 'axios';
const URL = "http://localhost:3200/api/contato";

export const alterarData = e => {
    return {
        type: 'ATUALIZA_DATA',
        info: e.target.value
    }
}

export const alterarNome = e => {
    return {
        type: 'ATUALIZA_NOME',
        info: e.target.value
    }
}

export const alterarEmail = e => {
    return {
        type: 'ATUALIZA_EMAIL',
        info: e.target.value
    }
}

export const alterarAssunto = e => {
    return {
        type: 'ATUALIZA_ASSUNTO',
        info: e.target.value
    }
}

export const adicionaContato = (data, nome, email, assunto) => {
    
    axios.post(URL, {data, nome, email, assunto});
    
    return {
        type: 'LIMPAR_FORM'
    }
}