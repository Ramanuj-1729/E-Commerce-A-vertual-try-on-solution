const loginController = {
    async login (req, res, next) {
        res.json({message: 'Login controller'});
    }
}

module.exports = loginController;