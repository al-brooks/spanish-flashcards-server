const express = require("express");
const morgan = require("morgan");

const app = express();

// Configure Settings
require("dotenv").config();
require("./config/database");

// Mount Middleware

// AJAX
app.use(express.json()); // creates req.body
app.use(morgan("dev"));

// Mount API Routes
app.use("/api/users", require("./routes/api/users"));

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Express Server is listening on port:${port}`);
});
