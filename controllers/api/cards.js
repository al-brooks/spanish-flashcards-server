const Deck = require("../../models/deck");

module.exports = {
  index,
  create: createDeck
};

// GET /api/decks/cards/all
async function index(req, res) {
  try {
    const decks = await Deck.find({ users: req.user });
    res.json(decks.cards);
  } catch (error) {
    res.status(400).json(error);
  }
}

// POST /api/decks/cards/create
async function createDeck(req, res) {
  try {
    cardOptions = {
      content: "Fish",
      translation: "Pescado",
      difficulty: "New Word"
    };
    const deck = await Deck.create({ name: "Food" });
    deck.users.push(req.user);
    deck.cards.push(cardOptions);
    deck.save();
    res.json(deck);
  } catch (error) {
    res.status(400).json(error);
  }
}
