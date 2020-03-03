const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    thumbnail: String,
    userName: String,
    googleID: String,
}, {
    _id: true,
    timestamps: true
});

const User = mongoose.model('userHieuHuu', userSchema);

module.exports = User;