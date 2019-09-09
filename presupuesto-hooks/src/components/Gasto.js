import React from 'react'

const Gasto = ({gasto}) => {
    console.log(gasto)
    return(
        <li className="gastos">
        <p>
            {gasto.nombreGasto}
            <span className="gasto">$ {gasto.cantidadGasto}</span>
        </p>
    </li>
    )
    
};
 
export default Gasto;