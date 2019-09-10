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
            // Paso id a number
            const idProducto = parseInt(props.match.params.id);

            // Producto al State
            const producto = productos.filter(producto => producto.id === idProducto);
            return (
              <EditarProducto
                producto={producto[0]}
                setRecargarProductos={setRecargarProductos}
              />
            )
          }}/>
          <Route exact path="/productos/:id" component={Producto}/>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
