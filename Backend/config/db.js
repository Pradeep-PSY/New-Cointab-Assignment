const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', true)

const connection = mongoose.connect("mongodb+srv://pradeepD:pradeep123@cluster0.r7tllok.mongodb.net/cointablol?retryWrites=true&w=majority");

module.exports = connection;