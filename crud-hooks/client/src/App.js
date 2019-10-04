import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Componentes
import Productos from './components/productos/Productos';
import EditarProducto from './components/productos/EditarProducto';
import AgregarProducto from './components/productos/AgregarProducto';
import Producto from './components/productos/Producto';

// Layout
import Header from './components/layouts/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <main className="container mt-5">
            <Switch>
              <Route exact path="/productos" component={Productos}/>
              <Route exact path="/nuevo-producto" component={AgregarProducto}/>
              <Route exact path="/editar-producto/:id" component={EditarProducto}/>
              <Route exact path="/producto/:id" component={Producto}/>
            </Switch>
          </main>
      </Router>
    </div>
  );
}

export default App;
