const express = require('express');

const app = express();

const mongoose = require('mongoose');
require('dotenv/config');

const bodyParser = require('body-parser');

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//app.use(bodyParser);

//middlewares
//app.use('/posts', () => {
//console.log('This middleware is running')
//})

//import routes
const postsRoute = require('./routes/posts');
const customerRoute = require('./routes/customer');
const cardRoute = require('./routes/card');
const transactionRoute = require('./routes/transaction');
const adminaccountRoute = require('./routes/adminaccount');
const bankinfoRoute = require('./routes/bankinfo');


app.use('/posts', postsRoute);
app.use('/customer', customerRoute);
app.use('/card', cardRoute);
app.use('/transaction', transactionRoute);
app.use('/adminaccount', adminaccountRoute);
app.use('/bankinfo', bankinfoRoute);

//routes
app.get('/', (req, res) => {
    res.send('We are at home page');
})

//.get('/posts', (req, res) => {
//res.send('We are at posts page');
//})

//database
async function connect() {
    try {
        await mongoose.connect(
            process.env.DB_URL
        );
        console.log("connect successfully!");
    } catch (error) {
        console.log(error);
    }
}

//mongoose.connect('mongodb://localhost/subscribers');

//listen to server
app.listen(3000, async() => {
    console.log(process.env.DB_URL);
    await connect();
});