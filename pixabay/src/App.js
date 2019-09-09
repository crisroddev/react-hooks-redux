import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Buscador from './components/Buscador';

function App() {

  const [ busqueda, setBusqueda ] = useState('');
  const [ imagenes, guardarImagenes ] = useState([]);

  useEffect(() => {

    // No busque si no hago submit
    if(busqueda === '') return;

    const consultarApi = async () => {
      const imagenesPorPagina = 30;
      const key = '13572348-e998cd81f08f11243f328ed57';
      const url =`https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      
      guardarImagenes(resultado.hits)
    } 
    consultarApi();
  }, [busqueda])



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
