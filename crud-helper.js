require("dotenv").config();
require("./config/database");

const Deck = require("./models/deck");
Deck.deleteMany({}).then(console.log);
