const Router = require("express").Router();
const ctrl = require("../controller/controller");

Router.get("/satscan", (req, res) => {
  ctrl
    .satScan(req.body)
    .then((response) => res.status(response.status).json(response.result))
    .catch((err) => res.status(err.status).json(err.result));
});

Router.post("/pso", (req, res) => {
  ctrl
    .pso(req.body)
    .then((response) => res.status(response.status).json(response.result))
    .catch((err) => res.status(err.status).json(err.result));
});

module.exports = Router;
