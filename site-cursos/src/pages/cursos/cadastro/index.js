import React from 'react';
import axios from 'axios';

import CursoForm from '../form';
import CursoList from '../lista';

const URL = "http://localhost:3200/api/curso";

export default class Cadastro extends React.Component {

    initialState = { 
        data: '',
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
    }

    componentWillMount() {
        this.listar();
    }

    listar() {
        axios.get(URL)
            .then( response => this.setState({ ...this.state, data: response.data }) )
    }

    adicionarCurso(e) {
        e.preventDefault();

        const codigo = this.state.codigo;
        const descricao = this.state.descricao;
        const cargaHoraria = this.state.cargaHoraria;
        const preco = this.state.preco;
        const categoria = this.state.categoria;

        const body = {codigo, descricao, cargaHoraria, preco, categoria};

        axios.post(URL, body)
            .then( _ => {
                
                alert("Curso Cadastrado com Sucesso!");
                this.listar();
                this.setState({
                    data: '',
                    codigo: 0,
                    descricao: '',
                    cargaHoraria: '',
                    preco: 0.0,
                    categoria: 'REDES'
                });

            })
            .catch( error => {

                const cargaHoraria = error.response.data.errors.cargaHoraria;
                const codigo = error.response.data.errors.codigo;
                const preco = error.response.data.errors.preco;
                const descricao = error.response.data.errors.descricao;
                const categoria = error.response.data.errors.categoria;

                let texto = "";

                if(cargaHoraria) {
                    texto += "Carga Horária Inválida \n";
                }

                if(codigo) {
                    texto += "Código Inválido \n";
                }

                if(preco) {
                    texto += "Preço Inválido \n";
                }

                if(descricao) {
                    texto += "Descrição Inválida \n";
                }

                if(categoria) {
                    texto += "Categoria Inválida \n";
                }

                alert(texto);
            });
    }

    removerCurso = function(curso) {
        
        if(window.confirm("Deseja realmente excluir?")) {

            axios.delete(URL + "/" + curso._id)
                .then( response => {

                    alert("Curso Excluído com Sucesso!");
                    this.listar();

                })
                .catch(error => {

                    alert("Erro");

                });

        }
        
    }

    alteraCodigo (codigo) {
        this.setState({ codigo });
    }

    alteraDescricao (descricao) {
        this.setState({ descricao });
    }

    alteraCargaHoraria (cargaHoraria) {
        this.setState({ cargaHoraria });
    }

    alteraPreco (preco) {
        this.setState({ preco });
    }

    alteraCategoria (categoria) {
        this.setState({ categoria });
    }

    render() {
        return (

            <div className="row border-bottom">
                <div className="col-md-6">
                    <CursoForm 
                        categoria={ this.state.categoria }
                        adicionarCurso={ this.adicionarCurso }
                        alteraCodigo={ this.alteraCodigo }
                        alteraDescricao={ this.alteraDescricao }
                        alteraCargaHoraria={ this.alteraCargaHoraria }
                        alteraPreco={ this.alteraPreco }
                        alteraCategoria={ this.alteraCategoria }
                    />
                </div>
                <div className="col-md-6">
                    <CursoList 
                        lista={ this.state.data } 
                        removerCurso={ this.removerCurso }
                    />
                </div>
            </div>

        );
    }
}