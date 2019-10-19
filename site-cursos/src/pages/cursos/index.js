import React, { Component } from 'react';
import Cabecalho from '../../components/menu/Cabecalho';

export default class Curso extends Component {
    render() {
        return (
            
            <div className="container">
                <Cabecalho titulo="Cursos" subtitulo="Gerenciamento dos cursos" />
            </div>
        )
    }
}