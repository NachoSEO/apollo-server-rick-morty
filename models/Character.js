
const { model, Schema } = require('mongoose');
const Location = require('./Location');

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
    location: {
        type: Schema.Types.ObjectId,
        ref: 'Location'
    }
});

module.exports = model('Character', characterSchema);