const Character = require('../../models/Character');

module.exports = {
  Query: {
    async characters() {
      try {
        const characters = await Character.find();

        return characters;
      } catch (err) {
        throw new Error(err);
      }
    },
    async character(_, { id }) {
      try {
        const character = await Character.findById(id);

        if (!character) {
          throw new Error('Character not found');
        }

        return character;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async createCharacter(_, { payload }) {
      const newCharacter = new Character(payload);

      try {
        const character = await newCharacter.save();
        return character;
      } catch (err) {
        throw new Error(err);
      }
    },
    async deleteCharacter(_, { id }) {
      try {
        const character = await Character.findById(id);
        await character.delete();

        return "Character deleted successfully"
      } catch (err) {
        throw new Error(err);
      }
    }
  }
}