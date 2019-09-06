import React, {useState, useEffect } from 'react';

// Componentes
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';
import Clima from './components/Clima';

function App() {

  // State Principal
  const [ ciudad, setCiudad ] = useState('');
  const [ pais, setPais ] = useState('');
  const [ error, setError ] = useState(false);
  const [ resultado, setResultado ] = useState({});

  useEffect(() => {
    // Prevenir ejecución
    if(ciudad === '') return;

    const consultarAPI = async () => {
      const appId = '2e6cd0675544648d55204e092f968d03';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
  
      // Consultar Url
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      
      setResultado(resultado);
    }
    consultarAPI();
  }, [ ciudad, pais ]);

  const datosConsulta = datos => {
    // Validar ambos campos esten
    if(datos.ciudad === '' || datos.pais === '') {
      setError(true);
      return;
    }

    // Ciudad y Pais existen agregarlos al state
    setCiudad(datos.ciudad);
    setPais(datos.pais);
    setError(false);
  }

  // Cargar Componente Condicionalmente

  let componente;
  if(error) {
    // Hay error mostrar
    componente = <Error mensaje="Ambos campos son obligatorios"/>
  } else {
    // Mostrar el Clima
    componente = <Clima
                    resultado={resultado}
                  />;
  }
  return (
    <div className="App">
      <Header
        titulo="Clima App"
      />

      <div className="contenedor-form">
        <div className="row">
          <div className="col s12 m6">
            <Formulario
              datosConsulta={datosConsulta}
            />
          </div>
          <div className="col s12 m6">
            {componente}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
