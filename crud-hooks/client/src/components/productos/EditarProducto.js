import React, { useState, useRef } from 'react';
import Error from '../helpers/Error';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
 
const EditarProducto = (props) => {

    const { history, producto, setRecargar } = props;

    const precioRef = useRef('');
    const nombreRef = useRef('');

    const [error, setError] = useState(false);
    const [categoria, setCategoria] = useState('');


    const leerValorRadio = e=> {
        setCategoria(e.target.value)
    }

    const handleSubmit = async e => {
        e.preventDefault();

        let categoriaPlato = (categoria === '') ? producto.categoria : categoria;

        const editarProducto = {
            precio: precioRef.current.value,
            nombre: nombreRef.current.value,
            categoria: categoriaPlato


        }

        const url = `http://localhost:4000/restaurant/${producto.id}`;
        try{
            const resultado = await axios.put(url, editarProducto);
        } catch (error){
            console.log(error)
        }
        setRecargar(true)
        history.push('/productos')

    }

    return ( 
        <div className="col-md-8 mx-auto ">
            <h1 className="text-center">Editar Producto</h1>
            {(error) ? 
                <Error mensaje="Llenar todos los campos"/> 
                : null
            }

            <form
                onSubmit={handleSubmit}
                className="mt-5">
                <div className="form-group">
                    <label>Nombre Platillo</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="nombre" 
                        placeholder="Nombre Platillo"
                        ref={nombreRef}
                        defaultValue={producto.nombre}

                        
                    />
                </div>

                <div className="form-group">
                    <label>Precio Platillo</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        name="precio"
                        placeholder="Precio Platillo"
                        ref={precioRef}
                        defaultValue={producto.precio}


                    />
                </div>

                <legend className="text-center">Categoría:</legend>
                <div className="text-center">
                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="categoria"
                        value="postre"
                        onChange={leerValorRadio}
                        defaultChecked={(producto.categoria === 'postres')}
                    />
                    <label className="form-check-label">
                        Postre
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="categoria"
                        value="bebida"
                        onChange={leerValorRadio}
                        defaultChecked={(producto.categoria === 'bebidas')}
                    />
                    <label className="form-check-label">
                        Bebida
                    </label>
                </div>

                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="categoria"
                        value="cortes"
                        onChange={leerValorRadio}
                        defaultChecked={(producto.categoria === 'cortes')}
                    />
                    <label className="form-check-label">
                        Cortes
                    </label>
                </div>

                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="categoria"
                        value="ensalada"
                        onChange={leerValorRadio}
                        defaultChecked={(producto.categoria === 'ensaladas')}
                    />
                    <label className="form-check-label">
                        Ensalada
                    </label>
                </div>
                </div>

                <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Agregar Producto" />
            </form>
        </div>
     );
}
 
export default withRouter(EditarProducto);