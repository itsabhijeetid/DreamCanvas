const { Router } = require("express");
const express = require("express");
const {generateImage} = require("../controllers/openaiContoller")
const router = express.Router();


router.post('/generateimage', generateImage);

module.exports = router;