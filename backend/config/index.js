const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    APP_PORT,
    DB_URL,
    DEBUG_MODE,
    JWT_SECRET,
    REFRESH_JWT_SECRET,
} = process.env;