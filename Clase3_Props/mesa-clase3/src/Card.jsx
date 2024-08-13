import React, { useState } from 'react';
import './styles/card.css'; // Importa el archivo CSS

const Card = () => {
  const [bgColor, setBgColor] = useState('');

  const handleBackgroundChange = (color) => {
    setBgColor(color);
  };

  return (
    <div className={`card ${bgColor}`}>
      <h2>Mi Tarjeta</h2>
      <p>Este es el contenido de la tarjeta.</p>
      <button onClick={() => handleBackgroundChange('blue-background')}>Fondo Azul</button>
      <button onClick={() => handleBackgroundChange('green-background')}>Fondo Verde</button>
    </div>
  );
};

export default Card;