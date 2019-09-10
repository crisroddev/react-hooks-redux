import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Componentes
import AgregarProducto  from './components/AgregarProducto'
import EditarProducto  from './components/EditarProducto'
import Productos  from './components/Productos'
import Producto  from './components/Producto'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/nuevo-producto" component={AgregarProducto}/>
        <Route exact path="/productos-editar/:id" component={EditarProducto}/>
        <Route exact path="/productos" component={Productos}/>
        <Route exact path="/productos/:id" component={Producto}/>
      </Switch>
    </Router>
  );
}

export default App;
