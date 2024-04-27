import React, { useState } from "react";

function Formulario({ setAlert }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function enviarFormulario(e) {
    e.preventDefault();
    if (user === "" || password === "" || confirmPassword === "") {
      setAlert({ mensaje: "Debes completar todos los campos", color: "red" });
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
