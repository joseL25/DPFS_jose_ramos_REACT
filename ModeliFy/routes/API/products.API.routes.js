const express = require("express");
const { products, detail, lastProduct } = require("../../controllers/API/products.API.controller");

const router = express.Router();


// Endpoint de productos
router.get("/", products);

// Endpoint del detalle del producto
router.get("/detail/:id", detail);

// Endpoint del ultimo producto
router.get('/last-product', lastProduct);

module.exports = router;