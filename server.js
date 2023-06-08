const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

// Configure Settings
require("dotenv").config();
require("./config/database");

// Mount Middleware

// AJAX
app.use(express.json()); // creates req.body
app.use(require("./config/checkToken"));
app.use(cors());
app.use(morgan("dev"));

// Mount API Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/translate", require("./routes/api/translations"));
app.use("/api/decks", require("./routes/api/decks"));

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Express Server is listening on port:${port}`);
});
