const Joi = require('joi');
const Address = require('../../models/address');
const { get } = require('mongoose');

const addressController = {
    async createAddress(req, res, next) {
        const addressSchema = Joi.object({
            user: Joi.string().required(),
            recipientName: Joi.string().min(3).max(30).required(),
            apartment: Joi.string(),
            city: Joi.string().min(2).max(30).required(),
            state: Joi.string().min(2).max(30).required(),
            postalCode: Joi.string().required(),
            country: Joi.string().required(),
            phoneNumber: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
            isDefault: Joi.boolean(),
        });
        const { error } = addressSchema.validate(req.body);
        if (error) {
            return next(error);
        }

        const { user, recipientName, apartment, city, state, postalCode, country, phoneNumber, isDefault } = req.body;

        let AddressDocument;

        try {
            AddressDocument = await Address.create({
                user,
                recipientName,
                apartment,
                city,
                state,
                postalCode,
                country,
                phoneNumber,
                isDefault,
            });
        } catch (error) {
            return next(error);
        }

        res.status(201).json(AddressDocument);
    },

    async getAddresses(req, res, next) {
        let addressDocument;

        try {
            addressDocument = await Address.find();
        } catch (error) {
            return next(error);
        }

        res.status(200).json(addressDocument);
    },

    async getAddress(req, res, next) {
        let addressDocument;

        try {
            addressDocument = await Address.find({ user: req.params.id });
        } catch (error) {
            return next(error);
        }

        res.status(200).json(addressDocument);
    },

    async updateAddress(req, res, next) {
        const { user, recipientName, apartment, city, state, postalCode, country, phoneNumber, isDefault } = req.body;

        let addressDocument;

        try {
            addressDocument = await Address.findByIdAndUpdate(
                req.params.id,
                {
                    user,
                    recipientName,
                    apartment,
                    city,
                    state,
                    postalCode,
                    country,
                    phoneNumber,
                    isDefault,
                },
                { new: true },
            );
        } catch (error) {
            return next(error);
        }

        res.status(201).json(addressDocument);
    },

    async deleteAddress(req, res, next) {
        Address.findByIdAndRemove(req.params.id).then((address) => {
            if (address) {
                return res.status(200).json({ success: true, message: 'Address successfully removed!' });
            } else {
                return res.status(404).json({ success: false, message: 'Address not found!' });
            }
        }).catch((err) => {
            return res.status(500).json({ success: false, error: err });
        });
    }
}

module.exports = addressController;