import React from 'react';
import Main from './Main';
import Guardian from './guardian.png';
import news from './news.jpg';
import news10 from './news10.jpg';
import london from './london.png';
import banner from './banner.png';
import banner2 from './banner2.png';
import banner3 from './banner3.png';


import './App.css';


const App = () => {
  return (
    <div className="App">
    <img className="london" src={banner} />
    
    <div className="strip">
      <p className="header">The Guardian</p>
     
    </div>
      <Main />
      <div className="strip2">
      <img className="london2" src={banner3} />
      </div>
    </div>
  )
}

export default App;
