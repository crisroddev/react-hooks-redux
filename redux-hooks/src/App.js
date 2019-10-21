import React from 'react';

// Redux
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <p>Crud con Redux</p>
      </div>
    </Provider>
  );
}

export default App;
