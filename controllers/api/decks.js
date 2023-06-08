const Deck = require("../../models/deck");

module.exports = {
  index,
  create: createDeck
};

// GET /api/decks
async function index(req, res) {
  try {
    const decks = await Deck.find({ users: req.user });
    res.json(decks);
  } catch (error) {
    res.status(400).json(error);
  }
}

// POST /api/decks
async function createDeck(req, res) {
  try {
    const deck = await Deck.create({ name: req.body.name });
    deck.users.push(req.user);
    deck.save();
    res.json(deck);
  } catch (error) {
    res.status(400).json(error);
  }
}
