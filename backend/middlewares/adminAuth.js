const CustomErrorHandler = require('../services/CustomErrorHandler');
const TokenService = require('../services/TokenService');

const adminAuth = async (req, res, next) => {
    let authHeader = req.headers.authorization;
    if (!authHeader) {
        return next(CustomErrorHandler.unAuthorized());
    }

    const token = authHeader.split(' ')[1];

    try {
        const { _id, isAdmin } = await TokenService.verifyAccessToken(token);
        if(isAdmin){
            const user = {
                _id,
                isAdmin
            }
            req.user = user;
            next();
        } else {
            return next(CustomErrorHandler.unAuthorized());
        }

    } catch (err) {
        return next(CustomErrorHandler.unAuthorized());
    }

}

module.exports = adminAuth;