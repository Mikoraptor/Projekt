import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdvertisementCreate = ({ handleAdvertisement }) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
    e.preventDefault();
        
    handleAdvertisement(name, description, price, phone, email, address, city);
    alert('Dodano ogłoszenie!')
    navigate('/');
    
    // Wyczyszczenie pól formularza
    setName('');
    setPrice('');
    setDescription('');
    setPhone('');
    setEmail('');
    setAddress('');
    setCity('')
    };

    return (
    <div className='form'>
        <h2>Nowe ogłoszenie</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    id="Name"
                    placeholder='Tytuł Zgłoszenia'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <textarea
                    rows={10}
                    type="text"
                    id="Description"
                    placeholder='Opis Ogłoszenia'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="number"
                    id="Price"
                    placeholder='Proponowana Cena'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="text"
                    id="City"
                    placeholder='Miejscowość'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="text"
                    id="Address"
                    placeholder='Ulica i numer domu/mieszkania'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="tel"
                    id="Phone"
                    placeholder='Numer telefonu do kontaktu'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="email"
                    id="Email"
                    placeholder='Adres Email do kontaktu'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button type="submit">Dodaj Zgłoszenie</button>
        </form>
    </div>
    );

}

export default AdvertisementCreate;
