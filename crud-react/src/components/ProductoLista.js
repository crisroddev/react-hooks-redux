import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const ProductoLista = ({producto, setRecargarProductos}) => {

    const handleClick = id => {
        Swal.fire({
            title: 'Seguro Quieres Eliminar',
            text: "Esto sera Definitivo!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar!',
            cancelButtonText: 'Cancelar'
          }).then(async (result) => {
            const url = ` http://localhost:4000/restaurant/${id}`;
            const resultado = await axios.delete(url)

            if (result.value) {
              Swal.fire(
                'Eliminado!',
                'Producto Eliminado.',
                'success'
              )
            }

            setRecargarProductos(true)
          })
          
    }

    return ( 
        <li 
            className="list-group-item d-flex justify-content-between align-items-center"
            data-categoria={producto.categoria}>
            <p>
                { producto.nombre} {' '}
                <span className="font-weight-bold">
                    $ { producto.precio}
                </span>
            </p>
            <div>
                <Link 
                    to={`productos-editar/${producto.id}`}
                    className="btn btn-success mr-2">
                    Editar
                </Link>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleClick(producto.id)}>
                    Eliminar &times;
                </button>
            </div>
        </li>
     );
}
 
export default ProductoLista;