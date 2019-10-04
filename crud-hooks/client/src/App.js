import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

// Componentes
import Productos from './components/productos/Productos';
import EditarProducto from './components/productos/EditarProducto';
import AgregarProducto from './components/productos/AgregarProducto';
import Producto from './components/productos/Producto';

// Layout
import Header from './components/layouts/Header';

function App() {

  const [productos, setProductos] = useState([]);
  const [recargar, setRecargar] = useState(true);

  useEffect(() => {
    if(recargar) {
      const consultarAPI = async () => {
        const resultado = await axios.get('http://localhost:4000/restautante');
        setProductos(resultado.data)
      }
      consultarAPI();
      setRecargar(false)
    }
  }, [recargar])

  return (
    <div className="App">
      <Router>
        <Header/>
          <main className="container mt-5">
            <Switch>
              <Route exact path="/productos" 
                render={() => (
                    <Productos
                      productos={productos}
                    />
              )}/>
              <Route exact path="/nuevo-producto" 
                render={() => (
                  <AgregarProducto
                    setRecargar={setRecargar}
                  />
                )}
              />
              <Route exact path="/editar-producto/:id" 
                render={props => {
                  const idProducto = parseInt(props.match.params.id)
                  const producto = productos.filter(producto => producto.id === idProducto)
                  return (
                    <EditarProducto
                      producto={producto[0]}
                      setRecargar={setRecargar}
                    />
                  )
                }}
              />
              <Route exact path="/producto/:id" component={Producto}/>
            </Switch>
          </main>
      </Router>
    </div>
  );
}

export default App;
