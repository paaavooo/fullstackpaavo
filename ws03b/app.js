const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    const message = 'Tervetuloa EJS testailuuni';
    const users = [
        { name: 'Maija Mehiläinen', email: 'maija.mehilainen@example.com' },
        { name: 'Monni Mönkijä', email: 'monni.monkija@example.com' },
        { name: 'Kari Häkkinen', email: 'kari.hakkinen@example.com' },
        { name: 'Patrik Tähtinen', email: 'patrik.tahtinen@example.com' }
    ];
    const isLoggedIn = true; // tästä vaihtuu kirjautumisen tila
    res.render('index', { message, users, isLoggedIn });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});