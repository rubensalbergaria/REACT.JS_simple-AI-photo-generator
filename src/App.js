import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [image, setImage] = useState('')

  const handleChange = () => {
    axios.get('https://api.generated.photos/api/v1/faces?api_key=YOUR_API_KEY').then(res => {
      const uri = res.data.faces[0].urls[4][512]
      uri && setImage(uri)
    }).catch(err => {
      console.log(err.message)
    })
  }

  return (
    <div className="App">
      <h1>AI PHOTO GENERATOR</h1>
      <div className="photo-container">
        {image && <img src={image} alt='AI FACE' />}
        {image && <img src={image} alt='AI FACE' />}
        {image && <img src={image} alt='AI FACE' />}
      </div>    
      <br/>
      <div className="button-container">
      <button type='button' onClick={handleChange} id='button-new-image'>
        New Image
      </button>
      </div>
    </div>
  );
}

export default App;
