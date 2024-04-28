import React, { useState } from "react";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";

function Registro() {
  const [alert, setAlert] = useState({ mensaje: "", color: "" });

  return (

    
    <>
    
<div className="social-buttons">
<SocialButton icon="fab fa-facebook fa-3x" />
<SocialButton icon="fab fa-github fa-3x" />
<SocialButton icon="fab fa-linkedin-in fa-3x" />

</div> 
      <h4>O usa tu email para registrarte</h4>
      <Formulario setAlert={setAlert} 
      />

   

      {alert.mensaje && (
        <h1 style={{ color: alert.color }}>{alert.mensaje}</h1>
      )}
    </>
  );
}

export default Registro;
 