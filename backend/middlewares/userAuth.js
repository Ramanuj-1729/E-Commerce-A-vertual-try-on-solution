const CustomErrorHandler = require('../services/CustomErrorHandler');
const TokenService = require('../services/TokenService');

const userAuth = async (req, res, next) => {
    let authHeader = req.headers.authorization;
    if (!authHeader) {
        return next(CustomErrorHandler.unAuthorized());
    }

    const token = authHeader.split(' ')[1];

    try {
        const { _id, isAdmin } = await TokenService.verifyAccessToken(token);
        const user = {
            _id,
            isAdmin
        }
        console.log(user);
        req.user = user;
        next();

    } catch (err) {
        return next(CustomErrorHandler.unAuthorized());
    }

}

module.exports = userAuth;