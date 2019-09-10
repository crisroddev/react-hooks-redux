import React, { useState, useRef } from 'react';
import Error  from './Error';
import Axios from 'axios';

const EditarProducto = ({producto}) => {

    // Generar los refs
    const precioRef = useRef('');
    const nombreRef = useRef('');

    const [ error, setError ] = useState(false);
    const [ categoria, setCategoria ] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();

        // Revisar Categoria
        let categoriaPlato = (categoria === '') ? producto.categoria : categoria;

        const editarPlato = {
            nombre: nombreRef.current.value,
            precio: precioRef.current.value,
            categoria: categoriaPlato
        }

        // Envio Request
        const url = `http://localhost:4000/restaurant/${producto.id}`;
        try {
            const resultado = await Axios.put(url, editarPlato);

        } catch (error) {
            console.log(error)
        }
    }

    const leerValorRadio = e => {
        setCategoria(e.target.value)
    }

    return ( 
        <div className="col-md-8 mx-auto ">
            <h1 className="text-center">Editar Producto</h1>
            {error ? 
                <Error mensaje="Llenar todos los campos"/> : 
                null
            }

            <form
                onSubmit={handleSubmit}
                className="mt-5"
            >
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
                        defaultChecked={(producto.categoria === 'postre')}
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
                        defaultChecked={(producto.categoria === 'bebida')}
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
                        defaultChecked={(producto.categoria === 'ensalada')}
                    />
                    <label className="form-check-label">
                        Ensalada
                    </label>
                </div>
                </div>

                <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Editar Categoria" />
            </form>
        </div>
     );
}
 
export default EditarProducto;