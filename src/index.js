require('dotenv').config()
const express = require('express');
const rotas = require('./rotas');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"),
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST')
    app.use(cors());
    next();
})
app.use(rotas);

// app.listen(8000);

app.listen(process.env.PORT || 3000);