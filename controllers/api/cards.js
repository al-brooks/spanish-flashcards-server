const Deck = require("../../models/deck");

module.exports = {
  create: createCard,
  show,
  update,
  delete: deleteCard
};

// POST /api/decks/:id/cards
async function createCard(req, res) {
  try {
    const { content, translation, difficulty } = req.body;
    const deck = await Deck.findById(req.params.d_id);
    deck.cards.push({ content, translation, difficulty });
    deck.save();
    res.json(deck);
  } catch (error) {
    res.status(400).json(error);
  }
}

// GET /api/decks/:id/cards/:id

async function show(req, res) {
  console.log("here");
  try {
    const deck = await Deck.findById(req.params.d_id);
    const card = deck.cards.find(function (card) {
      return card._id.toString() === req.params.c_id;
    });
    res.json(card);
  } catch (error) {
    res.status(400).json(error);
  }
}

// PUT /api/decks/:id/cards/:id
async function update(req, res) {
  try {
    const { content, translation, difficulty } = req.body;
    const deck = await Deck.findById(req.params.d_id);
    const card = deck.cards.find(function (card) {
      return card._id.toString() === req.params.c_id;
    });
    card.content = content;
    card.translation = translation;
    card.difficulty = difficulty;

    await deck.save();
    res.json(deck);
  } catch (error) {
    res.status(400).json(error);
  }
}

// DELETE /api/decks/:name/cards/:id
async function deleteCard(req, res) {
  try {
    const deck = await Deck.findById(req.params.d_id);
    const cardIdx = deck.cards.findIndex(function (card) {
      return card._id.toString() === req.params.c_id;
    });
    deck.cards.splice(cardIdx, 1);
    await deck.save();
    res.json(deck);
  } catch (error) {
    res.status(400).json(error);
  }
}
