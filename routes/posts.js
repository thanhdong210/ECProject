const express = require('express');

const router = express.Router();

const Post = require('../models/Posts');

const bodyParser = require('body-parser');

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/:postId', jsonParser, async(req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }
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
            res.json({ message: error });
            //res.send('welcome, ' + req.body.title);
        });

    console.log(req.body);
    //res.send('welcome, ' + req.body.title);
});

router.get('/', async(req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/:postId', async(req, res) => {
    try {
        const post = await Post.findById(req.params.postId);

        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }

});

router.delete('/:postId', async(req, res) => {
    try {
        const deletePost = await Post.deleteOne({ _id: req.params.postId });
        res.json(deletePost);
    } catch (err) {
        res.json({ message: err })
    }
});

router.patch('/:postId', jsonParser, async(req, res) => {
    try {
        const updatePost = await Post.updateOne({ _id: req.params.postId }, { $set: { title: req.body.title } });
        res.json(updatePost);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;