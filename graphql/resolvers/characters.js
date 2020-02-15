const Character = require ('../../models/Character');

module.exports = {
    Query: {
        async getCharacters() {
            try {
                const characters = await Character.find();
                return characters;
            } catch (err) {
                throw new Error(err);
            }
        }
    }
}