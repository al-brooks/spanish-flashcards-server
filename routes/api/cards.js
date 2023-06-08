const express = require("express");
const router = express.Router();
const cardsCtrl = require("../../controllers/api/cards");

// GET /api/decks/all/cards
router.get("/all", cardsCtrl.index);

// POST /api/decks/cards
router.post("/create", cardsCtrl.create);

// GET /api/decks/:name/cards/:id
// router.get("/:name/cards/:id", cardsCtrl.edit);

module.exports = router;
