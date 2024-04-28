import React, { useState } from "react";
import Alert from 'react-bootstrap/Alert';

function Formulario() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState({ show: false, mensaje: "", color: "" });

  const validarCorreo = (correo) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(correo);
  };

  function enviarFormulario(e) {
    e.preventDefault();

    if (!validarCorreo(email)) {
      setAlert({ show: true, mensaje: "El correo electrónico no es válido", color: "danger" });
      return;
    }

    if (password !== confirmPassword) {
      setAlert({ show: true, mensaje: "Las contraseñas deben coincidir", color: "danger" });
      return;
    } else {
      setAlert({ show: true, mensaje: "Registro exitoso", color: "success" });
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
        <input
          placeholder="Correo electrónico"
          value={email}
          type="text"
          onChange={(e) => setEmail(e.target.value)}
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
        {alert.show && (
          <Alert variant={alert.color} onClose={() => setAlert({ ...alert, show: false })} dismissible>
            <Alert.Heading>{alert.mensaje}</Alert.Heading>
          </Alert>
        )}
      </form>
    </div>
  );
}

export default Formulario;
  