const express = require("express");
const router = express.Router();
const translateCtrl = require("../../controllers/api/translations");

// GET /api/translate/:words
router.get("/:words", translateCtrl.getTranslation);

module.exports = router;
