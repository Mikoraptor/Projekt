import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ onLogout }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Wykonaj wylogowanie i przekieruj na ścieżkę /
    onLogout();
    navigate('/');
  }, [onLogout, navigate]);

  return (
    console.log('Wylogowano!')
  );
};

export default Logout;
