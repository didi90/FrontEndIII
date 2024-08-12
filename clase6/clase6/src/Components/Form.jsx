import React, {useState} from 'react';

const Form = () => {

    // Parametros o condiciones cambiar el estado
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [pokemon, setPokemon] = useState("");

    const [show, setShow]= useState(false);
    const [error, setError]= useState(false);

    const handleChangeName = (e) =>{
        setNombre(e.target.value); 
        console.log(e.target.value)  
    };

    const handleChangeEdad = (e) =>{
        setEdad(e.target.value);
        console.log(e.target.value)  

    };
    
    const handleChangePokemon = (e) =>{
        setPokemon(e.target.value);
        console.log(e.target.value)  

    };   

    const handleSubmit =(e)=>{
        e.preventDefault();
        const numRegex = /[0-9]/;
        if(nombre.trim().length > 3 &&
        pokemon.trim().length > 3 
        && numRegex.test(edad)){
            setShow(true);
            setError(false);
        } else {
            setError(true);
        }
    }

    const reset = () =>{
        setNombre("");
        setEdad("");
        setPokemon("");
        
    }

    return(
    <>
        {show ? (
        <h4 style={{color:"blue"}}>
        Muchas gracias por registrarse
        </h4>) : (
        <>
    
        <form onSubmit={handleSubmit}>
        <label>Nombre: </label>
        <input type="text" value={nombre} onChange ={handleChangeName}/>
        <label>Edad: </label>
        <input type="text" value={edad} onChange ={handleChangeEdad}/>
        <label>Pokemon: </label>
        <input type="text" value={pokemon} onChange ={handleChangePokemon}/>
        <button>Enviar</button>
        </form>
        <button onClick={reset}>Resetea formulario</button>
        </>
        )}        
        {error?(
        <h4 style={{color:"red"}}>
        Error, ingresando la informaciÃ³n
        </h4> 
        ): null}
</>
    )
}

export default Form;