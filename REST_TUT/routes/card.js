const express = require('express');

const router = express.Router();

const Card = require('../models/Card');

const bodyParser = require('body-parser');

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/:cardId', jsonParser, async(req, res) => {
    try {
        const card = await Card.findById(req.params.cardId);
        res.json(card);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/', async(req, res) => {
    try {
        const card = await Card.find();
        res.json(card);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', jsonParser, (req, res) => {
    const card = new Card({
        cardCode: req.body.cardCode,
        accountNumber: req.body.accountNumber,
        ccvNumber: req.body.ccvNumber,
        pin: req.body.pin,
        balance: req.body.balance,
        cardType: req.body.cardType,
        cardIssueDate: req.body.cardIssueDate,
        status: req.body.status,
        customerUserName: req.body.customerUserName,
        customerID: req.body.customerID,
        bankBIN: req.body.bankBIN
    });

    card.save()
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

router.delete('/:cardId', async(req, res) => {
    try {
        const deleteCard = await Card.deleteOne({ _id: req.params.cardId });
        res.json(deleteCard);
    } catch (err) {
        res.json({ message: err })
    }
});

router.patch('/:cardId', jsonParser, async(req, res) => {
    try {
        const updateCard = await Card.updateOne({ _id: req.params.cardId }, { $set: { balance: req.body.balance } }, { $set: { status: req.body.status } }, { $set: { customerUserName: req.body.customerUserName } }, { $set: { customerID: req.body.customerID } });
        res.json(updateCard);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;