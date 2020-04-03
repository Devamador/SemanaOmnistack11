const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errors } = require('celebrate');

const app = express();
app.use(cors());
app.use(express.json());//informa q vou utilizar json no corpo da requisição
app.use(routes);
app.use(errors());

module.exports = app;