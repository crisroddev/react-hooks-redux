import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

// Componentes
import AgregarProducto  from './components/AgregarProducto'
import EditarProducto  from './components/EditarProducto'
import Productos  from './components/Productos'
import Producto  from './components/Producto'
import Header  from './components/Header'

function App() {

  const [ productos, setProductos ] = useState([]);
  const [recargarProductos, setRecargarProductos ] = useState(true);

  useEffect(() => {
    if(recargarProductos) {
      const consultarApi = async () => {
        // Cosultar Api de json-server
        const resultado = await axios.get('http://localhost:4000/restaurant')
        
        // Guardo en el State
        setProductos(resultado.data)
  
      }
      consultarApi();

      // Cambiar a False Recarga
      setRecargarProductos(false)
    }
  }, [recargarProductos])


  return (
    <Router>
      <Header/>
      <main className="container mt-5">
        <Switch>
          <Route exact path="/productos" render={() => (
            <Productos
              productos={productos}
            />
          )}/>
          <Route exact path="/nuevo-producto" render={() => (
            <AgregarProducto 
            setRecargarProductos={setRecargarProductos}
            />
          )}/>
          <Route exact path="/productos-editar/:id" render={props => {
            console.log(props.match.params.id);

            return (
              <EditarProducto/>
            )
          }}/>
          <Route exact path="/productos/:id" component={Producto}/>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
