import React from 'react';
import NavBar from './NavBar';
import Main from './Main';
import Guardian from './guardian.png'

import './App.css';


const App = () => {
  return (
    <div className="App">
      <img src={Guardian}></img>
      <NavBar />
      <Main />
    </div>
  )
}

export default App;
