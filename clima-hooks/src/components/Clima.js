import React from 'react'

const Clima = ({resultado}) => {
    // console.log(resultado)
    // Extraer valores de props
    const { name, weather } = resultado;
    if(!name) return null;

    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>Resultado Clima</h2>
            </div>
        </div>
     );
}
 
export default Clima;