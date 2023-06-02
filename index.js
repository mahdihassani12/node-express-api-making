const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./src/routes/crm");
const app = express();
const PORT = 3000;

// Mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/CRM", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Body parser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get("/", (req, res) => {
  res.send(`Your app is runing on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Your app is runing on port ${PORT}`);
});
