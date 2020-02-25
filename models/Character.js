const { model, Schema } = require('mongoose');

const characterSchema = new Schema({
    name: String,
    image: String,
    status: {
        type: String,
        enum: ['Alive', 'Dead', 'unknown'],
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'unknown'],
    },
});

module.exports = model('Character', characterSchema);