const routes = (app) => {
  app
    .route("/contact")

    .get(
      (req, res, next) => {
        //middleware
        console.log(`Request from ${req.originalUrl}`);
        console.log(`Request type ${req.method}`);
        next();
      },
      (req, res, next) => {
        res.send("Get request received successfuly");
      }
    )

    .post((req, res) => {
      res.send("Post request received successfuly");
    })

    .put((req, res) => {
      res.send("Put request received successfuly");
    })

    .delete((req, res) => {
      res.send("Delete request received successfuly");
    });
};

module.exports = routes;
