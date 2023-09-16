import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const LoginPage = ({ handleLogin }) => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Wywołanie funkcji obsługującej logowanie z przekazanymi danymi
    await handleLogin( username, password );

    // Wyczyszczenie pól formularza
    setUsername('');
    setPassword('');

    //Przekierowanie na stronę główną po zalogowaniu
    navigate('/');
  };

  return (
    <div className='form'>
      
      <form onSubmit={handleSubmit}>
      <h2>Zaloguj</h2>
        <div>
          
          <input
            type="text"
            id="username"
            placeholder='Nazwa użytkownika'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          
          <input
            type="password"
            id="password"
            placeholder='Hasło'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Zaloguj się</button>
        
      </form>
    </div>
  );
};

export default LoginPage;
