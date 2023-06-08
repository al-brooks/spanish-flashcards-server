const Deck = require("../../models/deck");

module.exports = {
  create: createDeck
};

// POST /api/decks
async function createDeck(req, res) {
  try {
    const deck = await Deck.create({ name: req.body.name });
    deck.users.push(req.user);
    deck.save();
    res.sendStatus(200);
  } catch (error) {
    res.status(400).json(error);
  }
}
