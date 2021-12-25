const express = require('express');

const router = express.Router();

const AdminAccount = require('../models/AdminAccount');

const bodyParser = require('body-parser');

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/:adminaccountId', jsonParser, async(req, res) => {
    try {
        const adminaccount = await AdminAccount.findById(req.params.adminaccountId);
        res.json(adminaccount);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/', async(req, res) => {
    try {
        const adminaccount = await AdminAccount.find();
        res.json(adminaccount);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', jsonParser, (req, res) => {
    const adminaccount = new AdminAccount({
        adminUserName: req.body.adminUserName,
        adminPass: req.body.adminPass,
        adminRole: req.body.adminRole,
        adminName: req.body.adminName
    });

    adminaccount.save()
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

router.delete('/:adminaccountId', async(req, res) => {
    try {
        const deleteAdminAccount = await AdminAccount.deleteOne({ _id: req.params.adminaccountId });
        res.json(deleteAdminAccount);
    } catch (err) {
        res.json({ message: err })
    }
});

router.patch('/:adminaccountId', jsonParser, async(req, res) => {
    try {
        const updateAdminAccount = await AdminAccount.updateOne({ _id: req.params.adminaccountId }, { $set: { adminUserName: req.body.adminUserName } }, { $set: { adminPass: req.body.adminPass } }, { $set: { adminRole: req.body.adminRole } }, { $set: { adminName: req.body.adminName } });
        res.json(updateAdminAccount);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;