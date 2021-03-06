import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { 
    alteraCodigo, 
    alteraDescricao, 
    alteraCargaHoraria, 
    alteraPreco, 
    alteraCategoria,
    adicionarCurso
} from '../../../actions/CursoAction';


/*adicionarCurso() {

    //this.props.adicionarCurso;
}*/

class Formulario extends React.Component {
        
    render() {
        return (

            <div className="border-right pl-3 pr-3">
                <h3 className="border-bottom">Formulario</h3>
                <form>
                    <div className="form-group row">
                        <label htmlFor="codigo" className="col-sm-3 col-form-label">Código: </label>
                        <div className="col-sm-5 col-6">
                            <input 
                                type="number" 
                                className="form-control" 
                                id="codigo" 
                                value={this.props.codigo}
                                onChange={ this.props.alteraCodigo }
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="descrição" className="col-sm-3 col-form-label">Descrição: </label>
                        <div className="col-sm-9">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="descricao" 
                                value={this.props.descricao} 
                                onChange={ this.props.alteraDescricao }
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="cargaHoraria" className="col-sm-3 col-form-label">Carga Horária: </label>
                        <div className="col-sm-5 col-6">
                            <input 
                                type="number" 
                                className="form-control" 
                                id="cargaHoraria" 
                                value={this.props.cargaHoraria} 
                                onChange={ this.props.alteraCargaHoraria }
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="preco" className="col-sm-3 col-form-label">Preço:</label>
                        <div className="col-sm-5 col-6">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="preco" 
                                value={this.props.preco}
                                onChange={ this.props.alteraPreco } 
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="categoria" className="col-sm-3 col-form-label">Categoria: </label>
                        <div className="col-sm-6 col-6">
                            <select className="form-control" id="categoria" value={this.props.categoria} onChange={ this.props.alteraCategoria } >
                                <option>INFORMATICA</option>
                                <option>ENGENHARIA</option>
                                <option>ADMINISTRACAO</option>
                                <option>REDES</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <button 
                            className="btn btn-primary ml-3 mb-3"
                            onClick={ this.props.adicionarCurso }
                        >
                            {this.props.textoBotao}
                        </button>
                    </div>
                </form>
            </div>            

        );
    }
}

const mapStateToProps = state => ({
    codigo: state.curso.codigo,
    descricao: state.curso.descricao,
    cargaHoraria: state.curso.cargaHoraria,
    preco: state.curso.preco,
    categoria: state.curso.categoria,
    textoBotao: state.curso.textoBotao,
    lista: state.curso.lista
});


const mapDispatchToProps = dispatch => bindActionCreators({
    alteraCodigo,
    alteraDescricao,
    alteraCargaHoraria,
    alteraPreco,
    alteraCategoria,
    adicionarCurso
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Formulario);