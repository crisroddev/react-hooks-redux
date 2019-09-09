import React from 'react'

const Listado = ({gastos}) => {
    return ( 
        <div className="gastos-realizados">
            <h2>Listado</h2>
            {gastos.map(gasto => (
                
            ))}
        </div>
     ); 
}
 
export default Listado;