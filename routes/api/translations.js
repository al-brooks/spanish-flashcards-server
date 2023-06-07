const express = require("express");
const router = express.Router();
const translateCtrl = require("../../controllers/api/translations");

// GET /api/translate/:search
router.get("/:search", translateCtrl.getTranslation);

module.exports = router;
