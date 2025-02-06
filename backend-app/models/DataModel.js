const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true }
}, { timestamps: true });

const DataModel = mongoose.model('User', DataSchema);
module.exports = DataModel;
