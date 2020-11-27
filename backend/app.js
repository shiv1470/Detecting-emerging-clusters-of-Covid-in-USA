const express = require("express");
const bodyParser = require("body-parser");

const routes = require("./routes.js/routes");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,PATCH");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

app.get("/", (req, res) => res.send({ message: "Working" }));

app.use("/app", routes);

app.listen(process.env.PORT || 4000, () => {
  console.log("listening");
});
