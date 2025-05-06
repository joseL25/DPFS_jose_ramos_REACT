const express = require("express");
const { product, 
        create,} = require("../controllers/products.controller");

const router = express.Router();


//vista del formulario de creacion    guestAuth,
router.get("/", create);

module.exports = router;