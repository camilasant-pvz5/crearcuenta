import React, { useState } from "react";
import Alert from "./Alert"

function Formulario({ setAlert }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  function enviarFormulario(e) {
    e.preventDefault();
   
    const validarCorreo = (correo) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(correo);
    };
    
    if (!validarCorreo(email)) {
      setAlert({ mensaje: "El correo electrónico no es válido", color: "red" });
      return;
    }

    if (password !== confirmPassword) {
      setAlert({ mensaje: "Las contraseñas deben coincidir", color: "red" });
      return;
    } else {
      setAlert({ mensaje: "Registro exitoso", color: "green" });
      setUser("");
      setPassword("");
      setConfirmPassword("");
      setEmail("");
    }

    console.log({ user, password, confirmPassword });
  }

  return (

   
    <div className="form-container">
      <form onSubmit={enviarFormulario}>
        <input
          placeholder="Nombre de usuario"
          value={user}
          type="text"
          onChange={(e) => setUser(e.target.value)}
        />
        {  <input
          placeholder="Correo electrónico"
          value={email}
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
 }
        <input
          placeholder="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          placeholder="Confirmar contraseña"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Formulario;
 