import './App.css'
import Componente from './assets/Componente'
import imagenes from './assets/imagenes';

function App() {
let mensaje = "Enviar";
let afirmativo = "SI, ingrese su correo";
let negativo = "NO";


return (
<>
  <h1>Bienvenid@s</h1>
  <Componente />
  <div>
    <img src={imagenes.img1} width="600" height={500} />

    <img src={imagenes.img2} width="600" height={500} />
  </div>

  <section>
    <h2>Qué es el anime japonés</h2>
    <p>Anime es el término que hace referencia a la animación japonesa, 
      estilo que abarca diferentes géneros y temáticas.</p>
  </section>
  
  <h3>Algunos ejemplos son:</h3>
  <ul>
    <li>Dragon Ball / Dragon Ball z</li>
    <li>Sailoor moon</li>
    <li>Sakura Card Captors</li>
  </ul>

  <h2>¿Quisieras más información?</h2>
  <button>{afirmativo} </button>
  <input type="" />
  <button>{negativo} </button>
</>
)
}

export default App