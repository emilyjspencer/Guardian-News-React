import React, { useState, useEffect } from 'react';

import './App.css';
import axios from 'axios';

const App = ()  => {
  console.log(process.env.REACT_APP_API_KEY)
  

  const [stories, setStories ] = useState([]);

  useEffect(() => {
    const key = process.env.REACT_APP_API_KEY
    axios.get(`https://content.guardianapis.com/search?api-key=key`)
      .then(result => {
        console.log(result)
        const newStories = result.data.response.results
        
         console.log(newStories[0])
           setStories(newStories);
         });
        }, []);
      
      
  return (
    <div>
      <h1>Guardian News</h1>
      <ul>
        {stories.map(story => (
        <li key={story.id}>
          {story.webUrl}
          <br />
          <br />
          {story.webPublicationDate}
        </li>
      
        ))}
        </ul>
    </div>
    
  );
        }
  
        
export default App;
