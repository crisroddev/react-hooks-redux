import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Frase from './components/Frase';

function App() {

  const [ frase, obtenerFrase ] = useState({});

  const consultarApi = async () => {
    const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    // console.log(resultado)
    // Agregar Resultado al State
    obtenerFrase(resultado.data[0]);
}


  // Consulta a RestAPI
  useEffect(
    () => {
      consultarApi()
    }, [])

  return(
    <div className="contenedor">
      <Frase
        frase={frase}
      />
      <button
        onClick={consultarApi}
      >
        Generar Nueva
      </button>
    </div>
  )
}

export default App;