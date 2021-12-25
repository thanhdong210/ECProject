const mongoose = require('mongoose');

const TransactionSchema = mongoose.Schema({
    customerID: {
        type: Number,
        required: true,
        unique: true
    },
    accountNumber: {
        type: Number,
        required: true,
        unique: true
    },
    customerUserName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    operation: {
        type: Number,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    bankNameTarget: {
        type: String,
        default: Date.now
    },
    customerNumberTaget: {
        type: Number,
        required: true
    },
    customerNameTarget: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Transaction', TransactionSchema);