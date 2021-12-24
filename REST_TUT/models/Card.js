const mongoose = require('mongoose');

const CardSchema = mongoose.Schema({
    cardCode: {
        type: Number,
        required: true,
        unique: true
    },
    accountNumber: {
        type: Number,
        required: true,
        unique: true
    },
    ccvNumber: {
        type: Number,
        required: true
    },
    pin: {
        type: Number,
        required: true
    },
    balance: {
        type: Number,
        required: true
    },
    cardType: {
        type: String,
        required: true
    },
    cardIssueDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: Number,
        required: true
    },
    customerUserName: {
        type: String,
        required: true
    },
    customerID: {
        type: Number,
        required: true
    },
    bankBIN: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Card', CardSchema);