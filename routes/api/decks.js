const express = require("express");
const router = express.Router();
const decksCtrl = require("../../controllers/api/decks");

// POST /api/decks
router.post("/decks", decksCtrl.create);

// get /api/decks/:id
router.get("/decks/:id", decksCtrl.show);

module.exports = router;
