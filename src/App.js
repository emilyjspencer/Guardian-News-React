import React from 'react';
import Main from './Main';
import Guardian from './guardian.png'

import './App.css';


const App = () => {
  return (
    <div className="App">
      <img src={Guardian} alt="custom banner"></img>
      <Main />
    </div>
  )
}

export default App;
