const express = require("express");
const router = express.Router();
const decksCtrl = require("../../controllers/api/decks");

// GET /api/decks
router.get("/", decksCtrl.index);

// POST /api/decks
router.post("/", decksCtrl.create);

// GET /api/decks/:id
router.get("/:id", decksCtrl.show);

// PUT /api/decks/:id
router.put("/:id", decksCtrl.update);

// DELETE /api/decks/:id
router.delete("/:id", decksCtrl.delete);

module.exports = router;
