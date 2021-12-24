const mongoose = require('mongoose');

const BankInfoSchema = mongoose.Schema({
    bankBIN: {
        type: Number,
        required: true
    },
    bankNumber: {
        type: Number,
        required: true
    },
    bankName: {
        type: String,
        required: true
    },
    bankEmail: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('BankInfo', BankInfoSchema);