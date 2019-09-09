import React, {useState} from 'react';

// Components
import Pregunta from './components/Pregunta';

const [ presupuesto, setPresupuesto ] = useState(0);

function App() {
  return (
    <div className="App">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
          <Pregunta
            setPresupuesto={setPresupuesto}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
