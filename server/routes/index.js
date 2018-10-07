var express = require('express');
var router = express.Router();
const undergraduates = require("../controllers/undergraduateController");

router.get('/api/undergraduate', undergraduates.findAll);
module.exports = router;