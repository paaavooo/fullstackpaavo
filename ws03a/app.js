const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

const checkCustomHeader = (req, res, next) => {
    if (!req.headers['x-custom-header']) {
        return res.status(400).json({ error: 'X-Custom-Header is missing' });
    }
    next();
};

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/contact', (req, res) => {
    res.send('Contact Page');
});

app.get('/services', (req, res) => {
    res.send('Services Page');
});

app.post('/submit', checkCustomHeader, (req, res) => {
    const data = req.body;
    res.json({
        message: 'Data received successfully',
        data: data
    });
});

app.get('/list', (req, res) => {
    const filePath = path.join(__dirname, 'data.txt');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file');
        }
        res.send(data);
    });
});

app.get('/json', (req, res) => {
    const filePath = path.join(__dirname, 'data.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file');
        }
        const jsonData = JSON.parse(data);
        let html = '<table border="1"><tr><th>Name</th><th>Email</th></tr>';
        jsonData.forEach(item => {
            html += `<tr><td>${item.name}</td><td>${item.email}</td></tr>`;
        });
        html += '</table>';
        res.send(html);
    });
});

app.post('/add', (req, res) => {
    const newUser = req.body;
    const filePath = path.join(__dirname, 'data.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file');
        }
        const jsonData = JSON.parse(data);
        jsonData.push(newUser);
        fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error writing file');
            }
            res.json({ message: 'User added successfully', user: newUser });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});