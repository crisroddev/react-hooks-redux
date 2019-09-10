import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Buscador from './components/Buscador';
import ListadoImagenes from './components/ListadoImagenes';

function App() {

  const [ busqueda, setBusqueda ] = useState('');
  const [ imagenes, guardarImagenes ] = useState([]);
  const [ paginaActual, setPaginaActual ] = useState(1);
  const [ totalPaginas, setTotalPaginas ] = useState(1);

  useEffect(() => {

    // No busque si no hago submit
    if(busqueda === '') return;

    const consultarApi = async () => {
      const imagenesPorPagina = 30;
      const key = '13572348-e998cd81f08f11243f328ed57';
      const url =`https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaActual}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      
      guardarImagenes(resultado.hits)

      // Calcular Total de Paginas Redondeado Hacia Arriba
      const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenesPorPagina);
      setTotalPaginas(calcularTotalPaginas);

      // Llevar ausuario hacia parte superior
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({behavior: 'smooth', block: 'start'});
    } 
    consultarApi();
  }, [busqueda, paginaActual])

  const paginaAnterior = () => {
    let nuevaPaginaAnterior = paginaActual - 1;
    
    // Colocarlo en el State
    setPaginaActual(nuevaPaginaAnterior);
  }

  const paginaSiguiente = () => {
    let nuevaPaginaSiguiente = paginaActual + 1;

    // Colocarlo en State
    setPaginaActual(nuevaPaginaSiguiente)
  }

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
        <ListadoImagenes
          imagenes={imagenes}
        />
        { (paginaActual === 1) ? 
          null : (
            <button
              onClick={paginaAnterior}
              type="button"
              className="btn btn-info mr-1">
                Anterior &laquo;
        </button>
          )
        }
        
        {( paginaActual === totalPaginas ) ? 
          null : (
            <button
              onClick={paginaSiguiente}
              type="button"
              className="btn btn-info">
                Siguiente &raquo;
        </button>
          )
        }
      </div>
    </div>
  );
}

export default App;
