import React, { useState } from "react";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";

function Registro() {
  const [alert, setAlert] = useState({ mensaje: "", color: "" });

  return (
    <>
      <h3>Completa el formulario</h3>
      <Formulario setAlert={setAlert} />
      
   
      <div className="social-buttons">
        <SocialButton icon="fab fa-facebook-f" />
        <SocialButton icon="fab fa-linkedin-in" />
        <SocialButton icon="fab fa-github" />
      </div>

      {alert.mensaje && (
        <h1 style={{ color: alert.color }}>{alert.mensaje}</h1>
      )}
    </>
  );
}

export default Registro;
