const express = require("express");
const { getUsers, getProfile } = require("../../controllers/API/users.API.controller");
const router = express.Router();


// Endpoint de usuarios
router.get('/', getUsers);

// Endpoint de usuarios
router.get('/profile/:id', getProfile);


module.exports = router;
