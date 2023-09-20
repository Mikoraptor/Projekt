import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = ({ handleRegister }) => {

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(password === password2){
      // Wywołanie funkcji obsługującej rejestracje
      handleRegister(email, username, password);
      navigate('/LoginPage');
    } else {
      alert('Hasła nie zgadzają się ze sobą')
      //navigate('/RegisterPage');
    }
    // Wyczyszczenie pól formularza
    setEmail('');
    setUsername('');
    setPassword('');
    setPassword2('');

  
  };

  return (
    <div className='form'>
      <h2>Utwórz Konto</h2>
      <form onSubmit={handleSubmit}>
      <div>
          
          <input
            type="email"
            id="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
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
        <div>
          
          <input
            type="password"
            id="password2"
            placeholder='Powtórz Hasło'
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </div>
        <button type="submit">Zarejestruj</button>
      </form>
    </div>
  );
};

export default RegisterPage;
