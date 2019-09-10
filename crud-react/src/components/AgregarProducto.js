import React, { useState } from 'react';
import Error from './Error';
import axios from 'axios';
import Swal from 'sweetalert2';

const AgregarProducto = () => {

    // States
    const [ nombre, setNombre ] = useState('');
    const [ precio, setPrecio ] = useState('');
    const [ categoria, setCategoria ] = useState('');
    const [ error, setError ] = useState(false);

    const leerValorRadio = e =>{
        setCategoria(e.target.value)
    }

    const handleSubmit = async e => {
        e.preventDefault();
        if(nombre === '' || precio === '' || categoria === '') {
            setError(true)
            return;
        }
        // Pasa Validacion
        setError(false)
        // Crear Nuevo Producto
        try {
            const resultado = await axios.post('http://localhost:4000/restaurant', {
                nombre, 
                precio, 
                categoria
            });
            if(resultado.status === 201) {
                Swal.fire(
                    'Producto Creado',
                    'EL Producto se creo correctamente',
                    'success'
                )
            }
            
        } catch (error ) {
            console.log(error)
            Swal.fire({
                type: 'error',
                title: 'Error',
                text: 'Hubo un error, vuelve a intentarlo'
            })
        }
    }


    return ( 
        <div className="col-md-8 mx-auto ">
            <h1 className="text-center">Agregar Nuevo Producto</h1>
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
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Precio Platillo</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        name="precio"
                        placeholder="Precio Platillo"
                        onChange={e => setPrecio(e.target.value)}
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
 
export default AgregarProducto;