import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Componentes
import AgregarProducto  from './components/AgregarProducto'
import EditarProducto  from './components/EditarProducto'
import Productos  from './components/Productos'
import Producto  from './components/Producto'
import Header  from './components/Header'

function App() {
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
