import React, { useState } from "react";
import Registro from "./components/Registro";
import SocialButton from "./components/SocialButton";
import Formulario from "./components/Formulario"
import Alert from "./components/Alert"
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";

function App() {
  const [alert, setAlert] = useState({ mensaje: "", color: "" });

  return (
    <>
    <div className="contenedor">
      <h1>Crea una cuenta</h1>
      <Registro setAlert={setAlert} alert={alert} />
      
      </div>
      
    </>


  );
}

export default App;
