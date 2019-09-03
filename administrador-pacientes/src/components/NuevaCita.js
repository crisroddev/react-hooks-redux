import React, { Component } from 'react'

class NuevaCita extends Component {
    state = { 
        cita: {
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        }
     }

     handleChange = e => {
        e.preventDefault();
        this.setState({
            cita: {
                ...this.state.cita,
                [e.target.name]: e.target.value
            }
        })
     }
    

    render() { 
        return ( 
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llena el Formulario para Nueva Cita
                    </h2>
                    <form
                        >
                        <div className="row form-group">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Nombre Mascota
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                     type="text"
                                     className="form-control"
                                     placeholder="Nombre Mascota"
                                     name="mascota"
                                     onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="row form-group">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Nombre Dueño
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                     type="text"
                                     className="form-control"
                                     placeholder="Nombre Dueño"
                                     name="propietario"
                                     onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="row form-group">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Fecha
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                     type="date"
                                     className="form-control"
                                     name="fecha"
                                     onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="row form-group">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Hora
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                     type="time"
                                     className="form-control"
                                     name="hora"
                                     onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="row form-group">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Sintomas
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea
                                    type="text"
                                    className="form-control"
                                    name="sintomas"
                                    onChange={this.handleChange}>
                                </textarea>
                            </div>
                        </div>
                        <input type="submit" className="py-3 btn btn-success btn-block" value="Agregar Nueva Cita"/>
                    </form>
                </div>

            </div>
         );
    }
}
 
export default NuevaCita;