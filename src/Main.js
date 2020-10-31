import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';


const Main = ()  => {
  

  const [stories, setStories ] = useState([]);

  useEffect(() => {
   const key = process.env.REACT_APP_API_KEY;
    axios.get(`https://content.guardianapis.com/search?api-key=${key}`)
      .then(result => {
        console.log(result)
        const newStories = result.data.response.results
        
         console.log(newStories[0])
           setStories(newStories);
         });
        }, []);
      
      
  return (
    <div className="App">
      <br />
      <h2 align="center">The latest news stories</h2>
      <br />
      <br />
      <ul>
        {stories.map(story => (
        <li key={story.id}>
          <strong>{story.webTitle}</strong>
          <br />
          <a href={story.webUrl}>{story.webUrl}</a>
          <br />
          {new Date(story.webPublicationDate).toDateString()}
          <br />
          <br />
          <br />
        </li>
        ))}
        </ul>
      </div>
     );
    }
  
        
export default Main;