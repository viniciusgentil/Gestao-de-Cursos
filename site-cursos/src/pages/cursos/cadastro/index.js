import React from 'react';
import axios from 'axios';

import CursoForm from '../form';
import CursoList from '../lista';

const URL = "http://localhost:3200/api/curso";

export default class Cadastro extends React.Component {

    initialState = {
        data: '',
        _id: '',
        codigo: 0,
        descricao: '',
        cargaHoraria: '',
        preco: 0.0,
        categoria: 'REDES'
    };

    constructor(props) {
        super(props);

        this.state = this.initialState;

        this.alteraCodigo = this.alteraCodigo.bind(this);
        this.alteraDescricao = this.alteraDescricao.bind(this);
        this.alteraCargaHoraria = this.alteraCargaHoraria.bind(this);
        this.alteraPreco = this.alteraPreco.bind(this);
        this.alteraCategoria = this.alteraCategoria.bind(this);
        this.adicionarCurso = this.adicionarCurso.bind(this);
        this.removerCurso = this.removerCurso.bind(this);
        this.consultarCurso = this.consultarCurso.bind(this);
    }

    componentWillMount() {
        this.listar();
    }

    listar() {
        axios.get(URL)
            .then(response => this.setState({ ...this.state, data: response.data }))
    }

    adicionarCurso(e) {

        e.preventDefault();

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

        }
        
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

    consultarCurso = function (curso) {

        this.setState({
            ...this.state,
            _id: curso._id,
            codigo: curso.codigo,
            descricao: curso.descricao,
            cargaHoraria: curso.cargaHoraria,
            preco: curso.preco,
            categoria: curso.categoria
        });

    }

    alteraCodigo(codigo) {
        this.setState({ codigo });
    }

    alteraDescricao(descricao) {
        this.setState({ descricao });
    }

    alteraCargaHoraria(cargaHoraria) {
        this.setState({ cargaHoraria });
    }

    alteraPreco(preco) {
        this.setState({ preco });
    }

    alteraCategoria(categoria) {
        this.setState({ categoria });
    }

    render() {
        return (

            <div className="row border-bottom">
                <div className="col-md-6">
                    <CursoForm
                        codigo={this.state.codigo}
                        descricao={this.state.descricao}
                        cargaHoraria={this.state.cargaHoraria}
                        preco={this.state.preco}
                        categoria={this.state.categoria}
                        adicionarCurso={this.adicionarCurso}
                        alteraCodigo={this.alteraCodigo}
                        alteraDescricao={this.alteraDescricao}
                        alteraCargaHoraria={this.alteraCargaHoraria}
                        alteraPreco={this.alteraPreco}
                        alteraCategoria={this.alteraCategoria}
                        txtBotao={this.state._id && this.state._id !== '' ? "Atualizar" : "Adicionar"}
                    />
                </div>
                <div className="col-md-6">
                    <CursoList
                        lista={this.state.data}
                        removerCurso={this.removerCurso}
                        consultarCurso={this.consultarCurso}
                    />
                </div>
            </div>

        );
    }
}