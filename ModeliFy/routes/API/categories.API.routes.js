const express = require("express");
const { getCategories } = require("../../controllers/API/categories.API.controller");

const router = express.Router();


// Endpoint de categorias
router.get("/", getCategories);


module.exports = router;