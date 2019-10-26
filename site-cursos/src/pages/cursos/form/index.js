import React from 'react';

export default class Formulario extends React.Component {
    
    /*
    initialState = {
        
    }

    constructor(props) {
        super(props);

        this.state = this.initialState;
    }
    */
        
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
                                onChange={ e => this.props.alteraCodigo(e.target.value) }
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
                                onChange={ e => this.props.alteraDescricao(e.target.value) }
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
                                onChange={ e => this.props.alteraCargaHoraria(e.target.value) }
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
                                onChange={ e => this.props.alteraPreco(e.target.value) } 
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="categoria" className="col-sm-3 col-form-label">Categoria: </label>
                        <div className="col-sm-6 col-6">
                            <select className="form-control" id="categoria" value={this.props.categoria} onChange={ e => this.props.alteraCategoria(e.target.value) } >
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
                            {this.props.txtBotao}
                        </button>
                    </div>
                </form>
            </div>            

        );
    }
}