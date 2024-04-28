import React, { useState } from "react";
import Alert from 'react-bootstrap/Alert';

function Formulario() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false); // Nuevo estado para controlar la visibilidad de la alerta
  const [errorMessage, setErrorMessage] = useState("");
  const [errorColor, setErrorColor] = useState("");

  function enviarFormulario(e) {
    e.preventDefault();
   
if (!user || !password || !confirmPassword || !email) {
      setErrorMessage("Todos los campos deben completarse.");
      setErrorColor("danger");
      setShowAlert(true);
      return;
    }

    const validarCorreo = (correo) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(correo);
    };
    
    if (!validarCorreo(email)) {
      // Si la validación falla, muestra la alerta
      setShowAlert(true);
      setErrorMessage("No se validó el correo.");
      setErrorColor("danger");
      return;
    }

    if (password !== confirmPassword) {
      // Si la validación falla, muestra la alerta
      setErrorMessage("Las contraseñas no coinciden.");
      setErrorColor("danger");
      setShowAlert(true);
      return;
    } else {
      // Si la validación es correcta, muestra alerta de mensaje exitoso
      setErrorColor("success");
      setErrorMessage("Registro exitoso.");
      setShowAlert(true);
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
      
          
          {showAlert && (
      // Código de Alert BEGIN
      <div className="contendorAlertas"> 
      <Alert variant={errorColor}>
        <Alert.Heading>{errorMessage}</Alert.Heading>
      </Alert> </div>
      // Código de Alert
      )}
    </div>
  );
}

export default Formulario;





