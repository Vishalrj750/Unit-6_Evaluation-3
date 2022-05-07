const mongoose = require('mongoose');

const comment = new mongoose.Schema({
    body: { type: Number, required: true },
    timeStamps: { type: String, required: true }
})

module.exports = mongoose.model('comment', comment);