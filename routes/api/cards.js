const express = require("express");
const router = express.Router();
const cardsCtrl = require("../../controllers/api/cards");

// POST /api/decks/:name/cards/
router.post("/decks/:name/cards", cardsCtrl.create);

// GET /api/decks/:name/cards/:id
router.get("/decks/:name/cards/:id", cardsCtrl.edit);
