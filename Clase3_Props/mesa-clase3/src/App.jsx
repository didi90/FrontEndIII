import React, { useState } from 'react';
import Card from './Card';
import Componente from './Componente'

const App = () => {

  let nombre = "Diana";
  return (
    <div>
      <Componente nombre={nombre}>hello</Componente>
      <Card />
    </div>
  );
};

export default App;