const express = require('express');

const router = express.Router();

const Transaction = require('../models/Transaction');

const bodyParser = require('body-parser');

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/:transactionId', jsonParser, async(req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.transactionId);
        res.json(transaction);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/', async(req, res) => {
    try {
        const transaction = await Transaction.find();
        res.json(transaction);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', jsonParser, (req, res) => {
    const transaction = new Transaction({
        customerID: req.body.customerID,
        accountNumber: req.body.accountNumber,
        customerUserName: req.body.customerUserName,
        date: req.body.date,
        type: req.body.type,
        operation: req.body.operation,
        amount: req.body.amount,
        bankNameTarget: req.body.bankNameTarget,
        customerNumberTaget: req.body.customerNumberTaget,
        customerNameTarget: req.body.customerNameTarget
    });

    transaction.save()
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

router.delete('/:transactionId', async(req, res) => {
    try {
        const deleteTransaction = await Transaction.deleteOne({ _id: req.params.transactionId });
        res.json(deleteTransaction);
    } catch (err) {
        res.json({ message: err })
    }
});

router.patch('/:transactionId', jsonParser, async(req, res) => {
    try {
        const updateTransaction = await Transaction.updateOne({ _id: req.params.transactionId }, { $set: { customerID: req.body.customerID } }, { $set: { accountNumber: req.body.accountNumber } }, { $set: { customerUserName: req.body.customerUserName } }, { $set: { type: req.body.type } }, { $set: { operation: req.body.operation } }, { $set: { amount: req.body.amount } }, { $set: { bankNameTarget: req.body.bankNameTarget } }, { $set: { customerNumberTaget: req.body.customerNumberTaget } }, { $set: { customerNameTarget: req.body.customerNameTarget } });
        res.json(updateTransaction);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;