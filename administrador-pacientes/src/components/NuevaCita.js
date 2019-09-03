import React, { Component } from 'react';
import uuid from 'uuid';

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
        this.setState({
            cita: {
                ...this.state.cita,
                [e.target.name]: e.target.value
            },
            error: false
        })
     }

     handleSubmit = e => {
        e.preventDefault();
        // Extraer Valores State
        const { mascota, propietario, fecha, hora, sintomas } = this.state.cita;
        // Validar Campos
        if(mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === '') {
            this.setState({
                error: true
            });
            return;
        }

        // generar objeto con datos
        const nuevaCita = {...this.state.cita}
        nuevaCita.id = uuid();

        // Agregar Cita Al State de App
        this.props.crearNuevaCita(nuevaCita)
     }
    

    render() { 
        // Extraer Valor del state para mostrar erro
        const { error } = this.state;
        return ( 
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llena el Formulario para Nueva Cita
                    </h2>
                    {error ? 
                        <div className="alert alert-danger mt-2 mb-5 text-center">
                            Todos los Campos son Obligatorios
                        </div> : 
                        null
                    }
                    <form
                        onSubmit={this.handleSubmit}>
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
                                     value={this.state.cita.mascota}
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
                                     value={this.state.cita.propietario}
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
                                     value={this.state.cita.fecha}
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
                                     value={this.state.cita.hora}
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
                                    onChange={this.handleChange}
                                    value={this.state.cita.sintomas}>
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