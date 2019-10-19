import React from 'react';
import axios from 'axios';

import CursoForm from '../form';
import CursoList from '../lista';

const URL = "http://localhost:3200/api/curso";

export default class Cadastro extends React.Component {

    initialState = { data: '' };

    constructor(props) {
        super(props);

        this.state = this.initialState;
    }

    componentWillMount() {
        this.listar();
    }

    listar() {
        axios.get(URL)
            .then( response => this.setState({ ...this.state, data: response.data }) )
    }

    render() {
        return (

            <div className="row border-bottom">
                <div className="col-md-6">
                    <CursoForm />
                </div>
                <div className="col-md-6">
                    <CursoList lista={ this.state.data } />
                </div>
            </div>

        );
    }
}