import React, { Component } from 'react';
import './bootstrap.min.css'
import Header from './components/Header';

class App extends Component {
  state = { 

   }

  render() { 
    return ( 
      <div className="container">
        <Header
          titulo='Administrador Pacientes'
        />
      </div>
     );
  }
}
 
export default App;