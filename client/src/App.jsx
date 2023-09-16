import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Navbar from './components/Navbar';
import Home from './components';
import Logout from './components/Logout';
import './components/style/index.css';
import Footer from './components/footer';
import AdvertisementPage from './components/AdvertisementPage';
import AdvertisementCreate from './components/AdvertisementCreate';
import Advertisements from './components/Advertisements';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState('');
  const [loggedInUserEmail, setLoggedInUserEmail] = useState('');

  const handleLogin = async (username, password) => {
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        setIsLoggedIn(true);
        setLoggedInUser(username);
        setLoggedInUserEmail(data.email);
        alert(data.message)
      } else {
        console.log(data.message);
        alert(data.message)
      }
    } catch (error) {
      console.error('Błąd logowania:', error);
    }
  };

  const handleRegister = async (email, username, password) => {
    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, username, password }),
      });

      const data = await response.json();

      alert(data.message)
    } catch (error) {
      console.error('Błąd Rejestracji:', error);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoggedInUser('');
    alert('Wylogowano')
  };

  const handleAdvertisement = () => {

  }

  return (
    <>
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path='/' exact element={
          <Home isLoggedIn={isLoggedIn} loggedInUser={loggedInUser} />
        } />
        <Route path='/Advertisements' element={
          <Advertisements />
        } />
        {isLoggedIn ? (
          <>
            <Route path='/AdvertisementCreate' element={
              <AdvertisementCreate />
            } />
            <Route path='/Logout' element={
              <Logout onLogout={handleLogout}/>
            } />
          </>
        ) : (
          <>
            <Route path='/LoginPage' element={
              <LoginPage handleLogin={handleLogin} />
            } />
            <Route path='/RegisterPage' element={
              <RegisterPage handleRegister={handleRegister}/>
            } />
          </>
        )}
        
        <Route path='/AdvertisementPage' element={
          <AdvertisementPage />
        } />
        
        
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
