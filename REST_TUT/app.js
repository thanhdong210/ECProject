const express = require('express');

const app = express();

const mongoose = require('mongoose');
require('dotenv/config');

const bodyParser = require('body-parser');

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//middlewares
//app.use('/posts', () => {
//console.log('This middleware is running')
//})

//import routes
const postsRoute = require('./routes/posts');
const deleteRoute = require('./routes/delete');

app.use('/posts', postsRoute);
app.use('/delete', deleteRoute);

//routes
app.get('/', (req, res) => {
    res.send('We are at home page');
})

//.get('/posts', (req, res) => {
//res.send('We are at posts page');
//})

//database
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}, () => {
    console.log('Connected to DB');
})

//mongoose.connect('mongodb://localhost/subscribers');

//listen to server
app.listen(3000);