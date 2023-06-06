const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema(
  {
    content: {
      type: String,
      required: true
    },
    translation: {
      type: String,
      required: true
    },
    difficulty: {
      type: String,
      enum: ["New Word", "Tough", "Okay", "Easy", "Fluent"],
      required: true
    }
  },
  {
    timestamps: true
  }
);

const deckSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    cards: [cardSchema]
  },
  {
    timestamps: true
  }
);

const folderSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    cards: [deckSchema]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Folder", folderSchema);
