const Joi = require('joi');
const Address = require('../../models/address');

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

    }
}

module.exports = addressController;