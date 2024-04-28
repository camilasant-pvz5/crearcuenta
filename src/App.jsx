import React, { useState } from "react";
import Registro from "./components/Registro";
import SocialButton from "./components/SocialButton";
import Formulario from "./components/Formulario"
import Alert from "./components/Alert"

import "./App.css";

function App() {
  const [alert, setAlert] = useState({ mensaje: "", color: "" });

  return (
    <>
      <h1>Bienvenido a Pág web</h1>
      <Registro setAlert={setAlert} alert={alert} />
      
    </>
  );
}

export default App;
