const Joi = require('joi');
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
    },

    async getAllCategories(req, res, next) {
        let categoryDocuments;

        try {
            categoryDocuments = await Category.find();
        } catch(err) {
            return next(err);
        }

        res.status(200).json(categoryDocuments);
    },

    async getCategory(req, res, next) {
        let categoryDocument;

        try {
            categoryDocument = await Category.findById(req.params.id);
        } catch(err) {
            return next(err);
        }

        res.status(200).json(categoryDocument);
    },

    async updateCategory(req, res, next) {
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
            categoryDocument = await Category.findByIdAndUpdate(req.params.id, {
                name
            }, {
                new: true
            });
        } catch(err) {
            return next(err);
        }

        res.status(200).json(categoryDocument);
    },

    async deleteCategory(req, res, next) {
        Category.findByIdAndRemove(req.params.id).then((category) => {
            if (category) {
                return res.status(200).json({ success: true, message: 'Category successfully removed!' });
            } else {
                return res.status(404).json({ success: false, message: 'Category not found!' });
            }
        }).catch((err) => {
            return res.status(500).json({ success: false, error: err });
        });
    }
}

module.exports = categoryController;