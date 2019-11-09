import React from 'react';
import axios from 'axios';

import CursoForm from '../form';
import CursoList from '../lista';

const URL = "http://localhost:3200/api/curso";

export default class Cadastro extends React.Component {
    
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        //this.listar();
    }
    
    adicionarCurso(e) {

        /*e.preventDefault();

        const {_id, codigo, descricao, cargaHoraria, preco, categoria} = this.state;
        const body = { codigo, descricao, cargaHoraria, preco, categoria };

        if(_id && _id.trim() !== '') {

            axios.put(URL + '/' + _id, body)
            .then(_ => {
                this.callBackSuccess("Curso Alterado com Sucesso!");
            })
            .catch(error => this.callBackError() );

        } else {

            axios.post(URL, body)
            .then(_ => {
                this.callBackSuccess("Curso Cadastrado com Sucesso!");
            })
            .catch(error => this.callBackError() );

        }*/
        
    }

    callBackSuccess = function (msg) {

        alert(msg);
        this.setState(this.initialState);
        this.listar();

    }

    callBackError = function (error) {

        const cargaHoraria = error.response.data.errors.cargaHoraria;
        const codigo = error.response.data.errors.codigo;
        const preco = error.response.data.errors.preco;
        const descricao = error.response.data.errors.descricao;
        const categoria = error.response.data.errors.categoria;

        let texto = "";

        if (cargaHoraria) {
            texto += "Carga Horária Inválida \n";
        }

        if (codigo) {
            texto += "Código Inválido \n";
        }

        if (preco) {
            texto += "Preço Inválido \n";
        }

        if (descricao) {
            texto += "Descrição Inválida \n";
        }

        if (categoria) {
            texto += "Categoria Inválida \n";
        }

        alert(texto);

    }

    removerCurso = function (curso) {

        if (window.confirm("Deseja realmente excluir?")) {

            axios.delete(URL + "/" + curso._id)
                .then(response => {

                    alert("Curso Excluído com Sucesso!");
                    this.listar();

                })
                .catch(error => {

                    alert("Erro");

                });

        }

    }

    render() {
        return (

            <div className="row border-bottom">
                <div className="col-md-6">
                    <CursoForm/>
                </div>
                <div className="col-md-6">
                    <CursoList/>
                </div>
            </div>

        );
    }
}


