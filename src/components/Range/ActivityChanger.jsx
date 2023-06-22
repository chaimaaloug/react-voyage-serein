import React, { useState } from 'react';
import marche from '../../assets/🚶.svg';
import monde from '../../assets/🌎.svg';


const ActivityChanger = () => {
    const [text, setText] = useState('de vous prélasser au soleil');
    
    const handleChange = (event) => {
      const value = parseInt(event.target.value);
      let newText = 'de vous prélasser au soleil';
  
      if (value === 1) {
        newText = 'vous amuser avant tout';
      } else if (value === 2) {
        newText = 'culture et d’aventure';
      } else if (value === 3) {
        newText = 'faire des treks';
      } else if (value === 4) {
        newText = 'dépasser vos limites';
      }
      
      setText(newText);
    };
    
    return (
      <div className='l-steps__distance'>
            <p className='l-steps__jaugeText'>{text}</p>
            <input className='l-steps__jauge' type="range" defaultValue="0" min="0" max="4" step="1" onChange={handleChange} aria-label='Faites glisser le curseur pour choisir une distance, de 0 : rue à 4 : monde.'/>
            <div style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "space-between", marginBottom: "15px" }}>
                <img src={marche} alt="" />
                <img src={monde} alt="" />
            </div>
      </div>
    );
  };
  
export default ActivityChanger;