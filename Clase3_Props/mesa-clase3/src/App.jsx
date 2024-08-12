import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Componente from './Componente'

import './App.css'

function App() {


let nombre = "Diana";

return (
<>
  <Componente nombre={nombre}>hello</Componente>
</>
)
}

export default App