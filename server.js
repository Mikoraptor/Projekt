const express = require('express');
const path = require('path');
const sql = require('mssql');
const argon2 = require('argon2');
const app = express();
const session = require('express-session');
const config = require('./configSQL.json')
const port = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: 'supersecretkey', // Sekret używany do szyfrowania sesji
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, // Ustawienia ciasteczka sesji
  })
);

// Funkcja do porównywania hasła z zahaszowanym hasłem
const comparePassword = async (password, hashedPassword) => {
  try {
    return await argon2.verify(hashedPassword, password);
  } catch (err) {
    console.error('Błąd podczas porównywania hasła:', err);
    throw err;
  }
};


// Funkcja do hashowania hasła
const hashPassword = async (password) => {
  try {
    const options = {
      timeCost: 4,       // Liczba iteracji (kosztu)
      memoryCost: 65536,  // Rozmiar pamięci w KB
      parallelism: 4,    // Liczba wątków
      hashLength: 40    //długość hasha w bajtach
    };
    return await argon2.hash(password, options);
  } catch (err) {
    console.error('Błąd podczas hashowania hasła:', err);
    throw err;
  }
};


// Obsługa żądania logowania
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    await sql.connect(config);
    const result = await sql.query(`SELECT * FROM users WHERE username = \'${username}\'`);
    if (result.recordset.length > 0) {
      var user = result.recordset[0];
      //console.log(user);
      var isPasswordCorrect = await comparePassword(password, user.password);

      if (isPasswordCorrect) {
        //req.session.user = user;
        res.json({ success: true, message: 'Zalogowano pomyślnie!', email: user.email, id: user.id });
      } else {
        res.json({ success: false, message: 'Błędne hasło!' });
      } 
    } else {
      res.json({ success: false, message: 'Błędne dane logowania!' });
      
    }
  } catch (err) {
    console.error('Błąd weryfikacji logowania:', err);
    res.json({ success: false, message: 'Wystąpił błąd podczas weryfikacji logowania.' });
  } finally {
    sql.close();
  }
});

// Funkcja do tworzenia użytkownika w bazie danych
app.post('/register', async (req, res) => {
  const { email, username, password } = req.body;
  try {
    await sql.connect(config);
    const result = await sql.query(`SELECT * FROM users WHERE username = \'${username}\' OR email = \'${email}\'`);
    if (result.recordset.length == 0) {
      // Wykonanie zapytania SQL do utworzenia nowego użytkownika w tabeli
      const hashedPassword = await hashPassword(password);
      await sql.query(`INSERT INTO users (email, username, password) VALUES (\'${email}\', \'${username}\', \'${hashedPassword}\')`);
      res.json({ message: 'Konto utworzone pomyślnie' })
    } else [
      res.json({ message: 'Użytkownik o takiej nazwie lub adresie email już istnieje' })
    ]
    
  } catch (err) {
    console.error('Błąd tworzenia użytkownika:', err);
    throw err;
  } finally {
    sql.close();
  }
  
})
//Obsługa tworzenia nowego ogłoszenia
app.post('/create', async (req, res) => {
  const { name, description, price, phone, email, address, city, owner } = req.body;
  try {
    await sql.connect(config);
    await sql.query(`INSERT INTO Advertisements (owner_id, name, description, price, phone, email, city, address) VALUES (\'${owner}\', \'${name}\', \'${description}\', \'${price}\', \'${phone}\', \'${email}\', \'${city}\', \'${address}\')`);
    
  } catch (err) {
    console.error('Błąd Tworzenia zgłoszenia:', err);
    res.json({ success: false, message: 'Wystąpił błąd podczas tworzenia zgłoszenia.' });
  } finally {
    sql.close();
  }
})
//Obsługa wyświetlania ogłoszenia według id
app.post('/read', async (req, res) => {
  const { id } = req.body;
  try {
    await sql.connect(config);
    const result = await sql.query(`SELECT * FROM Advertisements WHERE id=\'${id}\'`);
    
    
    res.json(result.recordset[0]);
    //console.log(result.recordset[0])
    
    
  } catch (err) {
    console.error('Błąd wczytywania zgłoszenia:', err);
    res.json({ success: false, message: 'Wystąpił błąd wczytywania zgłoszenia.' });
  } finally {
    sql.close();
  }
})
//obsługa wyświetlania skrótów do wielu ogłoszeń
app.post('/show', async (req, res) => {
  const { page } = req.body;
  try {
    await sql.connect(config);
    const result = await sql.query(`SELECT * FROM Advertisements`);
    res.json(result.recordset);
    //console.log(result.recordset)
  } catch (err) {
    console.error('Błąd wczytywania zgłoszeń:', err);
    res.json({ success: false, message: 'Wystąpił błąd wczytywania zgłoszeń.' });
  } finally {
    sql.close();
  }
})




// Serwowanie plików statycznych z folderu 'client/build'
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Oddelegowanie obsługi ścieżek do reacta 
app.use((req, res) => {
  res.sendFile(path.join(__dirname,'client', 'build', 'index.html'));
});

// Uruchamianie serwera
app.listen(port, () => {
  console.log(`Serwer uruchomiony na porcie ${port}`);
});
