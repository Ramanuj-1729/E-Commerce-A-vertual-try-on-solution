const { FRONTEND_URL } = require('../../config');
const Product = require('../../models/product');
const CustomErrorHandler = require('../../services/CustomErrorHandler');
const multer = require('multer');
const fs = require('fs');
const Category = require('../../models/category');
const mongoose = require('mongoose');

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
                    image: `http://localhost:5000/${file.path}`,
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
    },

    async updateProductImage(req, res, next) {
        handleMultipartData.single('image')(req, res, async (err) => {
            if (err) {
                return next(CustomErrorHandler.serverError(err.message));
            }

            if (!mongoose.isValidObjectId(req.params.id)) {
                return next(CustomErrorHandler.notFound('Invalid Product Id!'));
            }

            const file = req.file;

            if (!file) return next(CustomErrorHandler.notFound('Please upload a file!'));

            const product = await Product.findByIdAndUpdate(
                req.params.id,
                {
                    image: `http://localhost:5000/${file.path}`,
                },
                { new: true },
            );

            if (!product) {
                fs.unlink(`${appRoot}/${file.path}`, (err) => {
                    if (err) {
                        return next(CustomErrorHandler.serverError(err.message));
                    }
                });
                return next(CustomErrorHandler.notFound('Product not found!'));
            }

            res.status(200).json(product);
        });
    },

    async updateProductImages(req, res, next) {
        handleMultipartData.array('images', 5)(req, res, async (err) => {
            if (err) {
                return next(CustomErrorHandler.serverError(err.message));
            }

            if (!mongoose.isValidObjectId(req.params.id)) {
                return next(CustomErrorHandler.notFound('Invalid Product Id!'));
            }

            const files = req.files;
            let imagesPaths = [];

            if (files) {
                files.map(file => {
                    imagesPaths.push(`http://localhost:5000/${file.path}`);
                });
            }

            const product = await Product.findByIdAndUpdate(
                req.params.id,
                {
                    images: imagesPaths,
                },
                { new: true },
            );

            if (!product) {
                return next(CustomErrorHandler.notFound('Product not found!'));
            }

            res.status(200).json(product);
        });
    },

    async getProducts(req, res, next) {
        let productList;

        try {
            productList = await Product.find().populate('category');
        } catch (error) {
            return next(CustomErrorHandler.serverError());
        }
        res.send(productList);
    },

    async getProduct(req, res, next) {
        let product;

        try {
            product = await Product.findById(req.params.id).populate('category');
        } catch (error) {
            return next(CustomErrorHandler.serverError());
        }

        if (!product) {
            return next(CustomErrorHandler.notFound('Product not found!'));
        }

        res.send(product);
    },

    async updateProduct(req, res, next) {
        if (!mongoose.isValidObjectId(req.params.id)) {
            return next(CustomErrorHandler.notFound('Invalid Product Id!'));
        }

        const _category = await Category.findById(req.body.category);
        if (!_category) {
            return next(CustomErrorHandler.notFound('Category not found!'));
        }

        const { name, description, colors, sizes, brand, price, category, countInStock, rating, numReviews, isFeatured } = req.body;

        let updatedProduct;

        try {
            updatedProduct = await Product.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true },
            );
        } catch (error) { }
    },

    async deleteProduct(req, res, next) {
        Product.findByIdAndRemove(req.params.id).then((product) => {
            if (product) {
                return res.status(200).json({ success: true, message: 'Product successfully removed!' });
            } else {
                return res.status(404).json({ success: false, message: 'Product not found!' });
            }
        }).catch((err) => {
            return res.status(500).json({ success: false, error: err });
        });
    }
}

module.exports = productController;