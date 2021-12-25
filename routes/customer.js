const express = require('express');

const router = express.Router();

const Customer = require('../models/Customer');

const bodyParser = require('body-parser');

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/:customerId', jsonParser, async(req, res) => {
    try {
        const customer = await Customer.findById(req.params.customerId);
        res.json(customer);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/', async(req, res) => {
    try {
        const customers = await Customer.find();
        res.json(customers);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', jsonParser, (req, res) => {
    const customer = new Customer({
        customerName: req.body.customerName,
        customerPhone: req.body.customerPhone,
        customerMail: req.body.customerMail,
        customerBoD: req.body.customerBoD,
        customerJob: req.body.customerJob,
        customerIdentificationNumber: req.body.customerIdentificationNumber,
        customerCountry: req.body.customerCountry,
        customerCity: req.body.customerCity,
        customerDistrict: req.body.customerDistrict,
        customerWard: req.body.customerWard,
        customerStreet: req.body.customerStreet,
        customerAddress: req.body.customerAddress,
        customerUserName: req.body.customerUserName,
        customerPass: req.body.customerPass,
        customerCardID: req.body.customerCardID
    });

    customer.save()
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

router.delete('/:customerId', async(req, res) => {
    try {
        const deleteCustomer = await Customer.deleteOne({ _id: req.params.customerId });
        res.json(deleteCustomer);
    } catch (err) {
        res.json({ message: err })
    }
});

router.patch('/:customerId', jsonParser, async(req, res) => {
    try {
        const updateCustomer = await Customer.updateOne({ _id: req.params.customerId }, { $set: { customerName: req.body.customerName } });
        res.json(updateCustomer);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;