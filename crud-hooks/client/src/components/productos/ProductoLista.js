import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const ProductoLista = ({producto}) => {

    const handleClick = id => {
        Swal.fire({
            title: 'Estas Seguro',
            text: ' No hay vuelta atras',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si Eliminar',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if(result.value) {
                try {
                    const url = `http://localhost:4000/restaurante/${id}`;
                    const resultado = await axios.delete(url);
                    if(resultado.status === 200){
                        Swal.fire(
                            'Eliminado',
                            'El Producto se ha Eliminado',
                            'success'
                        )
                    }
                } catch (error) {
                    console.log(error);
                    Swal.fire({
                        tyoe: 'error',
                        title: 'Error',
                        text: 'Hubo un error'
                    })
                }
            }
        })
    }

    return ( 
        <li 
            className="list-group-item d-flex justify-content-between align.items.center"
            data-categoria={producto.categoria}>
            <p>
                {producto.nombre} {' '}
                <span className="font-weight-bold">$ {producto.precio}</span>
            </p>
            <div>
                <Link
                    className="btn btn-success mr-2"
                    to={`/editar-producto/${producto.id}`}>
                    Editar Producto
                </Link>
                <button
                    className="btn btn-danger"
                    onClick={() => handleClick(producto.id)}
                    >
                    Eliminar
                </button>
            </div>
        </li>
     );
}
 
export default ProductoLista;