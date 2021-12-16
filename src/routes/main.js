var express = require('express');
var router = express.Router();

const {index, admin}= require('../controllers/indexController')
const adminMiddleware = require("../middlewares/adminMiddleware");

router.get('/', index);
router.get('/admin', adminMiddleware, admin);



module.exports = router;