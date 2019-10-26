import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { 
    alterarData, 
    alterarNome, 
    alterarEmail, 
    alterarAssunto } from '../../../actions/ContatoAction';

class FormContato extends Component {
    render() {
        return (
            <div>
                <h3 className="border-bottom">Formulario</h3>
                <form>
                    <div className="form-group row">
                        <label 
                            htmlFor="data"
                            className="col-sm-3 col-form-label">Data:</label>
                        <div className="col-sm-5 col-6">
                            <input type="date"
                                className="form-control" 
                                id="data"
                                value={this.props.data}
                                onChange={this.props.alterarData} 
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label 
                            htmlFor="nome"
                            className="col-sm-3 col-form-label">Nome:</label>
                        <div className="col-sm-9">
                            <input 
                                type="text"
                                className="form-control" 
                                id="nome"
                                value={this.props.nome} 
                                onChange={this.props.alterarNome}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label 
                            htmlFor="email"
                            className="col-sm-3 col-form-label">Email:</label>
                        <div className="col-sm-9">
                            <input 
                                type="email"
                                className="form-control" 
                                id="email"
                                value={this.props.email} 
                                onChange={this.props.alterarEmail}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label 
                            htmlFor="assunto"
                            className="col-sm-3 col-form-label">Assunto:</label>
                        <div className="col-sm-9">
                            <textarea 
                                className="form-control"
                                id="assunto" 
                                rows="5"
                                value={this.props.assunto}
                                onChange={this.props.alterarAssunto} 
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <button className="btn btn-primary ml-3 mb-3">
                            Adicionar
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    data: state.contato.data,
    nome: state.contato.nome,
    email: state.contato.email,
    assunto: state.contato.assunto
});

const mapDispatchToProps = dispatch => bindActionCreators({
    alterarData,
    alterarNome,
    alterarEmail,
    alterarAssunto
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FormContato);