import React, {useState, useEffect} from 'react';

// Components
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';

function App() {
  const [ presupuesto, setPresupuesto ] = useState(0);
  const [ preguntaPresupuesto, setPreguntaPresupuesto ] = useState(true);
  const [ gasto, setGasto ] = useState({});
  const [ gastos, setGastos ] = useState([]);

  useEffect(() => {
    const listadoGastos = [...gastos, gasto];
    setGastos(listadoGastos)
  },[]);

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
                    <Formulario
                      setGasto={setGasto}
                    />
                  </div>
                  <div className="one-half column">
                    <Listado
                      gastos={gastos}
                    />
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
