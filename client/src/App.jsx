import React, { useState } from 'react';
import { useNavigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
  const [loggedInUserId, setLoggedInUserId] = useState(null);
  

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
        setIsLoggedIn(true)
        setLoggedInUser(username)
        setLoggedInUserEmail(data.email)
        setLoggedInUserId(data.id)
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

  const handleAdvertisement = async (name, description, price ,phone, email, address, city, owner=loggedInUserId) => {
    try {
      const response = await fetch('/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, description, price, phone, email, address, city, owner }),
      });

      const data = await response.json();

      alert(data.message)
    } catch (error) {
      console.error('Błąd tworzenia ogłoszenia:', error);
    }
  }

  const handleAdvertisementShow = async ( page ) => {
    try {
      const response = await fetch('/show', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ page }),
      });

      const data = await response.json();
      //console.log(data)
      return data
      
    } catch (error) {
      console.error('Błąd wyświetlania ogłoszenia:', error);
    }
  }

  const handleAdvertisementPage = async ( id ) => {
    
    try {
      const response = await fetch('/read', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      const data = await response.json();
      return data
      
      //alert(data.name)
      //console.log(data.name)
    } catch (error) {
      console.error('Błąd wyświetlania ogłoszenia:', error);
    }
  }

  return (
    <>
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path='/' exact element={
          <Home isLoggedIn={isLoggedIn} loggedInUser={loggedInUser} />
        } />
        {isLoggedIn ? (
          <>
            <Route path='/AdvertisementCreate' element={
              <AdvertisementCreate handleAdvertisement={handleAdvertisement}/>
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
        
        <Route path='/AdvertisementPage/:id' element={
          <AdvertisementPage AdvertisementPage={handleAdvertisementPage}/>
        } />

        <Route path='/Advertisements/:page' element={
          <Advertisements  Advertisements={handleAdvertisementShow}/>
        } />
        <Route path='*' element={
          <Home isLoggedIn={isLoggedIn} loggedInUser={loggedInUser} />
        } />

      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
