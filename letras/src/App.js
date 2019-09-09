import React, { Fragment,useEffect, useState } from 'react';
import Formulario from './components/Formulario';

function App() {

  const [ artista, setArtista ] = useState('');
  const [ letra, setLetra ] = useState('');
  const [ info, setInfo ] = useState({});

  // Metodo Consultar API letras
  const consultarAPILetra = () => {

  }

  return (
    <Fragment>
      <Formulario
        consultarAPILetra={consultarAPILetra}
      />
    </Fragment>
  )
}

export default App;

