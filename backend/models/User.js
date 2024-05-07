// models/User.js

const mongoose = require('mongoose');
const db = require("../config/db");

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    password: String,
    role: String // 'Admin' or 'Captain'
});

module.exports = mongoose.model('User', userSchema);
