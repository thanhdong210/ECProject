const mongoose = require('mongoose');

const AdminAccountSchema = mongoose.Schema({
    adminUserName: {
        type: String,
        required: true,
        unique: true
    },
    adminPass: {
        type: String,
        required: true
    },
    adminRole: {
        type: String,
        required: true
    },
    adminName: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('AdminAccount', AdminAccountSchema);