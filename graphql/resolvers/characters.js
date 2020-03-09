const Character = require('../../models/Character');

const getEnumValues = (field, value) => {
  return value
    ? [value]
    : Character.schema.path(field).enumValues;
}

module.exports = {
  Query: {
    characters: async (_, { name = '', status, gender }) => {
      try {
        const nameRegEx = new RegExp(name, "i");
        const statusEnum = getEnumValues('status', status);
        const genderEnum = getEnumValues('gender', gender);
        const characters = await Character
          .find({
            name: { $regex: nameRegEx },
            status: { $in: statusEnum },
            gender: { $in: genderEnum },
          })
          .populate('location')
        ;
        return characters;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    createCharacter: async (_, payload) => {
      const newCharacter = new Character(payload);

      try {
        const character = await newCharacter.save();

        return character;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
}