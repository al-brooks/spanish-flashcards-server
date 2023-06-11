const express = require("express");
const router = express.Router();
const cardsCtrl = require("../../controllers/api/cards");

// POST /api/decks/:id/cards
router.post("/:d_id/cards/create", cardsCtrl.create);

// GET /api/decks/:id/cards/:id
router.get("/:d_id/cards/:c_id", cardsCtrl.show);

// PUT /api/decks/:id/cards/:id
router.put("/:d_id/cards/:c_id", cardsCtrl.update);

// DELETE /api/decks/:id/cards/:id
router.delete("/:d_id/cards/:c_id", cardsCtrl.delete);

module.exports = router;
