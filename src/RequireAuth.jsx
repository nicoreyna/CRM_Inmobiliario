import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const usuario = localStorage.getItem('usuarioActivo');
    if (!usuario) {
      navigate('/login', { replace: true });
    }
  }, [navigate]);

  const usuario = localStorage.getItem('usuarioActivo');
  return usuario ? children : null;
};

export default RequireAuth;
