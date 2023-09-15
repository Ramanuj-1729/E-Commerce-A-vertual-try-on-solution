const Joi = require('joi');
const bcrypt = require('bcrypt');
const User = require('../../models/user');
const CustomErrorHandler = require('../../services/CustomErrorHandler');
const TokenService = require('../../services/TokenService');

const loginController = {
    async login(req, res, next) {
        // Validate user input
        const loginSchema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        });
        const { error } = loginSchema.validate(req.body);
        if (error) {
            return next(error);
        }

        try {
            // Find user in database
            const user = await User.findOne({ email: req.body.email });
            if (!user) {
                return next(CustomErrorHandler.wrongCredentials('Email or password is wrong!'));
            }

            // Check if password is correct
            const match = await bcrypt.compare(req.body.password, user.password);
            if (!match) {
                return next(CustomErrorHandler.wrongCredentials('Password is wrong!'));
            }

            // Generate tokens
            const { accessToken, refreshToken } = TokenService.generateTokens({ _id: user._id, isAdmin: user.isAdmin });
            await TokenService.storeRefreshToken(refreshToken, user._id);
            res.json({ accessToken, refreshToken });
        } catch (error) {
            return next(error);
        }
    }
}

module.exports = loginController;