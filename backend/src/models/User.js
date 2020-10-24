const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: String,
    action: String
});

module.exports = mongoose.model('User', UserSchema);