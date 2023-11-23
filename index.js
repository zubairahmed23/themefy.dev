const express = require('express');

const app = express();
const port = 4000;

app.listen(port);

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
});