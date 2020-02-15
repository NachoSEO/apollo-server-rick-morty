const { model, Schema } = require('mongoose');

const characterSchema = new Schema({
    name: String,
    status: String,
});

module.exports = model('Character', characterSchema);