import React, { useState } from "react";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";

function Registro() {
  const [alert, setAlert] = useState({ mensaje: "", color: "" });

  return (

    
    <>
    
<div className="social-buttons">
<SocialButton icon="fab fa-facebook-f" />
<SocialButton icon="fab fa-github" />
<SocialButton icon="fab fa-linkedin-in" />

</div> 
      <h3>O usa tu email para registrarte</h3>
      <Formulario setAlert={setAlert} 
      />

   
    

      {alert.mensaje && (
        <h1 style={{ color: alert.color }}>{alert.mensaje}</h1>
      )}
    </>
  );
}

export default Registro;
 