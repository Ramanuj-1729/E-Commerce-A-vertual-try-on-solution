const Joi = require('joi');
const bcrypt = require('bcrypt');
const User = require('../../models/user');
const CustomErrorHandler = require('../../services/CustomErrorHandler');
const TokenService = require('../../services/TokenService');

const registerController = {
    async register(req, res, next) {
        // Validate user input
        const registerSchema = Joi.object({
            firstName: Joi.string().min(3).max(30).required(),
            lastName: Joi.string().min(3).max(30).required(),
            email: Joi.string().email().required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
            isAdmin: Joi.boolean().default(false),
        });
        const { error } = registerSchema.validate(req.body);
        if (error) {
            return next(error);
        }

        // Check if user already exists in database
        try {
            const exist = await User.exists({ email: req.body.email });
            if (exist) {
                return next(CustomErrorHandler.alreadyExist('This email is already taken.'));
            }
        } catch (error) {
            return next(error);
        }

        // Create new user
        const { firstName, lastName, email, password, isAdmin } = req.body;

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            isAdmin,
        });

        //Save user to database and generate token
        let access;
        let refresh;
        try {
            const result = await user.save();
            const {accessToken, refreshToken} = TokenService.generateTokens({ _id: result._id, });
            access = accessToken;
            refresh = refreshToken;
            await TokenService.storeRefreshToken(refresh, result._id);
        } catch (error) {
            return next(error);
        }

        // Send response
        res.json({ access, refresh });
    }
}

module.exports = registerController;