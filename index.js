const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`Your app is runing on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Your app is runing on port ${PORT}`);
});
