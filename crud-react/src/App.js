import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

// Componentes
import AgregarProducto from './components/AgregarProducto';
import EditarProducto from './components/EditarProducto';
import Producto from './components/Producto';
import Productos from './components/Productos';
import Header from './components/Header';


function App(){

    const [ productos, setProductos ] = useState([]);

    useEffect(() => {
        const consultarApi = async () => {
            const resultado = await axios.get('http://localhost:4000/restaurante');
            setProductos(resultado.data)
        }
        consultarApi();
    },[]);

    return(
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
    );
}

export default App;