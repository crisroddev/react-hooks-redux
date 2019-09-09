import React, {useState} from 'react';

// Components
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';

function App() {
  const [ presupuesto, setPresupuesto ] = useState(0);
  const [ preguntaPresupuesto, setPreguntaPresupuesto ] = useState(true);

  return (
    <div className="App">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
          {(preguntaPresupuesto) 
            ?
            <Pregunta
            setPresupuesto={setPresupuesto}
            setPreguntaPresupuesto={setPreguntaPresupuesto}
          />
            : (
                <div className="row">
                  <div className="one-half column">
                    <Formulario/>
                  </div>
                  <div className="one-half column">
                    <p>Listado Aqui</p>
                  </div>
                </div>
              )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
