const express = require("express");
const { products, detail } = require("../../controllers/API/products.API.controller");

const router = express.Router();


// Endpoint de productos
router.get("/", products);

// Endpoint del detalle del producto
router.get("/detail/:id", detail);

module.exports = router;