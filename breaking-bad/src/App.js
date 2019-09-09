import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [ frase, obtenerFrase ] = useState({});


  // Consulta a RestAPI
  useEffect(
    async () => {
      const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
      console.log(resultado)
  })


  return(
    <p>Hola</p>
  )
}

export default App;