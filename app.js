const express = require('express');
const app = express();
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const globalErrorHandler = require('./controllers/errorController')


app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
app.use(express.static(`${__dirname}/public`))
















app.use(globalErrorHandler);
module.exports = app