const Deck = require("../../models/deck");

module.exports = {
  create: createCard,
  update,
  delete: deleteDeck
};

// POST /api/decks/:id/cards
async function createCard(req, res) {
  try {
    const deck = await Deck.findById({ name: req.params.d_id });
    deck.cards.push(req.body); // pull out properties if need be
    deck.save();
    res.json(deck);
  } catch (error) {
    res.status(400).json(error);
  }
}

// PUT /api/decks/:id/cards/:id
async function update(req, res) {
  try {
    const deck = await Deck.findById(req.params.d_id);
    deck.name = req.body.name;
    deck.save();
    res.json(deck);
  } catch (error) {
    res.status(400).json(error);
  }
}

// DELETE /api/decks/:name/cards/:id
async function deleteDeck(req, res) {
  try {
    const deck = await Deck.findById(req.params.d_id);
    const cardIdx = deck.cards.findIndex(function (card) {
      return card_.id.toString() === req.params.c_id;
    });
    deck.cards.splice(cardIdx, 1);
    await deck.save();
    if (response) res.sendStatus(200);
  } catch (error) {
    res.status(400).json(error);
  }
}
