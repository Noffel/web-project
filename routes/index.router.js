const express = require('express');
const router = express.Router();    // to configre routing

const ctrlUser = require('../controllers/user.contoller');  //  exported register function from user controller
const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile', jwtHelper.verifyJwtToken, ctrlUser.userProfile);


module.exports = router;    //  exporting router constant to entire app


