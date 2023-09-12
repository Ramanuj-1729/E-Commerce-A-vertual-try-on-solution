const Product = require('../../models/product');
const CustomErrorHandler = require('../../services/CustomErrorHandler');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Category = require('../../models/category');
const { log } = require('console');

const FILE_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg'
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const isValid = FILE_TYPE_MAP[file.mimetype];
        let uploadError = new Error('Invalid image type!');

        if (isValid) {
            uploadError = null;
        }

        cb(uploadError, 'uploads/product');
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        const extension = FILE_TYPE_MAP[file.mimetype];
        cb(null, `${uniqueName}.${extension}`)
    },
});

const handleMultipartData = multer({
    storage,
    limits: { fileSize: 1000000 * 10 },
});

const productController = {
    async createProdcut(req, res, next) {
        handleMultipartData.single('image')(req, res, async (err) => {
            if (err) {
                return next(CustomErrorHandler.serverError(err.message));
            }
            const file = req.file;
            const _category = await Category.findById(req.body.category);
            if (!_category) {
                fs.unlink(`${appRoot}/${file.path}`, (err) => {
                    if (err) {
                        return next(CustomErrorHandler.serverError(err.message));
                    }
                });
                return next(CustomErrorHandler.notFound('Category not found!'));
            }

            if (!file) return next(CustomErrorHandler.notFound('Please upload a file!'));

            const { name, description, colors, sizes, brand, price, category, countInStock, rating, numReviews, isFeatured } = req.body;

            let productDocument;

            try {
                productDocument = await Product.create({
                    name,
                    description,
                    image: file.path,
                    colors,
                    sizes,
                    brand,
                    price,
                    category,
                    countInStock,
                    rating,
                    numReviews,
                    isFeatured,
                });
            } catch (error) {
                fs.unlink(`${appRoot}/${file.path}`, (err) => {
                    if (err) {
                        return next(CustomErrorHandler.serverError(err.message));
                    }
                });
                return next(error);
            }

            res.status(201).json(productDocument);
        })
    }
}

module.exports = productController;