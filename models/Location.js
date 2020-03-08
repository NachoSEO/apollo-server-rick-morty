const { model, Schema } = require('mongoose');

const locationSchema = new Schema({
    name: String,
});

module.exports = model('Location', locationSchema);