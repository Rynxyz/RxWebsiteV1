const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/about', (req, res) => {
    res.render('about.ejs');
});

app.get('/commands', (req, res) => {
    res.render('commands.ejs');
});

app.get('/blog', (req, res) => {
    res.render('updates.ejs');
});

app.get('/status', (req, res) => {
    res.render('status.ejs');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
