import React from 'react';

export default class Lista extends React.Component {
    render() {

        const exibirLinhas = () => {
            const cursos = this.props.lista || [];  // Se lista for nula, retorna array vazio
            return cursos.map(curso => (
                <tr key={curso._id}>
                    <td>{curso.codigo}</td>
                    <td>{curso.descricao}</td>
                    <td>
                        <button 
                            className="btn btn-success"
                            onClick={ () => this.props.consultarCurso(curso) }
                        >
                            <i className="fa fa-check"></i>
                        </button>
                        &nbsp; 
                        <button 
                            className="btn btn-danger"
                            onClick={ () => this.props.removerCurso(curso) }
                        >
                            <i className="fa fa-trash-o"></i>
                        </button>
                    </td>
                </tr>
            ));
        }

        return (

            <div>
                <h3>Lista de Cursos</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Descrição</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        {exibirLinhas()}
                    </tbody>
                </table>
            </div>

        );
    }
}