import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Componentes
import AgregarProducto  from './components/AgregarProducto'
import EditarProducto  from './components/EditarProducto'
import Productos  from './components/Productos'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/nuevo-producto" component={AgregarProducto}/>
        <Route exact path="/productos-editar/:id" component={EditarProducto}/>
        <Route exact path="/productos" component={Productos}/>
      </Switch>
    </Router>
  );
}

export default App;
