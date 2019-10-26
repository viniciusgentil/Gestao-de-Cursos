import React, { Component } from 'react';
import Cabecalho from '../../components/menu/Cabecalho';
import ContatoForm from './form';

export default class Contato extends Component {
    render() {
        return (
            
            <div className="container">
                <Cabecalho titulo="Contato" subtitulo="Gerenciamento dos contatos" />
                <ContatoForm />
            </div>

        )
    }
}