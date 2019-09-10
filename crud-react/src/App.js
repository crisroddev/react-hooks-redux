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

  useEffect(() => {
    const consultarApi = async () => {
      // Cosultar Api de json-server
      const resultado = await axios.get('http://localhost:4000/restaurant')
      
      // Guardo en el State
      setProductos(resultado.data)

    }
    consultarApi();
  }, [])


  return (
    <Router>
      <Header/>
      <main className="container mt-5">
        <Switch>
          <Route exact path="/nuevo-producto" component={AgregarProducto}/>
          <Route exact path="/productos-editar/:id" component={EditarProducto}/>
          <Route exact path="/productos" component={Productos}/>
          <Route exact path="/productos/:id" component={Producto}/>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
