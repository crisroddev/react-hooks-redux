import React from 'react'

const ListaCitas = ({citas}) => {
    return ( 
        <div className="card mt-2 py-5">
            <div className="card-body">
                <h2 className="card-title text-center">
                    Administra las Citas
                </h2>
                <div className="lista-citas">
                    {citas.map(cita => (
                        
                    ))}

                </div>

            </div>
        </div>
     );
}
 
export default ListaCitas;