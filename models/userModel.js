const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: String,
    googleID: String,
    thumbnail: String,
});

const User = mongoose.model('userHieuHuu', userSchema);

module.exports = User;