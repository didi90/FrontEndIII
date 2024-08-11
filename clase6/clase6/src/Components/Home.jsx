import React, { useState } from 'react'

const titleStyles = {
backgroundColor: "#ffda92",
color: "firebrick",
width: "20%",
margin: "10px auto",
borderRadius: "10px",
};

const Home = () => {
    const [form, setForm] = useState("");
return (
<>
    <div>
        <h1 style={titleStyles}>Bienvenido a mi formulario</h1>
    </div>

</>
)
}

export default Home;