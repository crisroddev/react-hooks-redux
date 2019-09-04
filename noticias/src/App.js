import React, { Component, Fragment } from 'react'
import Header  from './components/Header';

class App extends Component {
  state = { 
    noticias: []
   }

  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a7a5d8e389ee4438a38d3407b4f66b85`;
    const respuesta = await fetch(url);
    const  noticias = await respuesta.json();
    
    this.setState({
      noticias : noticias.articles
    })
  }



  render() { 
    return ( 
        <Fragment>
          <Header
            titulo="Noticias React API"
          />

          <div className="container white contenedor-noticias">

          </div>
        </Fragment>
     );
  }
}
 
export default App;
