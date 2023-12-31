const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    APP_PORT,
    DB_URL,
    DEBUG_MODE,
    ACCESS_JWT_SECRET,
    REFRESH_JWT_SECRET,
    FRONTEND_URL,
} = process.env;