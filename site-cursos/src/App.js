import React from 'react';

import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/jquery/dist/jquery.min';
import '../node_modules/popper.js/dist/umd/popper.min';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


import Cursos from './pages/cursos'
import Contato from './pages/contato'
import Menu from './components/menu'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Menu></Menu>
        <Cursos></Cursos>
        <Contato></Contato>

      </header>
    </div>
  );
}

export default App;
