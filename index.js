const express = require("express");
const routes = require("./src/routes/crm");
const app = express();
const PORT = 3000;

routes(app);

app.get("/", (req, res) => {
  res.send(`Your app is runing on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Your app is runing on port ${PORT}`);
});
