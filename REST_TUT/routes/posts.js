const express = require('express');

const router = express.Router();

const Post = require('../models/Posts');

const bodyParser = require('body-parser');

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    res.send(post);
});

router.get('/specify', (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    res.send(post);
});

router.post('/', jsonParser, (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    post.save()
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            //res.json({ message: error });
            res.send('welcome, ' + req.body.title);
        });

    console.log(req.body);
    //res.send('welcome, ' + req.body.title);
});

module.exports = router;