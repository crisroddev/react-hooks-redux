import React from 'react';
import Buscador from './components/Buscador';

function App() {

  const [ busqueda, setBusqueda ] = useState('');

  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">
            Buscador de Imagenes
        </p>
        <Buscador
          setBusqueda={setBusqueda}
        />
      </div>
      <div className="row justify-content-center">
      </div>
    </div>
  );
}

export default App;
