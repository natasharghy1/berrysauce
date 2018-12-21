const express = require('express');
const router = express.Router();

//run the register function
const ctrlUser = require('../controllers/user.controller');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
module.exports = router;