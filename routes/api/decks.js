const express = require("express");
const router = express.Router();
const decksCtrl = require("../../controllers/api/decks");

// GET /api/decks
router.get("/", decksCtrl.index);

// POST /api/decks
router.post("/", decksCtrl.create);

// get /api/decks/:id
router.get("/decks/:id", decksCtrl.show);

module.exports = router;
