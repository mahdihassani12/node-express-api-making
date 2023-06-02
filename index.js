const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

// Connection to database
const connectDB = require("./db");
connectDB();

// Body parser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API integration
app.use("/api/contacts", require("./src/routes/crm"));

app.get("/", (req, res) => {
  res.send(`Your app is runing on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Your app is runing on port ${PORT}`);
});
