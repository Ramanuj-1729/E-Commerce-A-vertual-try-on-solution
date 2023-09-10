const jwt = require('jsonwebtoken');
const { ACCESS_JWT_SECRET,  REFRESH_JWT_SECRET } = require('../config');
const refreshTokenModel = require('../models/refreshToken');

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, ACCESS_JWT_SECRET, {
            expiresIn: '1h',
        });

        const refreshToken = jwt.sign(payload, REFRESH_JWT_SECRET, {
            expiresIn: '1y',
        });

        return { accessToken, refreshToken };
    }

    async storeRefreshToken(token, userId) {
        try {
            await refreshTokenModel.create({
                refreshToken: token,
                userId
            });
        } catch (error) {
            console.log(error);
        }
    }

    async verifyAccessToken(token) {
        return jwt.verify(token, ACCESS_JWT_SECRET);
    }

    async verifyRefreshToken(token) {
        return jwt.verify(token, REFRESH_JWT_SECRET);
    }

    async findRefreshToken(userId, refreshToken) {
        return await refreshTokenModel.findOne({ userId, refreshToken });
    }

    async updateRefreshToken(refreshToken, userId) {
        return await refreshTokenModel.updateOne({ userId }, { refreshToken });
    }

    async removeToken(refreshToken) {
        return await refreshTokenModel.deleteOne({ refreshToken });
    }
}

module.exports = new TokenService();