const Product = require("../model/Product");

const getAllProduct = async (req, res, next) => {
    try {
        const products = await Product.find();
        res.status(200).json({ status: 200, data: products });
    } catch (error) {
        res.status(400).json({ status: 400, message: error.message });
    }
}

const getProductById = async (req, res, next) => {

    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json({ status: 200, data: product });
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

const createProduct = async (req, res, next) => {
    const newProduct = new Product({
        title: req.body.title,
        price: req.body.price,
        image: req.body.image,
        details: req.body.details
    })
    try {
        const product = await newProduct.save();
        res.status(201).json({ status: 201, data: product });
    } catch (error) {
        res.status(400).json({ status: 400, message: error.message });
    }
}

const updateProduct = async (req, res, next) => {

    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        if (product) {
            res.status(200).json({
                status: 200,
                data: product
            })
        }
        else {
            res.status(400).json({
                status: 400,
                message: "Not product found"
            })
        }

    }
    catch (error) {
        res.status(400).json({
            status: 400,
            message: err.message
        })
    }
}

const deletProduct = async (req, res, next) => {
    try {
        const product = await Product.findByIdAndRemove(req.params.id);
        if (product) {
            res.status(200).json({
                status: 200,
                message: "Product deleted successfully"
            })
        }
        else {
            res.status(400).json({
                status: 400,
                message: "No product found"
            })
        }
    }
    catch (error) {
        res.status(400).json({
            status: 400,
            message: err.message
        })
    }
}

module.exports = {
    getAllProduct,
    getProductById,
    createProduct,
    updateProduct,
    deletProduct
}