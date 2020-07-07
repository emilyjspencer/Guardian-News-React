import React from 'react';
import Main from './Main';
import Guardian from './guardian.png'

import './App.css';


const App = () => {
  return (
    <div className="App">
      <img src={Guardian}></img>
      <Main />
    </div>
  )
}

export default App;
