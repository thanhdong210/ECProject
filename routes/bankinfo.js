const express = require('express');

const router = express.Router();

const BankInfo = require('../models/BankInfo');

const bodyParser = require('body-parser');

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/:bankinfoId', jsonParser, async(req, res) => {
    try {
        const bankinfo = await BankInfo.findById(req.params.bankinfoId);
        res.json(bankinfo);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/', async(req, res) => {
    try {
        const bankinfo = await BankInfo.find();
        res.json(bankinfo);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', jsonParser, (req, res) => {
    const bankinfo = new BankInfo({
        bankBIN: req.body.bankBIN,
        bankNumber: req.body.bankNumber,
        bankName: req.body.bankName,
        bankEmail: req.body.bankEmail
    });

    bankinfo.save()
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

router.delete('/:bankinfoId', async(req, res) => {
    try {
        const deleteBankInfo = await BankInfo.deleteOne({ _id: req.params.bankinfoId });
        res.json(deleteBankInfo);
    } catch (err) {
        res.json({ message: err })
    }
});

router.patch('/:bankinfoId', jsonParser, async(req, res) => {
    try {
        const updateBankInfo = await BankInfo.updateOne({ _id: req.params.bankinfoId }, { $set: { bankBIN: req.body.bankBIN } }, { $set: { bankNumber: req.body.bankNumber } }, { $set: { bankName: req.body.bankName } }, { $set: { bankEmail: req.body.bankEmail } });
        res.json(updateAdminAccount);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;