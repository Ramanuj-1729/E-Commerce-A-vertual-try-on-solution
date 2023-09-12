const Joi = require('joi');
const Product = require('../../models/product');
const CustomErrorHandler = require('../../services/CustomErrorHandler');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Category = require('../../models/category');

const categoryController = {
    async createCategory(req, res, next) {
        const categorySchema = Joi.object({
            name: Joi.string().required()
        });

        const { error } = categorySchema.validate(req.body);

        if(error) {
            return next(error);
        }

        const { name } = req.body;

        let categoryDocument;

        try {
            categoryDocument = await Category.create({
                name
            });
        } catch(err) {
            return next(err);
        }

        res.status(201).json(categoryDocument);
    }
}

module.exports = categoryController;