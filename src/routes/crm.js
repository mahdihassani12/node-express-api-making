const routes = (app) => {

  app.route("/contact")
  
  .get((req, res) => {
    res.send("Get request received successfuly");
  })

  .post((req, res) => {
    res.send("Post request received successfuly");
  })

  .put((req, res) => {
    res.send("Put request received successfuly");
  })

  .delete((req, res) => {
    res.send("Delete request received successfuly");
  })

};

module.exports = routes;