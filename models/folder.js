const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const folderSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    decks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Deck"
      }
    ],
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Folder", folderSchema);
