const express = require('express');
const compression = require('compression');
// const ejs = require('ejs');

const app = express();
app.disable('x-powered-by');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;

app.use(compression());
app.use(express.json());
app.use(require('./routes'));

app.listen(PORT);
