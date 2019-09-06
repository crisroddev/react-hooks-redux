import React, { useState, Fragment } from 'react';

// Components
import Formulario from './components/Formulario';

function App() {
  // UseState
  const [ citas, setCita ] = useState([]);

  // Agregar Nu evas Citas al state
  const crearCita = cliente => {
    // Copiar state y agregar nuevo cliente
    const nuevasCitas = [...citas, cliente];
    console.log(nuevasCitas)
  }

  return(
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario/>
          </div>
          <div className="one-half column">

          </div>
        </div>
      </div>

    </Fragment>

  )

}

export default App;
