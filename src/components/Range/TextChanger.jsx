import React, { useState } from 'react';


const TextChanger = () => {
    const [text, setText] = useState('de la rue');
    
    const handleChange = (event) => {
      const value = parseInt(event.target.value);
      let newText = 'de la rue';
  
      if (value === 1) {
        newText = 'de la région';
      } else if (value === 2) {
        newText = 'de votre pays';
      } else if (value === 3) {
        newText = 'du continent';
      } else if (value === 4) {
        newText = 'du mooooooooonnnnndddeeee';
      }
      
      setText(newText);
    };
    
    return (
      <div className='l-steps__distance'>
          <p className='l-steps__jaugeText'>{text}</p>
          <input className='l-steps__jauge' type="range" min="0" max="4" step="1" onChange={handleChange} />
      </div>
    );
  };
  
export default TextChanger;