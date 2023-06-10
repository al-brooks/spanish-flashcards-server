const Deck = require("../../models/deck");

module.exports = {
  index,
  create: createDeck,
  show,
  update,
  delete: deleteDeck
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

// GET /api/decks/:id
async function show(req, res) {
  try {
    const deck = await Deck.findById(req.params.id);
    res.json(deck);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function update(req, res) {
  try {
    const deck = await Deck.findById(req.params.id);
    deck.name = req.body.name;
    deck.save();
    res.json(deck);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function deleteDeck(req, res) {
  try {
    const response = await Deck.findByIdAndDelete(req.params.id);
    res.json(response);
  } catch (error) {
    res.status(400).json(error);
  }
}
