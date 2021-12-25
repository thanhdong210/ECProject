const mongoose = require('mongoose');

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const CustomerSchema = mongoose.Schema({
    customerName: {
        type: String,
        required: true
    },
    customerPhone: {
        type: Number,
        required: true
    },
    customerMail: {
        type: String,
        required: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    customerBoD: {
        type: Date,
        required: true
    },
    customerJob: {
        type: String,
        required: true
    },
    customerIdentificationNumber: {
        type: Number,
        required: true
    },
    customerCountry: {
        type: String,
        required: true
    },
    customerCity: {
        type: String,
        required: true
    },
    customerDistrict: {
        type: String,
        required: true
    },
    customerWard: {
        type: String,
        required: true
    },
    customerStreet: {
        type: String,
        required: true
    },
    customerAddress: {
        type: String,
        required: true
    },
    customerUserName: {
        type: String,
        required: true
    },
    customerPass: {
        type: String,
        required: true
    },
    customerCardID: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Customer', CustomerSchema);