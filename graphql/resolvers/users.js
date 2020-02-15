const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');

const { SECRET } = require('../../config');
const User = require('../../models/User');
const {
    validateLoginPayload,
    validateRegisterPayload,
} = require('../../utils/validators');

function generateToken(user) {
    return jwt.sign({
        id: user.id,
        username: user.username
    }, SECRET, { expiresIn: '2h' });
}

module.exports = {
    Mutation: {
        async login(_, payload) {
             const { valid, errors } = validateLoginPayload(payload);

            if (!valid) {
                throw new UserInputError('Fields not valid', { errors });
            }

            const { username, password } = payload;
            const user = await User.findOne({ username });

            if (!user) {
                errors.general = 'User not found';
                throw new Error('User not found', { errors });
            }

            const validCredentials = await bcrypt.compare(password, user.password);

            if (!validCredentials) {
                errors.general = 'Invalid credentials';
                throw new UserInputError('Invalid credentials', { errors });
            }

            return {
                ...user._doc,
                id: user.id,
                token: generateToken(user)
            };
        },
        async register(_, { payload }) {
            const { valid, errors } = validateRegisterPayload(payload);

            if (!valid) {
                throw new UserInputError('Errors', { errors });
            }

            let { username, password } = payload;
            password = await bcrypt.hash(password, 12);

            let user = await User.findOne({ username });

            if (user) {
                throw new UserInputError('The username is already taken', {
                    errors: {
                        username: 'The username is already taken'
                    }
                });
            }

            user = new User({ username, password });
            const res = await user.save();

            return {
                ...res._doc,
                id: res.id,
                token: generateToken(res)
            }
        }
    }
}