import React, { Component } from 'react';
import './bootstrap.min.css'
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';

class App extends Component {
  state = { 
    citas: []
   }

   crearNuevaCita = datos => {
    //  Copiar State
    const citas = [...this.state.citas, datos]

    // Agrego al State
    this.setState({
      citas
    })
   }

  //  Elimina las citas
  eliminarCita = id => {
    // Tomo copia del State

    // Filter para sacar la cita del elemento con su ID

    // Actualizo state

  }

  render() { 
    return ( 
      <div className="container">
        <Header
          titulo='Administrador Pacientes'
        />
        <div className="row"> 
          <div className="col-md-10 mx-auto">
            <NuevaCita
              crearNuevaCita={this.crearNuevaCita}
            />
          </div>
          <div className="mt-5 col-md-10 mx-auto">
            <ListaCitas
              citas={this.state.citas}
              eliminarCita={this.eliminarCita}
            />
          </div>
        </div>
      </div>
     );
  }
}
 
export default App;