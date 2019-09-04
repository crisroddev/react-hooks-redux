import React, { Component } from 'react';
import axios from 'axios';

// Crear Context
const CategoriasContext = React.createContext();
export const CategoriasConsumer = CategoriasContext.Consumer

class CategoriasProvider extends Component {
    token = 'PZHE6E254BGLDF6FCD';

    state = {  }

    componentDidMount() {
        this.obtenerCategorias();
    }

    obtenerCategorias = async () => {
        let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`
        let categorias = await axios.get(url);        
        console.log(categorias)

    }



    render() { 
        return ( 
            
         );
    }
}
 
export default CategoriasProvider;