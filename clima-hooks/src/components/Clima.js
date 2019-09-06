import React from 'react'

const Clima = ({resultado}) => {
    console.log(resultado)
    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>Resultado Clima</h2>
            </div>
        </div>
     );
}
 
export default Clima;