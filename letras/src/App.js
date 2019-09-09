import React, { Fragment,useEffect, useState } from 'react';
import Formulario from './components/Formulario';

function App() {

  const [ artista, setArtista ] = useState('');
  const [ letra, setLetra ] = useState('');
  const [ info, setInfo ] = useState({});

  return (
    <Fragment>
      <Formulario/>
    </Fragment>
  )
}

export default App;

