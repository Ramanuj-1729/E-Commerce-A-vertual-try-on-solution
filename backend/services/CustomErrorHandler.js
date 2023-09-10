class CustomErrorHandler extends Error {
    constructur(status, message) {
        Super();
        this.status = status;
        this.message = message;
    }

    static alreadyExist(message) {
        return new CustomErrorHandler(409, message);
    }
}

module.exports = CustomErrorHandler;