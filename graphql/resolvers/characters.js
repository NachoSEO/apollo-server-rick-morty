const Character = require('../../models/Character');

const getEnumValues = (field, value) => {
  return value
    ? [value]
    : Character.schema.path(field).enumValues;
}

module.exports = {
  Query: {
    async characters(_, { name = '', status, gender }) {
      try {
        const nameRegEx = new RegExp(name, "i");
        const statusEnum = getEnumValues('status', status);
        const genderEnum = getEnumValues('gender', gender);
        const characters = await Character
          .find({
            name: { $regex: nameRegEx },
            status: { $in: statusEnum },
            gender: { $in: genderEnum },
          });

        return characters;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async createCharacter(_, payload) {
      const newCharacter = new Character(payload);

      try {
        const character = await newCharacter.save();
        return character;
      } catch (err) {
        throw new Error(err);
      }
    },
  }
}