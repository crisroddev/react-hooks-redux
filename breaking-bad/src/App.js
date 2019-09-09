import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

  console.log(frase)


  return(
    <p>Hola</p>
  )
}

export default App;