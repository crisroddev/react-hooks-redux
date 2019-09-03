import React, { Component } from 'react'

class App extends Component {
  state = {  }

  async componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a7a5d8e389ee4438a38d3407b4f66b85`;
    const respuesta = await fetch(url);
    const  noticias = await respuesta.json();
    console.log(noticias)
  }



  render() { 
    return ( 
      <h1>Noticias React</h1>
     );
  }
}
 
export default App;
