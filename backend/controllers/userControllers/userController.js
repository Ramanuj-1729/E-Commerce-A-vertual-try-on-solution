const User = require("../../models/user");
const CustomErrorHandler = require("../../services/CustomErrorHandler");
const bcrypt = require("bcrypt");

const userController = {
    async getUsers(req, res, next) {
        try {
            const users = await User.find().select('-password -updatedAt -__v');
            if (!users) {
                return next(CustomErrorHandler.notFound());
            }
            res.json(users);
        } catch (err) {
            return next(err);
        }
    },

    async getUser(req, res, next) {
        try {
            const user = await User.findOne({ _id: req.params.id }).select('-password -updatedAt -__v');

            if(!user) {
                return next(CustomErrorHandler.notFound());
            }
            res.json(user);
        } catch (error) {
            return next(error);
        }
    },

    async updateUser(req, res, next) {
        const user = await User.findById(req.params.id);

        let newPassword;
        if(req.body.password){
            newPassword = bcrypt.hashSync(req.body.password, 10);
        } else {
            newPassword = user.password;
        }

        const { firstName, lastName, email, password, isAdmin } = req.body;

        let userDocument;

        try {
            userDocument = await User.findByIdAndUpdate(
                req.params.id,
                {
                    firstName,
                    lastName,
                    email,
                    password: newPassword,
                    isAdmin,
                },
                { new: true },
            )
        } catch (error) {
            return next(error);
        }

        res.status(201).json(userDocument);
    },

    async deleteUser(req, res, next) {
        User.findByIdAndRemove(req.params.id).then((user) => {
            if (user) {
                return res.status(200).json({ success: true, message: 'User successfully removed!' });
            } else {
                return res.status(404).json({ success: false, message: 'USER not found!' });
            }
        }).catch((err) => {
            return res.status(500).json({ success: false, error: err });
        });
    }
};

module.exports = userController;