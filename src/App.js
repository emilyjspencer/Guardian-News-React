import React, { useState } from 'react';

import './App.css';
import axios from 'axios';

const App = ()  => {

  const [stories, setStories ] = useState([]);


  return (
    <div>
      <h1>Guardian News</h1>
      <ul>
        {stories.map(story => (
          <li> key={story.id}>{story.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
