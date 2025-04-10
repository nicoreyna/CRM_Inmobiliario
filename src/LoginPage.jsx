
import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  // Estados para email, contraseña y error
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Hook de navegación de React Router
  const navigate = useNavigate();

  // Usuarios válidos simulados
  const usuariosValidos = [
    { email: 'admin@crm.com', password: 'admin123', role: 'admin' },
    { email: 'usuario@crm.com', password: 'usuario123', role: 'user' }
  ];

  // Función al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    const user = usuariosValidos.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem('usuarioActivo', JSON.stringify(user));
      setError('');
      navigate('/dashboard'); // Redirigir al Dashboard
    } else {
      setError('Correo o contraseña incorrectos');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Entrar</button>
        </form>
        {error && <p className="error-message">{error}</p>}
        <div className="login-footer">
          <p>¿Olvidaste tu contraseña?</p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
